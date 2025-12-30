import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";
import { Trophy, Users, Zap } from "lucide-react";

export default function Home() {
  const { isAuthenticated } = useAuth();
  const { data: matchesData } = trpc.cricket.getMatches.useQuery();

  return (
    <div className="min-h-screen flex flex-col bg-[#0F1419]">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#FF6B35] via-[#F7931E] to-[#004E89] py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Big Amazer
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Fantasy Sports Reimagined
            </p>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Create your dream cricket team, join exciting contests, and compete with thousands of players for glory and prizes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {isAuthenticated ? (
                <Link href="/dashboard">
                  <Button size="lg" className="bg-white text-[#FF6B35] hover:bg-gray-100 font-semibold">
                    Go to Dashboard
                  </Button>
                </Link>
              ) : (
                <>
                  <Link href="/register">
                    <Button size="lg" className="bg-white text-[#FF6B35] hover:bg-gray-100 font-semibold">
                      Get Started
                    </Button>
                  </Link>
                  <Link href="/how-to-play">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                      Learn How to Play
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-[#1A1F2E]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Big Amazer?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B35] rounded-full mb-4">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Big Prizes</h3>
                <p className="text-gray-400">
                  Compete in contests with massive prize pools and win real rewards
                </p>
              </div>
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#004E89] rounded-full mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Join Thousands</h3>
                <p className="text-gray-400">
                  Play with cricket fans from across the country in various contest formats
                </p>
              </div>
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F7931E] rounded-full mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Live Updates</h3>
                <p className="text-gray-400">
                  Get real-time scores and track your team's performance as matches unfold
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Matches Preview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8">Upcoming Matches</h2>
            {matchesData?.upcoming && matchesData.upcoming.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {matchesData.upcoming.slice(0, 6).map((match) => (
                  <div key={match.id} className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-6">
                    <h3 className="text-white font-semibold mb-2">{match.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{match.venue}</p>
                    <p className="text-gray-500 text-xs mb-4">
                      {new Date(match.dateTimeGMT).toLocaleString()}
                    </p>
                    <Link href={`/matches/${match.id}`}>
                      <Button size="sm" className="w-full bg-[#FF6B35] hover:bg-[#ff5722] text-white">
                        Create Team
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400">No upcoming matches at the moment. Check back soon!</p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
