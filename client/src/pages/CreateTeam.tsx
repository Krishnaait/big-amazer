import { useState, useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2, Check, X } from "lucide-react";

interface Player {
  id: string;
  name: string;
  role: string;
  credits: number;
}

export default function CreateTeam() {
  const { matchId } = useParams<{ matchId: string }>();
  const [, setLocation] = useLocation();
  const { isAuthenticated } = useAuth();
  
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [captainId, setCaptainId] = useState<string>("");
  const [viceCaptainId, setViceCaptainId] = useState<string>("");
  const [teamName, setTeamName] = useState("");
  const [filterRole, setFilterRole] = useState<string>("all");

  const { data: squadData, isLoading: squadLoading } = trpc.cricket.getMatchSquad.useQuery(
    { matchId: matchId || "" },
    { enabled: !!matchId }
  );

  const createTeamMutation = trpc.teams.createTeam.useMutation({
    onSuccess: () => {
      toast.success("Team created successfully!");
      setLocation(`/contests/${matchId}`);
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to create team");
    },
  });

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Please login to create a team");
      setLocation("/login");
    }
  }, [isAuthenticated, setLocation]);

  if (squadLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-[#0F1419]">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-[#FF6B35]" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!squadData || !squadData.data) {
    return (
      <div className="min-h-screen flex flex-col bg-[#0F1419]">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-white text-xl mb-4">Squad not available for this match</p>
            <Button onClick={() => setLocation("/matches")} className="bg-[#FF6B35] hover:bg-[#ff5722]">
              Back to Matches
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Transform squad data to players with roles and credits
  const allPlayers: Player[] = (squadData.data.players || []).map((p: any) => ({
    id: p.id || p.name,
    name: p.name,
    role: p.role || "All-rounder",
    credits: 10, // Default credits, can be adjusted based on player role/stats
  }));

  const filteredPlayers = filterRole === "all" 
    ? allPlayers 
    : allPlayers.filter(p => p.role.toLowerCase().includes(filterRole.toLowerCase()));

  const totalCreditsUsed = selectedPlayers.reduce((sum, p) => sum + p.credits, 0);
  const maxCredits = 100;

  const handlePlayerToggle = (player: Player) => {
    if (selectedPlayers.find(p => p.id === player.id)) {
      // Remove player
      setSelectedPlayers(selectedPlayers.filter(p => p.id !== player.id));
      if (captainId === player.id) setCaptainId("");
      if (viceCaptainId === player.id) setViceCaptainId("");
    } else {
      // Add player
      if (selectedPlayers.length >= 11) {
        toast.error("You can only select 11 players");
        return;
      }
      if (totalCreditsUsed + player.credits > maxCredits) {
        toast.error("Not enough credits");
        return;
      }
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  const handleCreateTeam = () => {
    if (selectedPlayers.length !== 11) {
      toast.error("Please select exactly 11 players");
      return;
    }
    if (!captainId) {
      toast.error("Please select a captain");
      return;
    }
    if (!viceCaptainId) {
      toast.error("Please select a vice-captain");
      return;
    }
    if (!teamName.trim()) {
      toast.error("Please enter a team name");
      return;
    }

    createTeamMutation.mutate({
      matchId: matchId || "",
      name: teamName,
      players: selectedPlayers.map(p => p.id),
      captainId,
      viceCaptainId,
      totalCreditsUsed,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0F1419]">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">Create Your Team</h1>
            <p className="text-gray-400">Select 11 players within {maxCredits} credits</p>
          </div>

          {/* Team Summary */}
          <Card className="bg-[#1A1F2E] border-gray-700 p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <p className="text-gray-400 text-sm">Players Selected</p>
                <p className="text-white text-2xl font-bold">{selectedPlayers.length}/11</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Credits Used</p>
                <p className="text-white text-2xl font-bold">{totalCreditsUsed}/{maxCredits}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Captain</p>
                <p className="text-white text-lg">{captainId ? selectedPlayers.find(p => p.id === captainId)?.name : "Not selected"}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Vice Captain</p>
                <p className="text-white text-lg">{viceCaptainId ? selectedPlayers.find(p => p.id === viceCaptainId)?.name : "Not selected"}</p>
              </div>
            </div>
            
            <div className="mt-4">
              <input
                type="text"
                placeholder="Enter team name"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                className="w-full px-4 py-2 bg-[#0F1419] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#FF6B35]"
              />
            </div>
          </Card>

          {/* Role Filter */}
          <div className="flex gap-2 mb-6 overflow-x-auto">
            {["all", "batsman", "bowler", "all-rounder", "wicket-keeper"].map((role) => (
              <Button
                key={role}
                variant={filterRole === role ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterRole(role)}
                className={filterRole === role ? "bg-[#FF6B35] hover:bg-[#ff5722]" : "border-gray-600 text-gray-300"}
              >
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </Button>
            ))}
          </div>

          {/* Player List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {filteredPlayers.map((player) => {
              const isSelected = selectedPlayers.find(p => p.id === player.id);
              const isCaptain = captainId === player.id;
              const isViceCaptain = viceCaptainId === player.id;

              return (
                <Card
                  key={player.id}
                  className={`p-4 cursor-pointer transition-all ${
                    isSelected
                      ? "bg-[#004E89] border-[#004E89]"
                      : "bg-[#1A1F2E] border-gray-700 hover:border-[#FF6B35]"
                  }`}
                  onClick={() => handlePlayerToggle(player)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-white font-semibold">{player.name}</h3>
                      <p className="text-gray-400 text-sm">{player.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#F7931E] font-bold">{player.credits}</p>
                      {isSelected && (
                        <Check className="w-5 h-5 text-green-500 ml-auto" />
                      )}
                    </div>
                  </div>

                  {isSelected && (
                    <div className="flex gap-2 mt-3">
                      <Button
                        size="sm"
                        variant={isCaptain ? "default" : "outline"}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCaptainId(player.id);
                        }}
                        className={isCaptain ? "bg-[#FF6B35] hover:bg-[#ff5722] text-xs" : "text-xs border-gray-600"}
                      >
                        C (2x)
                      </Button>
                      <Button
                        size="sm"
                        variant={isViceCaptain ? "default" : "outline"}
                        onClick={(e) => {
                          e.stopPropagation();
                          setViceCaptainId(player.id);
                        }}
                        className={isViceCaptain ? "bg-[#004E89] hover:bg-[#003d6b] text-xs" : "text-xs border-gray-600"}
                      >
                        VC (1.5x)
                      </Button>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>

          {/* Create Team Button */}
          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={handleCreateTeam}
              disabled={createTeamMutation.isPending || selectedPlayers.length !== 11}
              className="bg-[#FF6B35] hover:bg-[#ff5722] text-white px-8"
            >
              {createTeamMutation.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Creating...
                </>
              ) : (
                "Create Team"
              )}
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
