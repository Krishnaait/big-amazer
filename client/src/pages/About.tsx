import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1419]">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">About Big Amazer</h1>

          <div className="space-y-6 text-gray-300">
            <section className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">Our Mission</h2>
              <p className="leading-relaxed">
                Big Amazer is India's premier free-to-play fantasy cricket platform, dedicated to bringing the thrill of cricket to millions of fans across the country. We believe in creating an engaging, fair, and educational experience for every cricket enthusiast who dreams of building their perfect team. Our platform is 100% free and focused on skill development and cricket knowledge.
              </p>
            </section>

            <section className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">What We Offer</h2>
              <ul className="space-y-3 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-[#F7931E] mr-2">•</span>
                  <span>Create your dream cricket team with real players from live matches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F7931E] mr-2">•</span>
                  <span>Join various free contest formats - from head-to-head battles to mega contests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F7931E] mr-2">•</span>
                  <span>Real-time score updates and live leaderboards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F7931E] mr-2">•</span>
                  <span>Skill-based learning and educational challenges for cricket enthusiasts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F7931E] mr-2">•</span>
                  <span>Fair play policies and responsible gaming practices</span>
                </li>
              </ul>
            </section>

            <section className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">Company Information</h2>
              <div className="space-y-2 leading-relaxed">
                <p><strong className="text-white">Company Name:</strong> BIG AMAZER TEAM (OPC) PRIVATE LIMITED</p>
                <p><strong className="text-white">Brand:</strong> Big Amazer</p>
                <p><strong className="text-white">Tagline:</strong> Fantasy Sports</p>
                <p><strong className="text-white">CIN:</strong> U72900BR2019OPC042541</p>
                <p><strong className="text-white">GST:</strong> 10AAICB5202A1ZQ</p>
                <p><strong className="text-white">PAN:</strong> AAICB5202A</p>
                <p className="mt-4">
                  <strong className="text-white">Registered Office:</strong><br />
                  SECOND FLOOR, AMIYA<br />
                  BEHIND 9 TO 9 SUPER MARKET<br />
                  RAMNAGRI MORE, ASHIANA-DIGHA ROAD<br />
                  ASHIANA, Patna, Bihar, 800025
                </p>
                <p className="mt-4">
                  <strong className="text-white">Website:</strong>{" "}
                  <a href="https://www.amazer.com" className="text-[#FF6B35] hover:text-[#ff5722]">
                    www.amazer.com
                  </a>
                </p>
              </div>
            </section>

            <section className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">Our Commitment</h2>
              <p className="leading-relaxed">
                We are committed to providing a safe, secure, and entertaining educational platform for all our users. Our team works tirelessly to ensure fair play and an exceptional user experience. As a completely free platform, we focus on helping users develop their cricket knowledge and strategic thinking skills through fantasy cricket.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
