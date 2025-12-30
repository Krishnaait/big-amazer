import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1419]">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

          <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-8 text-gray-300 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using Big Amazer fantasy cricket platform, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">2. Eligibility</h2>
              <p className="leading-relaxed mb-2">To use Big Amazer, you must:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Be at least 18 years of age</li>
                <li>Be a resident of India (excluding states where fantasy sports are prohibited)</li>
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">3. Account Responsibilities</h2>
              <p className="leading-relaxed">
                You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account. Big Amazer reserves the right to suspend or terminate accounts that violate these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">4. Game of Skill</h2>
              <p className="leading-relaxed">
                Fantasy cricket on Big Amazer is a game of skill where success depends on players' knowledge, judgment, and attention. It is not a game of chance. Users must use their skill and knowledge to create teams and compete.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">5. Contest Rules</h2>
              <p className="leading-relaxed mb-2">When participating in contests:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Teams must be created before match deadlines</li>
                <li>No changes allowed after match starts</li>
                <li>Points are calculated based on actual player performance</li>
                <li>Prize distribution is final and cannot be contested</li>
                <li>In case of match cancellation, entry fees will be refunded</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">6. Prohibited Activities</h2>
              <p className="leading-relaxed mb-2">Users must not:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Use multiple accounts to gain unfair advantage</li>
                <li>Collude with other users</li>
                <li>Use automated tools or bots</li>
                <li>Engage in fraudulent activities</li>
                <li>Attempt to manipulate the platform or contests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">7. Payments and Withdrawals</h2>
              <p className="leading-relaxed">
                All transactions are processed securely. Winnings can be withdrawn subject to verification requirements and minimum withdrawal limits. Big Amazer reserves the right to withhold payments if fraud or terms violation is suspected.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">8. Intellectual Property</h2>
              <p className="leading-relaxed">
                All content, trademarks, and intellectual property on Big Amazer are owned by BIG AMAZER TEAM (OPC) PRIVATE LIMITED. Users may not reproduce, distribute, or create derivative works without explicit permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">9. Limitation of Liability</h2>
              <p className="leading-relaxed">
                Big Amazer is not liable for any indirect, incidental, or consequential damages arising from use of the platform. We are not responsible for technical issues, data loss, or unauthorized access to user accounts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">10. Modifications to Terms</h2>
              <p className="leading-relaxed">
                Big Amazer reserves the right to modify these Terms of Service at any time. Users will be notified of significant changes. Continued use of the platform after changes constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">11. Governing Law</h2>
              <p className="leading-relaxed">
                These terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of courts in Patna, Bihar.
              </p>
            </section>

            <section className="border-t border-gray-700 pt-6">
              <p className="text-sm text-gray-400">
                <strong className="text-white">Company:</strong> BIG AMAZER TEAM (OPC) PRIVATE LIMITED<br />
                <strong className="text-white">CIN:</strong> U72900BR2019OPC042541<br />
                <strong className="text-white">Registered Office:</strong> SECOND FLOOR, AMIYA, BEHIND 9 TO 9 SUPER MARKET, RAMNAGRI MORE, ASHIANA-DIGHA ROAD, ASHIANA, Patna, Bihar, 800025<br />
                <strong className="text-white">Last Updated:</strong> December 2024
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
