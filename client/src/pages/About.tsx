import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1419]">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold text-white mb-8">About Big Amazer</h1>

          <div className="space-y-8 text-gray-300">
            {/* Mission Statement */}
            <section className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-8">
              <h2 className="text-3xl font-semibold text-[#FF6B35] mb-6">Our Mission</h2>
              <p className="leading-relaxed text-lg mb-4">
                Big Amazer is India's premier free-to-play fantasy cricket platform, dedicated to bringing the thrill of cricket to millions of fans across the country. We believe in creating an engaging, fair, and educational experience for every cricket enthusiast who dreams of building their perfect team. Our platform is 100% free and focused on skill development and cricket knowledge.
              </p>
              <p className="leading-relaxed text-lg">
                Founded with the vision of making fantasy sports accessible to everyone, we've built a platform that combines the excitement of cricket with strategic thinking and analytical skills. Whether you're a casual fan or a cricket expert, Big Amazer provides the perfect environment to test your knowledge, learn from others, and improve your understanding of the game.
              </p>
            </section>

            {/* What We Offer */}
            <section className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-8">
              <h2 className="text-3xl font-semibold text-[#FF6B35] mb-6">What We Offer</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <span className="text-[#F7931E] mr-3">●</span>
                    Real-Time Cricket Integration
                  </h3>
                  <p className="leading-relaxed ml-7">
                    Create your dream cricket team with real players from live matches. Our platform integrates with live cricket data to provide you with up-to-date match information, player statistics, and real-time scoring. Experience the thrill of watching your selected players perform in actual matches.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <span className="text-[#F7931E] mr-3">●</span>
                    Free Educational Contests
                  </h3>
                  <p className="leading-relaxed ml-7">
                    Join various free contest formats - from head-to-head battles to mega contests with thousands of participants. All contests are completely free to enter, designed to help you learn cricket strategy, player analysis, and team management skills. Compete with cricket fans nationwide without any financial commitment.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <span className="text-[#F7931E] mr-3">●</span>
                    Strategic Team Building
                  </h3>
                  <p className="leading-relaxed ml-7">
                    Build your 11-player team within a 100-credit budget, selecting the perfect combination of batsmen, bowlers, all-rounders, and wicket-keepers. Choose your captain (2x points) and vice-captain (1.5x points) strategically to maximize your team's performance. Learn the art of balancing star players with emerging talents.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <span className="text-[#F7931E] mr-3">●</span>
                    Live Score Tracking
                  </h3>
                  <p className="leading-relaxed ml-7">
                    Real-time score updates and live leaderboards keep you engaged throughout the match. Our system automatically refreshes every 30 seconds, showing you how your team is performing and where you rank against other participants. Watch your strategic decisions come to life as the match unfolds.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <span className="text-[#F7931E] mr-3">●</span>
                    Skill-Based Learning
                  </h3>
                  <p className="leading-relaxed ml-7">
                    Enhance your cricket knowledge through strategic team building and compete in educational challenges. Learn about player form, pitch conditions, match situations, and tactical decisions. Our platform helps you develop analytical skills that deepen your appreciation of cricket.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <span className="text-[#F7931E] mr-3">●</span>
                    Fair Play & Transparency
                  </h3>
                  <p className="leading-relaxed ml-7">
                    Fair play policies and responsible gaming practices ensure a level playing field for all users. We maintain strict anti-fraud measures, transparent scoring systems, and clear contest rules. Every user has an equal opportunity to succeed based on their cricket knowledge and strategic thinking.
                  </p>
                </div>
              </div>
            </section>

            {/* Our Values */}
            <section className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-8">
              <h2 className="text-3xl font-semibold text-[#FF6B35] mb-6">Our Core Values</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#0F1419] p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-semibold text-[#F7931E] mb-3">Education First</h3>
                  <p className="leading-relaxed">
                    We prioritize learning and skill development over everything else. Our platform is designed to help users understand cricket better, make informed decisions, and grow their analytical capabilities.
                  </p>
                </div>

                <div className="bg-[#0F1419] p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-semibold text-[#F7931E] mb-3">Accessibility</h3>
                  <p className="leading-relaxed">
                    Fantasy cricket should be accessible to everyone. That's why our platform is 100% free with no hidden costs, entry fees, or premium features. Everyone gets the same experience.
                  </p>
                </div>

                <div className="bg-[#0F1419] p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-semibold text-[#F7931E] mb-3">Community</h3>
                  <p className="leading-relaxed">
                    We're building a community of cricket enthusiasts who share knowledge, celebrate the sport, and learn from each other. Compete fairly, respect fellow players, and enjoy the game together.
                  </p>
                </div>

                <div className="bg-[#0F1419] p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-semibold text-[#F7931E] mb-3">Innovation</h3>
                  <p className="leading-relaxed">
                    We continuously improve our platform with new features, better user experience, and enhanced educational tools. Your feedback drives our innovation and helps us serve you better.
                  </p>
                </div>
              </div>
            </section>

            {/* Company Information */}
            <section className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-8">
              <h2 className="text-3xl font-semibold text-[#FF6B35] mb-6">Company Information</h2>
              
              <div className="space-y-4 leading-relaxed">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Company Name</p>
                    <p className="text-white font-semibold">BIG AMAZER TEAM (OPC) PRIVATE LIMITED</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Brand Name</p>
                    <p className="text-white font-semibold">Big Amazer</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Tagline</p>
                    <p className="text-white font-semibold">Fantasy Sports</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Platform Type</p>
                    <p className="text-white font-semibold">Free Educational Fantasy Cricket</p>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-6 mt-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Registration Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">CIN</p>
                      <p className="text-white font-mono">U72900BR2019OPC042541</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">GST Number</p>
                      <p className="text-white font-mono">10AAICB5202A1ZQ</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">PAN</p>
                      <p className="text-white font-mono">AAICB5202A</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-6 mt-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Registered Office</h3>
                  <p className="text-white leading-relaxed">
                    SECOND FLOOR, AMIYA<br />
                    BEHIND 9 TO 9 SUPER MARKET<br />
                    RAMNAGRI MORE, ASHIANA-DIGHA ROAD<br />
                    ASHIANA, Patna, Bihar, 800025<br />
                    India
                  </p>
                </div>

                <div className="border-t border-gray-700 pt-6 mt-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Online Presence</h3>
                  <p>
                    <span className="text-gray-400">Website:</span>{" "}
                    <a href="https://www.amazer.com" className="text-[#FF6B35] hover:text-[#ff5722] font-semibold">
                      www.amazer.com
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* Our Commitment */}
            <section className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-8">
              <h2 className="text-3xl font-semibold text-[#FF6B35] mb-6">Our Commitment to You</h2>
              
              <div className="space-y-4 leading-relaxed text-lg">
                <p>
                  We are committed to providing a safe, secure, and entertaining educational platform for all our users. Our team works tirelessly to ensure fair play and an exceptional user experience. As a completely free platform, we focus on helping users develop their cricket knowledge and strategic thinking skills through fantasy cricket.
                </p>
                
                <p>
                  <strong className="text-white">Security & Privacy:</strong> Your data is protected with industry-standard security measures. We never share your personal information with third parties without your consent.
                </p>
                
                <p>
                  <strong className="text-white">Fair Competition:</strong> Our automated systems ensure that all contests are fair and transparent. Points are calculated based on actual player performance with no manual intervention.
                </p>
                
                <p>
                  <strong className="text-white">Continuous Improvement:</strong> We regularly update our platform based on user feedback and technological advancements. Your suggestions help us build a better experience for everyone.
                </p>
                
                <p>
                  <strong className="text-white">Educational Focus:</strong> Every feature is designed with learning in mind. From player statistics to strategic tips, we provide the tools you need to become a better fantasy cricket player.
                </p>
              </div>
            </section>

            {/* Join Us */}
            <section className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Join the Big Amazer Community</h2>
              <p className="text-white/90 text-lg mb-6 max-w-3xl mx-auto">
                Become part of India's fastest-growing free fantasy cricket community. Learn, compete, and celebrate cricket with thousands of passionate fans. No costs, no commitments - just pure cricket knowledge and fun!
              </p>
              <a 
                href="/register" 
                className="inline-block bg-white text-[#FF6B35] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Get Started Free
              </a>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
