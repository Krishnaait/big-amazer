import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1419]">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold text-white mb-4">Terms & Condition</h1>
          <p className="text-gray-300 text-lg mb-2">
            Last Updated: December 30, 2024
          </p>
          <p className="text-gray-400 mb-8">
            Please read these Terms & Condition carefully before using Big Amazer.
          </p>

          <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-8 text-gray-300 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed mb-3">
                By accessing, browsing, or using the Big Amazer website and platform ("Service"), you acknowledge that you have read, understood, and agree to be bound by these Terms & Condition ("Terms") and our Privacy Policy. These Terms constitute a legally binding agreement between you and BIG AMAZER TEAM (OPC) PRIVATE LIMITED ("Big Amazer", "we", "us", or "our").
              </p>
              <p className="leading-relaxed">
                If you do not agree to these Terms, you must not access or use our Service. Your continued use of the Service following any changes to these Terms constitutes your acceptance of such changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">2. Eligibility and Registration</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-4">2.1 Age Requirement</h3>
              <p className="leading-relaxed mb-3">
                You must be at least 18 years of age to register and use Big Amazer. By creating an account, you represent and warrant that you meet this age requirement. We reserve the right to request proof of age at any time, and accounts that fail to meet this requirement will be terminated.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">2.2 Geographic Restrictions</h3>
              <p className="leading-relaxed mb-3">
                Big Amazer is available to residents of India. Users from states where fantasy sports are prohibited by law (such as Assam, Odisha, Sikkim, Nagaland, Telangana, Andhra Pradesh, and Tamil Nadu) are not permitted to participate. We reserve the right to restrict access based on geographic location.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">2.3 Account Registration</h3>
              <p className="leading-relaxed mb-2">
                To use Big Amazer, you must create an account by providing:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                <li>A valid email address</li>
                <li>Your full legal name</li>
                <li>A secure password</li>
                <li>Any other information requested during registration</li>
              </ul>
              <p className="leading-relaxed">
                You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete. Providing false information may result in immediate account termination.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">2.4 Account Security</h3>
              <p className="leading-relaxed mb-2">
                You are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use of your account</li>
                <li>Ensuring you log out from your account at the end of each session</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">3. Nature of Service</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-4">3.1 Free Educational Platform</h3>
              <p className="leading-relaxed mb-3">
                Big Amazer is a 100% free-to-play educational fantasy cricket platform. There are no entry fees, no monetary prizes, no in-app purchases, and no hidden costs. The Service is provided for educational and entertainment purposes to help users develop cricket knowledge, strategic thinking, and analytical skills.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">3.2 Game of Skill</h3>
              <p className="leading-relaxed mb-3">
                Fantasy cricket on Big Amazer is a game of skill where success depends on users' knowledge of cricket, judgment, attention to detail, and strategic decision-making. It is not a game of chance. Users must analyze player performance, match conditions, team compositions, and other factors to create competitive teams.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">3.3 No Gambling</h3>
              <p className="leading-relaxed">
                Big Amazer does not involve gambling, betting, or wagering of any kind. No money is exchanged, no prizes are awarded, and no financial transactions occur on the platform. All contests are free to join and rankings are for educational purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">4. How the Service Works</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-4">4.1 Team Creation</h3>
              <p className="leading-relaxed mb-2">
                Users create virtual cricket teams by selecting real players from upcoming matches. Teams must adhere to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                <li>Credit budget constraints (100 credits maximum)</li>
                <li>Position requirements (wicket-keepers, batsmen, all-rounders, bowlers)</li>
                <li>Team composition rules (minimum and maximum players per position)</li>
                <li>Selection from both competing teams</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">4.2 Contests</h3>
              <p className="leading-relaxed mb-3">
                Users join free contests with their created teams. Contest types include Skill Challenge, Head-to-Head, and Practice Contests. All contests are free to enter with no limitations on participation.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">4.3 Scoring</h3>
              <p className="leading-relaxed mb-3">
                Points are awarded based on actual player performance in live cricket matches. Scoring rules are published on our "How to Play" page and include points for runs, wickets, catches, and other cricket actions. Captain selections earn 2x points and Vice-Captain selections earn 1.5x points.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">4.4 Rankings</h3>
              <p className="leading-relaxed">
                After matches conclude, teams are ranked based on total points earned. Rankings are displayed on leaderboards for educational purposes and to showcase successful strategies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">5. Contest Rules and Regulations</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.1 Deadlines</h3>
              <p className="leading-relaxed mb-3">
                Teams must be created and finalized before the match start time. Once a match begins, no changes to teams are permitted. Contests close at match start time and no new entries are accepted after this deadline.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.2 Multiple Teams</h3>
              <p className="leading-relaxed mb-3">
                Users may create multiple teams for the same match with different player combinations. Each team can be entered into one or more contests, subject to contest-specific rules.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.3 Match Cancellations</h3>
              <p className="leading-relaxed mb-3">
                If a match is cancelled, abandoned, or does not produce an official result, all associated contests are voided. No points are awarded and contest results are not finalized.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.4 Rain-Affected Matches</h3>
              <p className="leading-relaxed mb-3">
                For matches shortened by rain or other factors that still produce an official result (e.g., via DLS method), points are calculated based on actual player performance in the overs played. We follow official match results as declared by the relevant cricket board.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.5 Scoring Disputes</h3>
              <p className="leading-relaxed">
                Our scoring system is automated and based on official match data from reliable sources. In case of discrepancies, we review the official match records and make corrections if necessary. All scoring decisions are final once contests are officially closed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">6. Prohibited Conduct</h2>
              
              <p className="leading-relaxed mb-3">
                Users must not engage in any of the following prohibited activities:
              </p>

              <div className="space-y-3 ml-4">
                <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                  <h4 className="text-white font-semibold mb-2">6.1 Multiple Accounts</h4>
                  <p className="text-sm">Creating or using multiple accounts to gain unfair advantages. Each user is permitted only one account.</p>
                </div>

                <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                  <h4 className="text-white font-semibold mb-2">6.2 Collusion</h4>
                  <p className="text-sm">Collaborating with other users to manipulate contest results or gain unfair advantages.</p>
                </div>

                <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                  <h4 className="text-white font-semibold mb-2">6.3 Automation</h4>
                  <p className="text-sm">Using bots, scripts, automated tools, or any software to create teams, join contests, or interact with the Service.</p>
                </div>

                <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                  <h4 className="text-white font-semibold mb-2">6.4 Fraudulent Activity</h4>
                  <p className="text-sm">Engaging in any fraudulent, deceptive, or manipulative practices including providing false information or attempting to exploit system vulnerabilities.</p>
                </div>

                <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                  <h4 className="text-white font-semibold mb-2">6.5 Harassment</h4>
                  <p className="text-sm">Harassing, threatening, or abusing other users or Big Amazer staff through any communication channel.</p>
                </div>

                <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                  <h4 className="text-white font-semibold mb-2">6.6 Intellectual Property Violation</h4>
                  <p className="text-sm">Copying, reproducing, distributing, or creating derivative works from Big Amazer content without explicit permission.</p>
                </div>

                <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                  <h4 className="text-white font-semibold mb-2">6.7 System Interference</h4>
                  <p className="text-sm">Attempting to interfere with, disrupt, or damage the Service, servers, or networks connected to the Service.</p>
                </div>
              </div>

              <p className="leading-relaxed mt-4">
                Violation of any prohibited conduct may result in immediate account suspension or termination without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">7. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-4">7.1 Ownership</h3>
              <p className="leading-relaxed mb-3">
                All content, features, functionality, trademarks, service marks, logos, and intellectual property on Big Amazer are owned by BIG AMAZER TEAM (OPC) PRIVATE LIMITED and are protected by Indian and international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">7.2 Limited License</h3>
              <p className="leading-relaxed mb-3">
                We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for personal, non-commercial, educational purposes. This license does not include any right to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Modify, copy, distribute, transmit, display, perform, reproduce, publish, license, or create derivative works from any content</li>
                <li>Use the Service for commercial purposes or for the benefit of any third party</li>
                <li>Frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information</li>
                <li>Use any automated system to access the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">8. User Content</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-4">8.1 Responsibility</h3>
              <p className="leading-relaxed mb-3">
                You are solely responsible for any content you submit, post, or transmit through the Service, including team names, profile information, and communications. You represent and warrant that you own or have the necessary rights to use such content.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">8.2 License to Big Amazer</h3>
              <p className="leading-relaxed">
                By submitting content to Big Amazer, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, and display such content for the purpose of operating and improving the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">9. Privacy and Data Protection</h2>
              <p className="leading-relaxed mb-3">
                Your use of the Service is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By using Big Amazer, you consent to the collection and use of your information as described in the Privacy Policy.
              </p>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data, but cannot guarantee absolute security. You are responsible for maintaining the confidentiality of your account credentials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">10. Disclaimers and Limitations of Liability</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-4">10.1 "As Is" Service</h3>
              <p className="leading-relaxed mb-3">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. We do not warrant that the Service will be uninterrupted, secure, or error-free.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">10.2 Limitation of Liability</h3>
              <p className="leading-relaxed mb-3">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, BIG AMAZER SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                <li>Your access to or use of or inability to access or use the Service</li>
                <li>Any conduct or content of any third party on the Service</li>
                <li>Any content obtained from the Service</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">10.3 Technical Issues</h3>
              <p className="leading-relaxed">
                We are not responsible for technical failures, internet connectivity issues, server downtime, or any other technical problems that may affect your ability to use the Service. We do not guarantee that the Service will be available at all times or that data will not be lost.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">11. Indemnification</h2>
              <p className="leading-relaxed">
                You agree to indemnify, defend, and hold harmless Big Amazer, its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with your access to or use of the Service, your violation of these Terms, or your violation of any rights of another party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">12. Termination</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-4">12.1 Termination by Big Amazer</h3>
              <p className="leading-relaxed mb-3">
                We reserve the right to suspend or terminate your account and access to the Service at any time, with or without cause, and with or without notice, for any reason including but not limited to violation of these Terms, fraudulent activity, or conduct that we believe is harmful to other users or to Big Amazer.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">12.2 Termination by User</h3>
              <p className="leading-relaxed mb-3">
                You may terminate your account at any time by contacting our support team. Upon termination, your right to use the Service will immediately cease.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">12.3 Effect of Termination</h3>
              <p className="leading-relaxed">
                Upon termination, all provisions of these Terms which by their nature should survive termination shall survive, including but not limited to ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">13. Modifications to Service and Terms</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-4">13.1 Service Modifications</h3>
              <p className="leading-relaxed mb-3">
                We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the Service.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">13.2 Terms Modifications</h3>
              <p className="leading-relaxed mb-3">
                We may revise these Terms from time to time. The most current version will always be posted on our website with the "Last Updated" date. Material changes will be notified to users via email or prominent notice on the Service.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">13.3 Acceptance of Changes</h3>
              <p className="leading-relaxed">
                Your continued use of the Service after any changes to these Terms constitutes your acceptance of such changes. If you do not agree to the modified Terms, you must stop using the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">14. Governing Law and Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-4">14.1 Governing Law</h3>
              <p className="leading-relaxed mb-3">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">14.2 Jurisdiction</h3>
              <p className="leading-relaxed mb-3">
                Any disputes arising out of or relating to these Terms or the Service shall be subject to the exclusive jurisdiction of the courts located in Patna, Bihar, India.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">14.3 Dispute Resolution</h3>
              <p className="leading-relaxed">
                Before filing any legal action, you agree to attempt to resolve any dispute informally by contacting us. We will attempt to resolve the dispute informally by contacting you via email. If a dispute is not resolved within 30 days of submission, either party may pursue formal legal action.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">15. Severability</h2>
              <p className="leading-relaxed">
                If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">16. Entire Agreement</h2>
              <p className="leading-relaxed">
                These Terms, together with our Privacy Policy and any other legal notices published by us on the Service, constitute the entire agreement between you and Big Amazer concerning the Service and supersede all prior agreements and understandings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">17. Contact Information</h2>
              <p className="leading-relaxed mb-3">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                <p><strong className="text-white">Email:</strong> support@amazer.com</p>
                <p className="mt-2"><strong className="text-white">Address:</strong> BIG AMAZER TEAM (OPC) PRIVATE LIMITED, SECOND FLOOR, AMIYA, BEHIND 9 TO 9 SUPER MARKET, RAMNAGRI MORE, ASHIANA-DIGHA ROAD, ASHIANA, Patna, Bihar, 800025, India</p>
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
