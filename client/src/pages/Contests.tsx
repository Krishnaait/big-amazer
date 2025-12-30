import { useParams, useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2, Trophy, Users, Award } from "lucide-react";

export default function Contests() {
  const { matchId } = useParams<{ matchId: string }>();
  const [, setLocation] = useLocation();
  const { isAuthenticated } = useAuth();

  const { data: contestsData, isLoading } = trpc.contests.getContests.useQuery(
    { matchId },
    { enabled: !!matchId }
  );

  const { data: matchData } = trpc.cricket.getMatches.useQuery({ matchId });

  const joinContestMutation = trpc.contests.joinContest.useMutation({
    onSuccess: () => {
      toast.success("Successfully joined contest!");
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to join contest");
    },
  });

  const handleJoinContest = (contestId: number) => {
    if (!isAuthenticated) {
      toast.error("Please login to join contests");
      setLocation("/login");
      return;
    }

    // For now, we'll need to select a team
    // In a full implementation, this would open a modal to select team
    toast.info("Team selection coming soon!");
  };

  if (isLoading) {
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

  return (
    <div className="min-h-screen flex flex-col bg-[#0F1419]">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">Contests</h1>
            {matchData?.match && (
              <p className="text-gray-400">{matchData.match.name}</p>
            )}
          </div>

          {/* Create Team Button */}
          <div className="mb-6">
            <Button
              onClick={() => setLocation(`/create-team/${matchId}`)}
              className="bg-[#FF6B35] hover:bg-[#ff5722] text-white"
            >
              Create New Team
            </Button>
          </div>

          {/* Contests List */}
          {contestsData && contestsData.contests && contestsData.contests.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contestsData.contests.map((contest: any) => (
                <Card key={contest.id} className="bg-[#1A1F2E] border-gray-700 p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">{contest.name}</h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Users className="w-4 h-4" />
                      <span>{contest.currentEntries || 0} / {contest.maxEntries} spots</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Entry</span>
                      <span className="text-[#F7931E] font-bold">FREE</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Type</span>
                      <span className="text-green-500 font-bold">Educational</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Status</span>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        contest.status === "live" ? "bg-green-500/20 text-green-500" :
                        contest.status === "completed" ? "bg-gray-500/20 text-gray-500" :
                        "bg-blue-500/20 text-blue-500"
                      }`}>
                        {contest.status}
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-[#FF6B35] h-2 rounded-full transition-all"
                        style={{
                          width: `${((contest.currentEntries || 0) / contest.maxEntries) * 100}%`
                        }}
                      />
                    </div>
                  </div>

                  <Button
                    onClick={() => handleJoinContest(contest.id)}
                    disabled={
                      contest.status !== "pending" ||
                      (contest.currentEntries || 0) >= contest.maxEntries ||
                      joinContestMutation.isPending
                    }
                    className="w-full bg-[#004E89] hover:bg-[#003d6b] text-white"
                  >
                    {joinContestMutation.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Joining...
                      </>
                    ) : (
                      "Join Contest"
                    )}
                  </Button>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="bg-[#1A1F2E] border-gray-700 p-12 text-center">
              <Trophy className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No Contests Available</h3>
              <p className="text-gray-400 mb-6">
                Contests will be available once the match squad is announced
              </p>
              <Button
                onClick={() => setLocation("/matches")}
                className="bg-[#FF6B35] hover:bg-[#ff5722]"
              >
                Browse Matches
              </Button>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
