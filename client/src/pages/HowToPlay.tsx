import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HowToPlay() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1419]">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold text-white mb-8">How to Play Big Amazer</h1>

          <div className="space-y-8 text-gray-300">
            {/* Introduction */}
            <section className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-8">
              <p className="leading-relaxed text-lg">
                Welcome to Big Amazer! Fantasy cricket is a skill-based game where you create a virtual team of real cricket players and earn points based on their actual performance in live matches. This comprehensive guide will walk you through everything you need to know to start playing and competing successfully on our free educational platform.
              </p>
            </section>

            {/* Step-by-Step Guide */}
            <section className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-8">
              <h2 className="text-3xl font-semibold text-[#FF6B35] mb-6">Step-by-Step Guide</h2>
              
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="border-l-4 border-[#FF6B35] pl-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-[#FF6B35] text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center mr-4">1</span>
                    <h3 className="text-2xl font-semibold text-white">Create Your Account</h3>
                  </div>
                  <p className="leading-relaxed text-lg ml-14">
                    Register on Big Amazer by providing your basic details - name, email, and password. Verify your email address to activate your account. Registration is completely free and takes less than a minute. You'll get instant access to all platform features without any payment required.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="border-l-4 border-[#F7931E] pl-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-[#F7931E] text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center mr-4">2</span>
                    <h3 className="text-2xl font-semibold text-white">Select a Match</h3>
                  </div>
                  <p className="leading-relaxed text-lg ml-14 mb-4">
                    Browse through upcoming cricket matches from various tournaments including international series, T20 leagues, and domestic competitions. Each match card displays:
                  </p>
                  <ul className="ml-14 space-y-2 list-disc list-inside">
                    <li>Match title and teams playing</li>
                    <li>Match date and time</li>
                    <li>Number of available contests</li>
                    <li>Contest deadlines (team creation closes before match starts)</li>
                  </ul>
                </div>

                {/* Step 3 */}
                <div className="border-l-4 border-[#004E89] pl-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-[#004E89] text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center mr-4">3</span>
                    <h3 className="text-2xl font-semibold text-white">Create Your Team</h3>
                  </div>
                  <p className="leading-relaxed text-lg ml-14 mb-4">
                    This is where your cricket knowledge comes into play! Build your dream 11-player team following these rules:
                  </p>
                  
                  <div className="ml-14 space-y-4">
                    <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                      <h4 className="text-lg font-semibold text-[#FF6B35] mb-2">Team Composition Requirements</h4>
                      <ul className="space-y-2">
                        <li><strong className="text-white">Wicket-Keepers (WK):</strong> Minimum 1, Maximum 4</li>
                        <li><strong className="text-white">Batsmen (BAT):</strong> Minimum 3, Maximum 6</li>
                        <li><strong className="text-white">All-Rounders (AR):</strong> Minimum 1, Maximum 4</li>
                        <li><strong className="text-white">Bowlers (BOWL):</strong> Minimum 3, Maximum 6</li>
                        <li><strong className="text-white">Total Players:</strong> Exactly 11</li>
                        <li><strong className="text-white">Credit Budget:</strong> 100 credits maximum</li>
                      </ul>
                    </div>

                    <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                      <h4 className="text-lg font-semibold text-[#FF6B35] mb-2">Player Selection Strategy</h4>
                      <ul className="space-y-2 list-disc list-inside">
                        <li>Each player has a credit value based on their recent performance and reputation</li>
                        <li>You must select players from both teams (minimum 4 from each team)</li>
                        <li>Balance your team between star players and value picks</li>
                        <li>Consider pitch conditions, weather, and player form</li>
                        <li>Check player availability and injury status</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="border-l-4 border-[#FF6B35] pl-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-[#FF6B35] text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center mr-4">4</span>
                    <h3 className="text-2xl font-semibold text-white">Choose Captain & Vice-Captain</h3>
                  </div>
                  <p className="leading-relaxed text-lg ml-14 mb-4">
                    This is the most crucial decision in fantasy cricket! Your captain and vice-captain selections can make or break your team's performance.
                  </p>
                  
                  <div className="ml-14 space-y-4">
                    <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                      <p className="mb-3"><strong className="text-[#FF6B35]">Captain (C):</strong> Earns <strong className="text-white">2x points</strong></p>
                      <p className="mb-3"><strong className="text-[#F7931E]">Vice-Captain (VC):</strong> Earns <strong className="text-white">1.5x points</strong></p>
                      <p className="text-sm text-gray-400 mt-3">
                        Pro Tip: Choose players who are likely to contribute significantly with both bat and ball, or top-order batsmen expected to score big. Consider all-rounders for captain role as they have multiple opportunities to score points.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="border-l-4 border-[#F7931E] pl-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-[#F7931E] text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center mr-4">5</span>
                    <h3 className="text-2xl font-semibold text-white">Join Contests</h3>
                  </div>
                  <p className="leading-relaxed text-lg ml-14 mb-4">
                    After creating your team, join one or more free educational contests. We offer various contest formats:
                  </p>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                      <h4 className="text-lg font-semibold text-white mb-2">🏆 Skill Challenge</h4>
                      <p>Test your skills against top performers. Perfect for learning from the best players and improving your strategy.</p>
                    </div>
                    
                    <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                      <h4 className="text-lg font-semibold text-white mb-2">👥 Head-to-Head</h4>
                      <p>Compete directly with one other player. Great for beginners to understand scoring and strategy in a focused environment.</p>
                    </div>
                    
                    <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                      <h4 className="text-lg font-semibold text-white mb-2">🎯 Practice Contest</h4>
                      <p>Join large contests with hundreds of participants. Learn how different strategies perform and discover new approaches to team building.</p>
                    </div>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="border-l-4 border-[#004E89] pl-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-[#004E89] text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center mr-4">6</span>
                    <h3 className="text-2xl font-semibold text-white">Track Live Scores</h3>
                  </div>
                  <p className="leading-relaxed text-lg ml-14 mb-4">
                    Once the match starts, watch your team's performance in real-time! Our live score tracking features include:
                  </p>
                  
                  <ul className="ml-14 space-y-2 list-disc list-inside">
                    <li>Real-time points updates for each player</li>
                    <li>Live leaderboard showing your current rank</li>
                    <li>Ball-by-ball commentary and match status</li>
                    <li>Auto-refresh every 30 seconds</li>
                    <li>Detailed breakdown of how points are earned</li>
                  </ul>
                </div>

                {/* Step 7 */}
                <div className="border-l-4 border-[#FF6B35] pl-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-[#FF6B35] text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center mr-4">7</span>
                    <h3 className="text-2xl font-semibold text-white">Learn & Improve</h3>
                  </div>
                  <p className="leading-relaxed text-lg ml-14">
                    After each match, review your team's performance. Analyze what worked and what didn't. Check the leaderboard to see winning team combinations. Learn from successful strategies and apply these insights to your next team. The more you play, the better you understand player performance patterns, pitch conditions, and strategic decision-making.
                  </p>
                </div>
              </div>
            </section>

            {/* Scoring System */}
            <section className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-8">
              <h2 className="text-3xl font-semibold text-[#FF6B35] mb-6">Detailed Scoring System</h2>
              
              <p className="leading-relaxed text-lg mb-6">
                Understanding how points are calculated is crucial for building winning teams. Points are awarded based on actual player performance in the match.
              </p>

              <div className="space-y-6">
                {/* Batting Points */}
                <div className="bg-[#0F1419] p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-semibold text-[#F7931E] mb-4">Batting Points</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span>Run scored</span>
                      <span className="text-white font-semibold">+1 point per run</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span>Boundary (4 runs)</span>
                      <span className="text-white font-semibold">+1 bonus point</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span>Six (6 runs)</span>
                      <span className="text-white font-semibold">+2 bonus points</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span>Half-century (50 runs)</span>
                      <span className="text-white font-semibold">+8 bonus points</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span>Century (100 runs)</span>
                      <span className="text-white font-semibold">+16 bonus points</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span>Duck (out for 0)</span>
                      <span className="text-red-400 font-semibold">-2 points</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">
                    Strike Rate Bonus: Additional points for maintaining high strike rate (runs per 100 balls) in different match formats.
                  </p>
                </div>

                {/* Bowling Points */}
                <div className="bg-[#0F1419] p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-semibold text-[#F7931E] mb-4">Bowling Points</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span>Wicket taken</span>
                      <span className="text-white font-semibold">+25 points</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span>3 wickets bonus</span>
                      <span className="text-white font-semibold">+4 bonus points</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span>4 wickets bonus</span>
                      <span className="text-white font-semibold">+8 bonus points</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span>5 wickets bonus</span>
                      <span className="text-white font-semibold">+16 bonus points</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span>Maiden over</span>
                      <span className="text-white font-semibold">+8 points</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span>LBW / Bowled</span>
                      <span className="text-white font-semibold">+8 bonus points</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">
                    Economy Rate Bonus: Additional points for maintaining good economy rate (runs conceded per over) in different match formats.
                  </p>
                </div>

                {/* Fielding Points */}
                <div className="bg-[#0F1419] p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-semibold text-[#F7931E] mb-4">Fielding Points</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span>Catch taken</span>
                      <span className="text-white font-semibold">+8 points</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span>3 catches bonus</span>
                      <span className="text-white font-semibold">+4 bonus points</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span>Stumping</span>
                      <span className="text-white font-semibold">+12 points</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span>Run out (direct hit)</span>
                      <span className="text-white font-semibold">+12 points</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span>Run out (indirect)</span>
                      <span className="text-white font-semibold">+6 points</span>
                    </div>
                  </div>
                </div>

                {/* Other Points */}
                <div className="bg-[#0F1419] p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-semibold text-[#F7931E] mb-4">Other Points</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span>Playing 11 (in starting lineup)</span>
                      <span className="text-white font-semibold">+4 points</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                      Note: Players who are not in the starting lineup will score 0 points regardless of their selection in your team. Always check team announcements before the match starts.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Pro Tips */}
            <section className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-8">
              <h2 className="text-3xl font-semibold text-[#FF6B35] mb-6">Pro Tips for Success</h2>
              
              <div className="space-y-4">
                <div className="bg-[#0F1419] p-5 rounded-lg border-l-4 border-[#FF6B35]">
                  <h3 className="text-lg font-semibold text-white mb-2">🎯 Research Before Selection</h3>
                  <p className="leading-relaxed">
                    Study recent player form, head-to-head records, venue statistics, and pitch conditions. Players performing well in recent matches are more likely to continue their form.
                  </p>
                </div>

                <div className="bg-[#0F1419] p-5 rounded-lg border-l-4 border-[#F7931E]">
                  <h3 className="text-lg font-semibold text-white mb-2">⚖️ Balance Your Team</h3>
                  <p className="leading-relaxed">
                    Don't spend all credits on star players. Include 2-3 value picks (lower-credit players) who have potential to perform. This allows you to afford premium players in key positions.
                  </p>
                </div>

                <div className="bg-[#0F1419] p-5 rounded-lg border-l-4 border-[#004E89]">
                  <h3 className="text-lg font-semibold text-white mb-2">🏏 Consider Match Format</h3>
                  <p className="leading-relaxed">
                    T20 matches favor aggressive batsmen and wicket-taking bowlers. Test matches reward consistent performers and economical bowlers. Adjust your strategy accordingly.
                  </p>
                </div>

                <div className="bg-[#0F1419] p-5 rounded-lg border-l-4 border-[#FF6B35]">
                  <h3 className="text-lg font-semibold text-white mb-2">🌤️ Check Weather & Pitch</h3>
                  <p className="leading-relaxed">
                    Overcast conditions favor fast bowlers. Dry pitches help spinners. Flat batting tracks favor batsmen. Use this information to select your team composition.
                  </p>
                </div>

                <div className="bg-[#0F1419] p-5 rounded-lg border-l-4 border-[#F7931E]">
                  <h3 className="text-lg font-semibold text-white mb-2">👨‍✈️ Captain Selection is Key</h3>
                  <p className="leading-relaxed">
                    Your captain earns double points, so choose wisely! Select players with multiple scoring opportunities - all-rounders, opening batsmen, or strike bowlers are often good choices.
                  </p>
                </div>

                <div className="bg-[#0F1419] p-5 rounded-lg border-l-4 border-[#004E89]">
                  <h3 className="text-lg font-semibold text-white mb-2">📊 Analyze Past Contests</h3>
                  <p className="leading-relaxed">
                    After each match, review winning teams and their strategies. Learn from successful combinations and understand why certain players performed well.
                  </p>
                </div>

                <div className="bg-[#0F1419] p-5 rounded-lg border-l-4 border-[#FF6B35]">
                  <h3 className="text-lg font-semibold text-white mb-2">🔄 Create Multiple Teams</h3>
                  <p className="leading-relaxed">
                    You can create multiple teams for the same match with different combinations. This helps you test various strategies and increases your learning opportunities.
                  </p>
                </div>

                <div className="bg-[#0F1419] p-5 rounded-lg border-l-4 border-[#F7931E]">
                  <h3 className="text-lg font-semibold text-white mb-2">⏰ Don't Wait Until Deadline</h3>
                  <p className="leading-relaxed">
                    Create your team early to avoid last-minute rushes. However, check for team news and player availability close to the deadline for any late changes.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Fantasy Cricket Journey?</h2>
              <p className="text-white/90 text-lg mb-6 max-w-3xl mx-auto">
                Now that you understand how to play, it's time to put your cricket knowledge to the test. Create your first team and join the excitement - completely FREE!
              </p>
              <a 
                href="/register" 
                className="inline-block bg-white text-[#FF6B35] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Start Learning Today
              </a>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
