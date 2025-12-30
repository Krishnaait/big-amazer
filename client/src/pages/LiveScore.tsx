import { useState, useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Loader2, RefreshCw, Trophy } from "lucide-react";

export default function LiveScore() {
  const params = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [selectedContestId, setSelectedContestId] = useState<number | null>(null);

  // Get contests for this match
  const { data: contestsData } = trpc.contests.getContests.useQuery(
    { matchId: params.id },
    { enabled: !!params.id }
  );

  // Auto-select first contest if available
  useEffect(() => {
    if (contestsData?.contests && contestsData.contests.length > 0 && !selectedContestId) {
      setSelectedContestId(contestsData.contests[0].id);
    }
  }, [contestsData, selectedContestId]);

  const { data: leaderboardData, isLoading, refetch } = trpc.contests.getLeaderboard.useQuery(
    { contestId: selectedContestId ?? 0 },
    { enabled: selectedContestId !== null && selectedContestId > 0 }
  );

  // Auto-refresh every 30 seconds
  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      refetch();
      setLastUpdated(new Date());
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, [autoRefresh, refetch]);

  const handleManualRefresh = () => {
    refetch();
    setLastUpdated(new Date());
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
          <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Live Leaderboard</h1>
              <p className="text-gray-400">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </p>
            </div>
            
            {/* Contest Selector */}
            {contestsData && contestsData.contests && contestsData.contests.length > 1 && (
              <select
                value={selectedContestId || ""}
                onChange={(e) => setSelectedContestId(Number(e.target.value))}
                className="bg-[#1A1F2E] border border-gray-700 text-white rounded px-4 py-2"
              >
                {contestsData.contests.map((contest: any) => (
                  <option key={contest.id} value={contest.id}>
                    {contest.name} - ₹{contest.prizePool}
                  </option>
                ))}
              </select>
            )}
            
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setAutoRefresh(!autoRefresh)}
                className={`border-gray-600 ${autoRefresh ? "bg-[#004E89] text-white" : "text-gray-300"}`}
              >
                Auto-refresh {autoRefresh ? "ON" : "OFF"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleManualRefresh}
                className="border-gray-600 text-gray-300"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>

          {/* Match Info */}
          {leaderboardData?.contest && (
            <Card className="bg-[#1A1F2E] border-gray-700 p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-gray-400 text-sm">Contest</p>
                  <p className="text-white text-lg font-bold">{leaderboardData.contest.name}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Type</p>
                  <p className="text-green-500 text-lg font-bold">{leaderboardData.contest.contestType}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Participants</p>
                  <p className="text-white text-lg font-bold">
                    {leaderboardData.contest.currentEntries} / {leaderboardData.contest.maxEntries}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Status</p>
                  <span className={`inline-block px-3 py-1 rounded text-sm font-semibold ${
                    leaderboardData.contest.status === "live" ? "bg-green-500/20 text-green-500" :
                    leaderboardData.contest.status === "completed" ? "bg-gray-500/20 text-gray-500" :
                    "bg-blue-500/20 text-blue-500"
                  }`}>
                    {leaderboardData.contest.status}
                  </span>
                </div>
              </div>
            </Card>
          )}

          {/* Leaderboard */}
          {leaderboardData && leaderboardData.entries && leaderboardData.entries.length > 0 ? (
            <Card className="bg-[#1A1F2E] border-gray-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#0F1419]">
                    <tr>
                      <th className="px-6 py-4 text-left text-gray-400 font-semibold">Rank</th>
                      <th className="px-6 py-4 text-left text-gray-400 font-semibold">Team Name</th>
                      <th className="px-6 py-4 text-left text-gray-400 font-semibold">User</th>
                      <th className="px-6 py-4 text-right text-gray-400 font-semibold">Points</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {leaderboardData.entries.map((entry: any, index: number) => (
                      <tr
                        key={entry.id}
                        className={`hover:bg-[#1f2937] transition-colors ${
                          index < 3 ? "bg-[#004E89]/10" : ""
                        }`}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            {index === 0 && <Trophy className="w-5 h-5 text-yellow-500" />}
                            {index === 1 && <Trophy className="w-5 h-5 text-gray-400" />}
                            {index === 2 && <Trophy className="w-5 h-5 text-orange-600" />}
                            <span className="text-white font-bold">{index + 1}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-white font-medium">{entry.teamName}</td>
                        <td className="px-6 py-4 text-gray-300">{entry.userName}</td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-[#F7931E] font-bold text-lg">
                            {entry.points.toFixed(2)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          ) : (
            <Card className="bg-[#1A1F2E] border-gray-700 p-12 text-center">
              <Trophy className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No Entries Yet</h3>
              <p className="text-gray-400 mb-6">
                Be the first to join this contest!
              </p>
              <Button
                onClick={() => setLocation("/matches")}
                className="bg-[#FF6B35] hover:bg-[#ff5722]"
              >
                Browse Contests
              </Button>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
