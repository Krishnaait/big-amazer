import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ResponsibleGaming() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1419]">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Responsible Gaming</h1>

          <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-8 text-gray-300 space-y-6">
            <section>
              <p className="leading-relaxed mb-4">
                At Big Amazer, we are committed to promoting responsible gaming practices. While fantasy cricket is an entertaining and skill-based activity, we believe it's important to play responsibly and within your means.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">Play Responsibly</h2>
              <p className="leading-relaxed mb-2">Responsible gaming means:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Playing for entertainment, not as a source of income</li>
                <li>Setting budgets and sticking to them</li>
                <li>Not chasing losses</li>
                <li>Taking regular breaks</li>
                <li>Maintaining balance with other activities</li>
                <li>Being aware of the time and money spent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">Set Your Limits</h2>
              <p className="leading-relaxed mb-3">
                We encourage all users to set personal limits before playing:
              </p>
              <div className="bg-[#0F1419] border border-gray-700 rounded-lg p-4 space-y-2">
                <p><strong className="text-white">Daily Limit:</strong> Decide how much you can afford to spend per day</p>
                <p><strong className="text-white">Weekly Budget:</strong> Set a weekly budget for fantasy cricket</p>
                <p><strong className="text-white">Time Limit:</strong> Allocate specific time for playing</p>
                <p><strong className="text-white">Loss Limit:</strong> Decide when to stop if you're losing</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">Warning Signs</h2>
              <p className="leading-relaxed mb-2">Be aware of these warning signs of problem gaming:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Spending more money than you can afford</li>
                <li>Neglecting work, family, or personal responsibilities</li>
                <li>Borrowing money to play fantasy cricket</li>
                <li>Feeling anxious or irritable when not playing</li>
                <li>Lying about the time or money spent on gaming</li>
                <li>Trying unsuccessfully to cut back or stop</li>
                <li>Using fantasy cricket to escape problems or negative feelings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">Self-Exclusion</h2>
              <p className="leading-relaxed">
                If you feel you need a break from fantasy cricket, you can request temporary or permanent self-exclusion from Big Amazer. Contact our support team, and we will immediately restrict your account access for the period you specify. During self-exclusion, you will not be able to create teams or join contests.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">Age Verification</h2>
              <p className="leading-relaxed">
                Big Amazer is strictly for users 18 years and older. We implement age verification measures to prevent underage gaming. If you suspect a minor is using the platform, please report it immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">Support Resources</h2>
              <p className="leading-relaxed mb-3">
                If you or someone you know needs help with gaming-related issues, these resources can provide support:
              </p>
              <div className="bg-[#0F1419] border border-gray-700 rounded-lg p-4 space-y-3">
                <div>
                  <p className="text-white font-semibold">National Helplines</p>
                  <p className="text-sm">Contact local mental health and addiction support services</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Professional Counseling</p>
                  <p className="text-sm">Seek help from licensed therapists specializing in gaming addiction</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Support Groups</p>
                  <p className="text-sm">Join support groups for people dealing with gaming issues</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">Tips for Healthy Gaming</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Set Time Limits:</strong> Use timers or alarms to remind yourself to take breaks</li>
                <li><strong>Use Only Disposable Income:</strong> Never use money meant for essentials</li>
                <li><strong>Keep It Fun:</strong> If it stops being enjoyable, take a break</li>
                <li><strong>Stay Informed:</strong> Understand the odds and how the game works</li>
                <li><strong>Avoid Emotional Decisions:</strong> Don't play when upset or stressed</li>
                <li><strong>Balance Your Life:</strong> Maintain other hobbies and social activities</li>
                <li><strong>Talk About It:</strong> Discuss your gaming with friends or family</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">Our Commitment</h2>
              <p className="leading-relaxed">
                Big Amazer is committed to providing tools and resources to help users play responsibly. We continuously monitor for signs of problem gaming and may reach out to users showing concerning patterns. We also provide educational materials about responsible gaming and maintain partnerships with organizations that support healthy gaming habits.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-3">Need Help?</h2>
              <p className="leading-relaxed">
                If you have concerns about your gaming habits or need assistance with account restrictions, please contact our support team. We're here to help you enjoy fantasy cricket responsibly.
              </p>
            </section>

            <section className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Remember</h3>
              <p className="text-white/90 text-lg">
                Fantasy cricket should be fun, not a problem. Play smart, play safe, play responsibly.
              </p>
            </section>

            <section className="border-t border-gray-700 pt-6">
              <p className="text-sm text-gray-400">
                <strong className="text-white">Company:</strong> BIG AMAZER TEAM (OPC) PRIVATE LIMITED<br />
                <strong className="text-white">CIN:</strong> U72900BR2019OPC042541<br />
                <strong className="text-white">For Support:</strong> Contact us through our Contact page<br />
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
