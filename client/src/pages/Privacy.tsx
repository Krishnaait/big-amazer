import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1419]">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

          <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-8 text-gray-300 space-y-6">
            <section>
              <p className="leading-relaxed mb-4">
                At Big Amazer, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our fantasy cricket platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">1. Information We Collect</h2>
              <p className="leading-relaxed mb-2">We collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Personal Information:</strong> Name, email address, phone number, date of birth</li>
                <li><strong>Account Information:</strong> Username, password (encrypted), profile details</li>
                <li><strong>Financial Information:</strong> Bank account details, payment information (processed securely)</li>
                <li><strong>Usage Data:</strong> Teams created, contests joined, gameplay statistics</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">2. How We Use Your Information</h2>
              <p className="leading-relaxed mb-2">We use your information to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Provide and maintain our fantasy cricket services</li>
                <li>Process transactions and distribute winnings</li>
                <li>Verify your identity and prevent fraud</li>
                <li>Send important notifications about matches and contests</li>
                <li>Improve our platform and user experience</li>
                <li>Comply with legal obligations and regulations</li>
                <li>Provide customer support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">3. Data Security</h2>
              <p className="leading-relaxed">
                We implement industry-standard security measures to protect your personal information. This includes encryption of sensitive data, secure servers, regular security audits, and restricted access to personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">4. Information Sharing</h2>
              <p className="leading-relaxed mb-2">We may share your information with:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Payment Processors:</strong> To process transactions securely</li>
                <li><strong>Service Providers:</strong> Who help us operate our platform</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
              </ul>
              <p className="leading-relaxed mt-2">
                We do not sell your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">5. Cookies and Tracking</h2>
              <p className="leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and remember your preferences. You can control cookie settings through your browser, but disabling cookies may affect platform functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">6. Your Rights</h2>
              <p className="leading-relaxed mb-2">You have the right to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your account and data</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to data processing in certain circumstances</li>
              </ul>
              <p className="leading-relaxed mt-2">
                To exercise these rights, please contact us through our Contact page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">7. Data Retention</h2>
              <p className="leading-relaxed">
                We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Account data may be retained for a period after account closure for legal and regulatory purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">8. Children's Privacy</h2>
              <p className="leading-relaxed">
                Big Amazer is not intended for users under 18 years of age. We do not knowingly collect personal information from children. If we discover that we have collected data from a minor, we will delete it immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">9. Changes to Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify users of significant changes through email or platform notifications. Continued use of Big Amazer after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">10. Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy or how we handle your data, please contact us through our Contact page or write to us at our registered office.
              </p>
            </section>

            <section className="border-t border-gray-700 pt-6">
              <p className="text-sm text-gray-400">
                <strong className="text-white">Company:</strong> BIG AMAZER TEAM (OPC) PRIVATE LIMITED<br />
                <strong className="text-white">CIN:</strong> U72900BR2019OPC042541<br />
                <strong className="text-white">Registered Office:</strong> SECOND FLOOR, AMIYA, BEHIND 9 TO 9 SUPER MARKET, RAMNAGRI MORE, ASHIANA-DIGHA ROAD, ASHIANA, Patna, Bihar, 800025<br />
                <strong className="text-white">Email:</strong> support@amazer.com<br />
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
