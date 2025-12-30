import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, Target } from "lucide-react";
import { useEffect } from "react";

export default function Dashboard() {
  const { isAuthenticated, loading } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      setLocation("/login");
    }
  }, [isAuthenticated, loading, setLocation]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0F1419]">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0F1419]">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-8">Dashboard</h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-[#1A1F2E] border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">
                  Total Teams
                </CardTitle>
                <Users className="h-4 w-4 text-[#FF6B35]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">0</div>
                <p className="text-xs text-gray-500 mt-1">
                  Create your first team
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A1F2E] border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">
                  Contests Joined
                </CardTitle>
                <Target className="h-4 w-4 text-[#004E89]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">0</div>
                <p className="text-xs text-gray-500 mt-1">
                  Join a contest to compete
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A1F2E] border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">
                  Total Winnings
                </CardTitle>
                <Trophy className="h-4 w-4 text-[#F7931E]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">₹0</div>
                <p className="text-xs text-gray-500 mt-1">
                  Win contests to earn rewards
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="bg-[#1A1F2E] border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-[#FF6B35] hover:bg-[#ff5722] text-white"
                onClick={() => setLocation("/matches")}
              >
                View Matches
              </Button>
              <Button 
                variant="outline"
                className="border-[#004E89] text-[#004E89] hover:bg-[#004E89] hover:text-white"
                onClick={() => setLocation("/how-to-play")}
              >
                Learn How to Play
              </Button>
            </CardContent>
          </Card>

          {/* My Teams Section */}
          <Card className="bg-[#1A1F2E] border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-white">My Teams</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 text-center py-8">
                You haven't created any teams yet. Start by viewing upcoming matches and creating your first team!
              </p>
            </CardContent>
          </Card>

          {/* My Contests Section */}
          <Card className="bg-[#1A1F2E] border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">My Contests</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 text-center py-8">
                You haven't joined any contests yet. Create a team and join a contest to start competing!
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
