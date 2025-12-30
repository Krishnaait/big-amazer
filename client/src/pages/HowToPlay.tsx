import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HowToPlay() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1419]">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">How to Play</h1>

          <div className="space-y-6">
            <section className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  1
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-3">Create Your Account</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Sign up on Big Amazer by providing your basic details. It's quick, easy, and free! Once registered, you can start creating your fantasy cricket teams immediately.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  2
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-3">Select a Match</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Browse through the list of upcoming cricket matches. Choose the match you want to play and click on "Create Team" to get started.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  3
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-3">Build Your Team</h2>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    Create your dream team by selecting 11 players from both teams. You have a credit budget to work with, so choose wisely!
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start">
                      <span className="text-[#F7931E] mr-2">•</span>
                      <span>Select exactly 11 players within the credit limit</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F7931E] mr-2">•</span>
                      <span>Choose players from different roles (batsmen, bowlers, all-rounders, wicket-keepers)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F7931E] mr-2">•</span>
                      <span>Each player has a credit value based on their performance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  4
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-3">Choose Captain & Vice-Captain</h2>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    Select one player as your Captain and another as your Vice-Captain. This is crucial for maximizing your points!
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start">
                      <span className="text-[#F7931E] mr-2">•</span>
                      <span>Captain earns 2x points</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F7931E] mr-2">•</span>
                      <span>Vice-Captain earns 1.5x points</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  5
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-3">Join a Contest</h2>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    Once your team is ready, join one or more contests. We offer various contest types:
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start">
                      <span className="text-[#F7931E] mr-2">•</span>
                      <span><strong className="text-white">Mega Contests:</strong> Compete with thousands of players for huge prizes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F7931E] mr-2">•</span>
                      <span><strong className="text-white">Head to Head:</strong> Challenge one opponent directly</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F7931E] mr-2">•</span>
                      <span><strong className="text-white">Winner Takes All:</strong> Small groups where the top scorer wins everything</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  6
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-3">Track Live Scores</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Watch the match and track your team's performance in real-time. See how your players are scoring points and where you rank on the leaderboard. Our live scoring system updates every 30 seconds!
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F7931E] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  7
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-3">Win Prizes!</h2>
                  <p className="text-gray-300 leading-relaxed">
                    If your team performs well and ranks high in the contest, you win prizes! Winnings are credited to your account and can be withdrawn or used to join more contests.
                  </p>
                </div>
              </div>
            </section>

            <div className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Play?</h3>
              <p className="text-white/90 mb-4">Join thousands of cricket fans and start winning today!</p>
              <a href="/register" className="inline-block bg-white text-[#FF6B35] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
