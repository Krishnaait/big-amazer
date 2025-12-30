import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FairPlay() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1419]">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Fair Play Policy</h1>

          <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-8 text-gray-300 space-y-6">
            <section>
              <p className="leading-relaxed mb-4">
                At Big Amazer, we are committed to maintaining a fair, transparent, and enjoyable gaming environment for all users. Our Fair Play Policy outlines the standards and practices we uphold to ensure integrity in all contests and competitions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">Our Commitment to Fair Play</h2>
              <p className="leading-relaxed">
                We believe that fantasy cricket should be a game of skill where every player has an equal opportunity to succeed based on their knowledge, strategy, and decision-making abilities. We have zero tolerance for cheating, collusion, or any form of unfair advantage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">Prohibited Practices</h2>
              <p className="leading-relaxed mb-2">The following activities are strictly prohibited:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Multiple Accounts:</strong> Creating or using multiple accounts to gain unfair advantages in contests</li>
                <li><strong>Collusion:</strong> Coordinating with other users to manipulate contest outcomes</li>
                <li><strong>Bot Usage:</strong> Using automated tools, scripts, or bots to create teams or enter contests</li>
                <li><strong>Information Manipulation:</strong> Exploiting bugs, glitches, or system vulnerabilities</li>
                <li><strong>Insider Information:</strong> Using non-public information about matches or players</li>
                <li><strong>Account Sharing:</strong> Allowing others to access or use your account</li>
                <li><strong>Fraudulent Activities:</strong> Any form of fraud, deception, or misrepresentation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">Detection and Prevention</h2>
              <p className="leading-relaxed mb-2">We employ multiple measures to detect and prevent unfair play:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Advanced algorithms to detect suspicious patterns</li>
                <li>Regular audits of contest entries and results</li>
                <li>IP address and device tracking</li>
                <li>User behavior analysis</li>
                <li>Community reporting system</li>
                <li>Manual review of flagged accounts</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">Consequences of Violations</h2>
              <p className="leading-relaxed mb-2">Users found violating our Fair Play Policy may face:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Warning and account review</li>
                <li>Temporary suspension of account</li>
                <li>Permanent ban from the platform</li>
                <li>Forfeiture of winnings and prizes</li>
                <li>Refund of entry fees to affected users</li>
                <li>Legal action in cases of fraud</li>
              </ul>
              <p className="leading-relaxed mt-2">
                The severity of consequences depends on the nature and frequency of violations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">Reporting Violations</h2>
              <p className="leading-relaxed">
                If you suspect unfair play or encounter suspicious activity, please report it immediately through our Contact page or support system. All reports are investigated thoroughly and confidentially. We appreciate our community's help in maintaining a fair gaming environment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">Transparency in Operations</h2>
              <p className="leading-relaxed mb-2">We maintain transparency by:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Clearly displaying contest rules and scoring systems</li>
                <li>Providing detailed breakdowns of points calculation</li>
                <li>Publishing prize distribution before contests begin</li>
                <li>Ensuring all users have access to the same information</li>
                <li>Regularly updating our policies and communicating changes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">Data Integrity</h2>
              <p className="leading-relaxed">
                All match data, player statistics, and scoring information are sourced from reliable third-party providers. We do not manipulate or alter any data. In rare cases of data discrepancies, we follow established protocols to ensure fair resolution.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">Contest Integrity</h2>
              <p className="leading-relaxed">
                Every contest on Big Amazer operates under the same rules for all participants. Prize pools are guaranteed, and winners are determined solely based on their team's performance. We do not favor any user or manipulate contest outcomes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">Appeals Process</h2>
              <p className="leading-relaxed">
                If you believe your account was wrongly flagged or suspended, you may submit an appeal through our support system. All appeals are reviewed by our compliance team, and decisions are communicated within 7 business days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">Continuous Improvement</h2>
              <p className="leading-relaxed">
                We continuously update our detection systems and policies to address new challenges and maintain the highest standards of fair play. User feedback and industry best practices guide our improvements.
              </p>
            </section>

            <section className="border-t border-gray-700 pt-6">
              <p className="text-sm text-gray-400">
                <strong className="text-white">Company:</strong> BIG AMAZER TEAM (OPC) PRIVATE LIMITED<br />
                <strong className="text-white">CIN:</strong> U72900BR2019OPC042541<br />
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
