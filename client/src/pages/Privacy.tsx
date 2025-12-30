import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1419]">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-300 text-lg mb-2">
            Last Updated: December 30, 2024
          </p>
          <p className="text-gray-400 mb-8">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>

          <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-8 text-gray-300 space-y-8">
            <section>
              <p className="leading-relaxed text-lg">
                At Big Amazer, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how BIG AMAZER TEAM (OPC) PRIVATE LIMITED ("Big Amazer", "we", "us", or "our") collects, uses, discloses, and safeguards your information when you use our fantasy cricket platform and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-4">1.1 Personal Information</h3>
              <p className="leading-relaxed mb-3">
                When you register for an account on Big Amazer, we collect:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong className="text-white">Name:</strong> Your full legal name for account identification</li>
                <li><strong className="text-white">Email Address:</strong> For account verification, communications, and password recovery</li>
                <li><strong className="text-white">Password:</strong> Encrypted and stored securely for account access</li>
                <li><strong className="text-white">Date of Birth:</strong> To verify you meet the minimum age requirement (18 years)</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">1.2 Usage Information</h3>
              <p className="leading-relaxed mb-3">
                We automatically collect information about how you use Big Amazer:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Teams created and player selections</li>
                <li>Contests joined and participation history</li>
                <li>Points earned and rankings achieved</li>
                <li>Time spent on the platform and features used</li>
                <li>Pages visited and navigation patterns</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">1.3 Technical Information</h3>
              <p className="leading-relaxed mb-3">
                We collect technical data to improve our services and ensure security:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>IP address and geographic location</li>
                <li>Browser type and version</li>
                <li>Device type, operating system, and screen resolution</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Referral source and exit pages</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">1.4 Communications</h3>
              <p className="leading-relaxed">
                If you contact our customer support or send us feedback, we collect the content of your messages, your email address, and any other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">2. How We Use Your Information</h2>
              
              <p className="leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>

              <div className="space-y-3">
                <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                  <h4 className="text-white font-semibold mb-2">2.1 Service Provision</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                    <li>Create and manage your account</li>
                    <li>Enable team creation and contest participation</li>
                    <li>Calculate points and display leaderboards</li>
                    <li>Provide live score updates and match information</li>
                  </ul>
                </div>

                <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                  <h4 className="text-white font-semibold mb-2">2.2 Communication</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                    <li>Send account verification and password reset emails</li>
                    <li>Notify you about upcoming matches and contests</li>
                    <li>Provide customer support and respond to inquiries</li>
                    <li>Send important platform updates and policy changes</li>
                  </ul>
                </div>

                <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                  <h4 className="text-white font-semibold mb-2">2.3 Platform Improvement</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                    <li>Analyze usage patterns to improve user experience</li>
                    <li>Develop new features and functionality</li>
                    <li>Conduct research and analytics</li>
                    <li>Test and optimize platform performance</li>
                  </ul>
                </div>

                <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                  <h4 className="text-white font-semibold mb-2">2.4 Security and Fraud Prevention</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                    <li>Verify user identity and prevent multiple accounts</li>
                    <li>Detect and prevent fraudulent activities</li>
                    <li>Monitor for security threats and vulnerabilities</li>
                    <li>Enforce our Terms & Condition and Fair Play Policy</li>
                  </ul>
                </div>

                <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                  <h4 className="text-white font-semibold mb-2">2.5 Legal Compliance</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                    <li>Comply with applicable laws and regulations</li>
                    <li>Respond to legal requests and court orders</li>
                    <li>Protect our rights and property</li>
                    <li>Maintain records for legal and regulatory purposes</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">3. Information Sharing and Disclosure</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-4">3.1 We Do Not Sell Your Information</h3>
              <p className="leading-relaxed mb-4">
                Big Amazer does not sell, rent, or trade your personal information to third parties for their marketing purposes.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">3.2 Service Providers</h3>
              <p className="leading-relaxed mb-3">
                We may share your information with trusted third-party service providers who assist us in operating our platform:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                <li>Cloud hosting and storage providers</li>
                <li>Email service providers for communications</li>
                <li>Analytics providers for usage insights</li>
                <li>Customer support tools and platforms</li>
              </ul>
              <p className="text-sm text-gray-400 mb-4">
                These service providers are contractually obligated to protect your information and use it only for the purposes we specify.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">3.3 Legal Requirements</h3>
              <p className="leading-relaxed mb-3">
                We may disclose your information if required to do so by law or in response to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                <li>Valid legal processes (subpoenas, court orders, warrants)</li>
                <li>Requests from law enforcement or government authorities</li>
                <li>Protection of our rights, property, or safety</li>
                <li>Protection of users' rights, property, or safety</li>
                <li>Investigation of fraud or security issues</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">3.4 Business Transfers</h3>
              <p className="leading-relaxed">
                In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred to the acquiring entity. We will notify you via email and/or prominent notice on our platform before your information is transferred and becomes subject to a different privacy policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">4. Data Security</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-4">4.1 Security Measures</h3>
              <p className="leading-relaxed mb-3">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong className="text-white">Encryption:</strong> All data transmitted between your device and our servers is encrypted using SSL/TLS protocols</li>
                <li><strong className="text-white">Password Protection:</strong> Passwords are hashed and encrypted using strong cryptographic algorithms</li>
                <li><strong className="text-white">Access Controls:</strong> Strict access controls limit who can view or use your personal information</li>
                <li><strong className="text-white">Regular Audits:</strong> We conduct regular security audits and vulnerability assessments</li>
                <li><strong className="text-white">Secure Infrastructure:</strong> Our servers are hosted in secure data centers with physical and digital protections</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">4.2 Your Responsibility</h3>
              <p className="leading-relaxed mb-3">
                While we take extensive measures to protect your information, security also depends on you:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                <li>Choose a strong, unique password for your account</li>
                <li>Never share your password with anyone</li>
                <li>Log out after each session, especially on shared devices</li>
                <li>Keep your email account secure (used for password resets)</li>
                <li>Report any suspicious activity immediately</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">4.3 Limitations</h3>
              <p className="leading-relaxed">
                No method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">5. Cookies and Tracking Technologies</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.1 What Are Cookies</h3>
              <p className="leading-relaxed mb-4">
                Cookies are small text files stored on your device that help us provide and improve our services. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period).
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.2 How We Use Cookies</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong className="text-white">Essential Cookies:</strong> Required for basic platform functionality, such as keeping you logged in</li>
                <li><strong className="text-white">Performance Cookies:</strong> Help us understand how users interact with our platform</li>
                <li><strong className="text-white">Functionality Cookies:</strong> Remember your preferences and settings</li>
                <li><strong className="text-white">Analytics Cookies:</strong> Collect information about platform usage to improve our services</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.3 Managing Cookies</h3>
              <p className="leading-relaxed">
                Most web browsers allow you to control cookies through their settings. You can choose to block or delete cookies, but this may affect your ability to use certain features of Big Amazer. Essential cookies cannot be disabled as they are necessary for the platform to function.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">6. Data Retention</h2>
              
              <p className="leading-relaxed mb-3">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">6.1 Active Accounts</h3>
              <p className="leading-relaxed mb-4">
                For active accounts, we retain your information as long as your account remains active and for a reasonable period thereafter to comply with legal obligations and resolve disputes.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">6.2 Deleted Accounts</h3>
              <p className="leading-relaxed mb-4">
                When you request account deletion, we will delete or anonymize your personal information within 30 days, except where we are required to retain certain information for legal, regulatory, or security purposes.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">6.3 Backup Data</h3>
              <p className="leading-relaxed">
                Deleted information may persist in backup copies for a limited period but will not be accessible or used for any purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">7. Your Privacy Rights</h2>
              
              <p className="leading-relaxed mb-4">
                You have certain rights regarding your personal information:
              </p>

              <div className="space-y-3">
                <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                  <h4 className="text-white font-semibold mb-2">7.1 Access</h4>
                  <p className="text-sm">You have the right to request access to the personal information we hold about you.</p>
                </div>

                <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                  <h4 className="text-white font-semibold mb-2">7.2 Correction</h4>
                  <p className="text-sm">You have the right to request correction of inaccurate or incomplete personal information.</p>
                </div>

                <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                  <h4 className="text-white font-semibold mb-2">7.3 Deletion</h4>
                  <p className="text-sm">You have the right to request deletion of your personal information, subject to certain legal exceptions.</p>
                </div>

                <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                  <h4 className="text-white font-semibold mb-2">7.4 Data Portability</h4>
                  <p className="text-sm">You have the right to request a copy of your personal information in a structured, commonly used format.</p>
                </div>

                <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                  <h4 className="text-white font-semibold mb-2">7.5 Objection</h4>
                  <p className="text-sm">You have the right to object to certain types of processing of your personal information.</p>
                </div>

                <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                  <h4 className="text-white font-semibold mb-2">7.6 Withdrawal of Consent</h4>
                  <p className="text-sm">Where processing is based on your consent, you have the right to withdraw that consent at any time.</p>
                </div>
              </div>

              <p className="leading-relaxed mt-4">
                To exercise any of these rights, please contact us at support@amazer.com. We will respond to your request within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">8. Children's Privacy</h2>
              
              <p className="leading-relaxed mb-3">
                Big Amazer is not intended for users under the age of 18. We do not knowingly collect personal information from children under 18. If you are under 18, please do not use our platform or provide any personal information.
              </p>
              <p className="leading-relaxed">
                If we learn that we have collected personal information from a child under 18, we will delete that information as quickly as possible. If you believe we have collected information from a child under 18, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">9. Third-Party Links</h2>
              
              <p className="leading-relaxed mb-3">
                Our platform may contain links to third-party websites, services, or applications that are not operated by us. This Privacy Policy does not apply to those third-party sites.
              </p>
              <p className="leading-relaxed">
                We are not responsible for the privacy practices of third-party websites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">10. International Data Transfers</h2>
              
              <p className="leading-relaxed mb-3">
                Your information is primarily stored and processed in India. If we transfer your information to other countries, we will ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">11. Changes to This Privacy Policy</h2>
              
              <p className="leading-relaxed mb-3">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes, we will:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                <li>Update the "Last Updated" date at the top of this policy</li>
                <li>Notify you via email for material changes</li>
                <li>Display a prominent notice on our platform</li>
              </ul>
              <p className="leading-relaxed">
                Your continued use of Big Amazer after any changes to this Privacy Policy constitutes your acceptance of the updated policy. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">12. Contact Us</h2>
              
              <p className="leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>

              <div className="bg-[#0F1419] p-6 rounded-lg border border-gray-700">
                <h4 className="text-white font-semibold mb-3">Privacy Contact Information</h4>
                <div className="space-y-2 text-sm">
                  <p><strong className="text-white">Email:</strong> support@amazer.com</p>
                  <p><strong className="text-white">Subject Line:</strong> Privacy Inquiry</p>
                  <p className="mt-4"><strong className="text-white">Postal Address:</strong></p>
                  <p className="ml-4">
                    BIG AMAZER TEAM (OPC) PRIVATE LIMITED<br />
                    SECOND FLOOR, AMIYA<br />
                    BEHIND 9 TO 9 SUPER MARKET<br />
                    RAMNAGRI MORE, ASHIANA-DIGHA ROAD<br />
                    ASHIANA, Patna, Bihar, 800025<br />
                    India
                  </p>
                </div>
              </div>
            </section>

            <section className="border-t border-gray-700 pt-6 mt-8">
              <div className="bg-[#0F1419] p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Company Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-400">Company Name</p>
                    <p className="text-white">BIG AMAZER TEAM (OPC) PRIVATE LIMITED</p>
                  </div>
                  <div>
                    <p className="text-gray-400">CIN</p>
                    <p className="text-white font-mono">U72900BR2019OPC042541</p>
                  </div>
                  <div>
                    <p className="text-gray-400">GST</p>
                    <p className="text-white font-mono">10AAICB5202A1ZQ</p>
                  </div>
                  <div>
                    <p className="text-gray-400">PAN</p>
                    <p className="text-white font-mono">AAICB5202A</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Brand Name</p>
                    <p className="text-white">Big Amazer</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Last Updated</p>
                    <p className="text-white">December 30, 2024</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
