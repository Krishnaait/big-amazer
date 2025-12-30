import { useState, useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Loader2, Trophy, Star, Users, ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Player {
  id: string;
  name: string;
  role: string;
  credits?: number;
}

interface PlayerWithPid extends Player {
  pid: string;
}

export default function CreateTeamWizard() {
  const { matchId } = useParams();
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(1);
  const [selectedPlayers, setSelectedPlayers] = useState<PlayerWithPid[]>([]);
  const [captainId, setCaptainId] = useState<string>("");
  const [viceCaptainId, setViceCaptainId] = useState<string>("");
  const [teamName, setTeamName] = useState("");

  const { data: squadData, isLoading } = trpc.cricket.getMatchSquad.useQuery(
    { matchId: matchId || "" },
    { enabled: !!matchId }
  );

  const createTeamMutation = trpc.teams.createTeam.useMutation({
    onSuccess: () => {
      toast.success("Team created successfully!");
      setLocation("/contests/" + matchId);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create team");
    },
  });

  // Assign random credits (7-10) to each player
  const playersWithCredits = squadData?.data?.players?.map((player: Player) => ({
    ...player,
    pid: player.id,
    credits: Math.floor(Math.random() * 4) + 7, // Random 7-10
  })) || [];

  const totalCreditsUsed = selectedPlayers.reduce(
    (sum, player) => sum + (player.credits || 0),
    0
  );

  const togglePlayerSelection = (player: PlayerWithPid) => {
    if (selectedPlayers.find((p) => p.pid === player.pid)) {
      setSelectedPlayers(selectedPlayers.filter((p) => p.pid !== player.pid));
      if (captainId === player.pid) setCaptainId("");
      if (viceCaptainId === player.pid) setViceCaptainId("");
    } else {
      if (selectedPlayers.length < 11) {
        setSelectedPlayers([...selectedPlayers, player]);
      } else {
        toast.error("You can only select 11 players");
      }
    }
  };

  const canProceedToStep2 = selectedPlayers.length === 11 && totalCreditsUsed <= 100;
  const canProceedToStep3 = captainId && viceCaptainId && captainId !== viceCaptainId;
  const canSubmit = teamName.trim().length > 0;

  const handleSubmit = () => {
    createTeamMutation.mutate({
      matchId: matchId || "",
      name: teamName,
      players: selectedPlayers.map((p) => p.pid),
      captainId,
      viceCaptainId,
      totalCreditsUsed,
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <div className="max-w-6xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4">
              <div className={`flex items-center gap-2 ${step >= 1 ? "text-primary" : "text-muted-foreground"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                  1
                </div>
                <span className="font-medium">Select Players</span>
              </div>
              <ArrowRight className="text-muted-foreground" />
              <div className={`flex items-center gap-2 ${step >= 2 ? "text-primary" : "text-muted-foreground"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                  2
                </div>
                <span className="font-medium">Choose Captain</span>
              </div>
              <ArrowRight className="text-muted-foreground" />
              <div className={`flex items-center gap-2 ${step >= 3 ? "text-primary" : "text-muted-foreground"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                  3
                </div>
                <span className="font-medium">Review & Submit</span>
              </div>
            </div>
          </div>

          {/* Step 1: Select Players */}
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Select 11 Players
                </CardTitle>
                <CardDescription>
                  Selected: {selectedPlayers.length}/11 | Credits Used: {totalCreditsUsed}/100
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {playersWithCredits.map((player: PlayerWithPid) => {
                    const isSelected = selectedPlayers.find((p) => p.pid === player.pid);
                    return (
                      <Card
                        key={player.pid}
                        className={`cursor-pointer transition-all ${
                          isSelected ? "border-primary bg-primary/5" : "hover:border-primary/50"
                        }`}
                        onClick={() => togglePlayerSelection(player)}
                      >
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium">{player.name}</p>
                              <p className="text-sm text-muted-foreground">{player.role}</p>
                            </div>
                            <Badge variant={isSelected ? "default" : "outline"}>
                              {player.credits} CR
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
                <div className="mt-6 flex justify-end">
                  <Button
                    onClick={() => setStep(2)}
                    disabled={!canProceedToStep2}
                  >
                    Next: Choose Captain
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Choose Captain & Vice-Captain */}
          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Choose Captain & Vice-Captain
                </CardTitle>
                <CardDescription>
                  Captain gets 2x points, Vice-Captain gets 1.5x points
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-base font-semibold mb-4 block">Captain (2x Points)</Label>
                  <RadioGroup value={captainId} onValueChange={setCaptainId}>
                    <div className="grid gap-3">
                      {selectedPlayers.map((player) => (
                        <div key={player.pid} className="flex items-center space-x-2">
                          <RadioGroupItem value={player.pid} id={`captain-${player.pid}`} />
                          <Label htmlFor={`captain-${player.pid}`} className="flex-1 cursor-pointer">
                            {player.name} ({player.role})
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-base font-semibold mb-4 block">Vice-Captain (1.5x Points)</Label>
                  <RadioGroup value={viceCaptainId} onValueChange={setViceCaptainId}>
                    <div className="grid gap-3">
                      {selectedPlayers.map((player) => (
                        <div key={player.pid} className="flex items-center space-x-2">
                          <RadioGroupItem value={player.pid} id={`vc-${player.pid}`} disabled={player.pid === captainId} />
                          <Label htmlFor={`vc-${player.pid}`} className={`flex-1 ${player.pid === captainId ? "opacity-50" : "cursor-pointer"}`}>
                            {player.name} ({player.role})
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                  <Button
                    onClick={() => setStep(3)}
                    disabled={!canProceedToStep3}
                  >
                    Next: Review Team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Review & Submit */}
          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Review Your Team
                </CardTitle>
                <CardDescription>
                  Give your team a name and review your selections
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="teamName">Team Name</Label>
                  <Input
                    id="teamName"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="Enter your team name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Your Team ({selectedPlayers.length} players)</h3>
                  <div className="grid gap-3">
                    {selectedPlayers.map((player) => {
                      const isCaptain = player.pid === captainId;
                      const isViceCaptain = player.pid === viceCaptainId;
                      return (
                        <div key={player.pid} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <div className="flex items-center gap-3">
                            <span className="font-medium">{player.name}</span>
                            <span className="text-sm text-muted-foreground">({player.role})</span>
                            {isCaptain && (
                              <Badge className="bg-orange-500">
                                <Trophy className="h-3 w-3 mr-1" />
                                Captain
                              </Badge>
                            )}
                            {isViceCaptain && (
                              <Badge className="bg-yellow-500">
                                <Star className="h-3 w-3 mr-1" />
                                Vice-Captain
                              </Badge>
                            )}
                          </div>
                          <Badge variant="outline">{player.credits} CR</Badge>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total Credits Used:</span>
                      <span className="text-lg font-bold">{totalCreditsUsed}/100</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={!canSubmit || createTeamMutation.isPending}
                  >
                    {createTeamMutation.isPending && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Create Team
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
