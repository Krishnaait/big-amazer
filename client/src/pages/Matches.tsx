import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Loader2 } from "lucide-react";

export default function Matches() {
  const { data: matchesData, isLoading } = trpc.cricket.getMatches.useQuery();

  return (
    <div className="min-h-screen flex flex-col bg-[#0F1419]">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-8">Matches</h1>

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 text-[#FF6B35] animate-spin" />
            </div>
          ) : (
            <>
              {/* Live Matches */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Live Matches</h2>
                {matchesData?.live && matchesData.live.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {matchesData.live.map((match) => (
                      <Card key={match.id} className="bg-[#1A1F2E] border-gray-700">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-white text-lg">{match.name}</CardTitle>
                            <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full animate-pulse">
                              LIVE
                            </span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-400 text-sm mb-2">{match.venue}</p>
                          <p className="text-gray-500 text-xs mb-4">{match.matchType}</p>
                          <Link href={`/live-score/${match.id}`}>
                            <Button size="sm" className="w-full bg-[#FF6B35] hover:bg-[#ff5722] text-white">
                              View Live Score
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400">No live matches at the moment</p>
                )}
              </section>

              {/* Upcoming Matches */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Upcoming Matches</h2>
                {matchesData?.upcoming && matchesData.upcoming.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {matchesData.upcoming.map((match) => (
                      <Card key={match.id} className="bg-[#1A1F2E] border-gray-700">
                        <CardHeader>
                          <CardTitle className="text-white text-lg">{match.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-400 text-sm mb-2">{match.venue}</p>
                          <p className="text-gray-500 text-xs mb-4">
                            {new Date(match.dateTimeGMT).toLocaleString()}
                          </p>
                          <div className="flex gap-2">
                            <Link href={`/create-team/${match.id}`} className="flex-1">
                              <Button asChild size="sm" className="w-full bg-[#FF6B35] hover:bg-[#ff5722] text-white">
                                <span>Create Team</span>
                              </Button>
                            </Link>
                            <Link href={`/contests/${match.id}`} className="flex-1">
                              <Button asChild size="sm" variant="outline" className="w-full border-gray-600 text-gray-300">
                                <span>Contests</span>
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400">No upcoming matches at the moment</p>
                )}
              </section>

              {/* Completed Matches */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Completed Matches</h2>
                {matchesData?.completed && matchesData.completed.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {matchesData.completed.slice(0, 9).map((match) => (
                      <Card key={match.id} className="bg-[#1A1F2E] border-gray-700">
                        <CardHeader>
                          <CardTitle className="text-white text-lg">{match.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-400 text-sm mb-2">{match.venue}</p>
                          <p className="text-gray-500 text-xs mb-2">
                            {new Date(match.dateTimeGMT).toLocaleDateString()}
                          </p>
                          <p className="text-[#F7931E] text-sm font-semibold">
                            {match.status}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400">No completed matches to display</p>
                )}
              </section>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
