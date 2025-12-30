import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1419]">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-300 text-lg mb-8">
            Find answers to common questions about Big Amazer's free educational fantasy cricket platform.
          </p>

          <div className="space-y-6">
            {/* General Questions */}
            <section className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">General Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="general-1" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    What is Big Amazer Fantasy Cricket?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    Big Amazer is India's premier free-to-play fantasy cricket platform where you create virtual teams using real cricket players from upcoming matches. Your team earns points based on actual player performance in live matches. It's a 100% educational platform designed to help you develop cricket knowledge, strategic thinking, and analytical skills - completely free with no entry fees or costs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="general-2" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    Is Big Amazer really completely free?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    Yes! Big Amazer is 100% free to use. There are no entry fees, no hidden costs, no premium features, and no in-app purchases. Every user gets access to all features and contests without any payment. Our platform is designed as an educational tool to help cricket fans learn and improve their understanding of the game.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="general-3" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    Is fantasy cricket legal in India?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    Yes, fantasy sports are recognized as games of skill and are legal in most Indian states. Big Amazer operates as a free educational platform in compliance with all applicable laws and regulations. We are a registered company (BIG AMAZER TEAM (OPC) PRIVATE LIMITED, CIN: U72900BR2019OPC042541) operating legally in India.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="general-4" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    Who can play on Big Amazer?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    Anyone aged 18 years or above who is a resident of India can create an account and play on Big Amazer. You need a valid email address to register. Since our platform is completely free and educational, there are no financial eligibility requirements or verification processes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="general-5" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    What makes Big Amazer different from other fantasy cricket platforms?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    Big Amazer is unique because it's completely free and focused on education rather than monetary rewards. We emphasize skill development, cricket knowledge, and strategic learning. There are no financial transactions, making it accessible to everyone who wants to enjoy fantasy cricket without any monetary commitment or risk.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Account & Registration */}
            <section className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">Account & Registration</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="account-1" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    How do I create an account?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    Click on the "Register" button in the top right corner of the homepage. Provide your name, email address, and create a secure password. Verify your email address through the verification link sent to your inbox. Once verified, you can immediately start creating teams and joining contests.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="account-2" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    I forgot my password. How can I reset it?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    Click on "Login" and then select "Forgot Password". Enter your registered email address, and we'll send you a password reset link. Follow the instructions in the email to create a new password. If you don't receive the email within a few minutes, check your spam folder.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="account-3" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    Can I change my email address or name?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    You can update your profile information from your account settings in the Dashboard. Click on your profile icon, go to Settings, and update your details. Email address changes may require re-verification for security purposes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="account-4" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    How do I delete my account?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    To delete your account, please contact our support team through the Contact Us page. We'll process your request within 7 business days. Please note that account deletion is permanent and all your data, teams, and contest history will be removed.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="account-5" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    Can I have multiple accounts?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    No, each user is allowed only one account on Big Amazer. Multiple accounts are against our terms of service and may result in account suspension. This policy ensures fair play for all users.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Team Creation */}
            <section className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">Team Creation</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="team-1" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    How do I create a team?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    Select an upcoming match from the Matches page. Click "Create Team" and choose 11 players within the 100-credit budget. You must select 1-4 wicket-keepers, 3-6 batsmen, 1-4 all-rounders, and 3-6 bowlers. Select at least 4 players from each team. Choose your Captain (2x points) and Vice-Captain (1.5x points), then save your team.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="team-2" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    What is the credit budget and how does it work?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    You have 100 credits to build your 11-player team. Each player has a credit value based on their recent performance, reputation, and expected impact. Star players cost more credits, while emerging players cost less. You must balance your team to stay within the budget while selecting the best possible combination.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="team-3" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    Can I edit my team after creating it?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    Yes, you can edit your team anytime before the match starts. Go to "My Teams" in your dashboard, select the team you want to edit, make your changes, and save. Once the match begins, teams are locked and cannot be modified. Always finalize your team before the match deadline.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="team-4" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    How many teams can I create for one match?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    You can create multiple teams for the same match with different player combinations. This allows you to test various strategies and increases your learning opportunities. Each team can be entered into different contests or the same contest (if the contest allows multiple entries).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="team-5" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    What happens if a player I selected doesn't play?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    If a player is not in the starting lineup, they will score 0 points regardless of their position in your team. This is why it's important to check team announcements and player availability before the match starts. We recommend finalizing your team close to the deadline after official team sheets are released.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="team-6" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    How do I choose the best captain and vice-captain?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    Choose players who are likely to contribute significantly with bat, ball, or both. Consider all-rounders, top-order batsmen, or strike bowlers. Check recent form, venue statistics, and match conditions. Your captain earns 2x points and vice-captain earns 1.5x points, so these selections are crucial for your team's success.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Contests */}
            <section className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">Contests</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="contest-1" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    What are the different contest types?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    We offer three main contest formats: <strong>Skill Challenge</strong> - Test your skills against top performers, perfect for learning from the best; <strong>Head-to-Head</strong> - Compete directly with one other player, great for beginners; <strong>Practice Contest</strong> - Join large contests with hundreds of participants to learn different strategies and approaches.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="contest-2" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    How do I join a contest?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    After creating your team, you'll see available contests for that match. Browse through different contest types, check the number of participants and contest format, then click "Join" to enter. All contests are completely free. You can join multiple contests with the same team or different teams.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="contest-3" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    Can I join multiple contests with one team?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    Yes! You can use the same team to join multiple contests. This allows you to test your team's performance across different contest formats and competition levels. You can also create different teams and enter them into various contests for the same match.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="contest-4" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    When do contests close?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    Contests close when the match starts. You cannot join new contests or edit teams after the match begins. We recommend joining contests and finalizing your team at least 15-30 minutes before the match starts to avoid last-minute technical issues.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="contest-5" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    What happens if a contest doesn't fill up?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    All contests on Big Amazer proceed regardless of the number of participants since there are no entry fees or prizes. You'll compete with however many users have joined. This ensures you can always participate and learn from every contest you enter.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Scoring & Points */}
            <section className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">Scoring & Points</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="scoring-1" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    How are points calculated?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    Points are awarded based on actual player performance: runs scored (+1 per run), wickets taken (+25 points), catches (+8 points), boundaries (+1 bonus), sixes (+2 bonus), half-centuries (+8 bonus), centuries (+16 bonus), and more. Your captain earns 2x points and vice-captain earns 1.5x points. Check our "How to Play" page for the complete scoring system.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="scoring-2" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    When are points updated?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    Points are updated in real-time as the match progresses. Our system automatically refreshes every 30 seconds to show the latest scores and rankings. You can track your team's performance and leaderboard position throughout the match on the Live Score page.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="scoring-3" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    What if there's an error in points calculation?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    Our scoring system is automated and based on official match data. If you notice any discrepancy, please contact our support team with match details and the specific issue. We review all reported errors and make corrections if necessary. Final scores are confirmed after the match is officially completed.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="scoring-4" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    Do substitute players earn points?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    Only players in the starting 11 earn points. Substitute players who come on as replacements do not earn points in fantasy cricket, even if they perform actions in the match. This is why checking the final playing 11 before the match is crucial.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Technical Issues */}
            <section className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">Technical Issues</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="tech-1" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    What if a match is cancelled or abandoned?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    If a match is cancelled before it starts or abandoned without a result, all contests for that match are voided. No points are awarded and the contest is marked as cancelled. You can create new teams for other upcoming matches.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="tech-2" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    What happens in rain-affected matches?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    If a match is shortened due to rain but produces an official result (e.g., via DLS method), points are calculated based on actual player performance in the overs played. If the match is abandoned without a result, the contest is cancelled. We follow official match results as declared by the governing cricket board.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="tech-3" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    I'm having trouble creating a team. What should I do?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    First, ensure you're logged in and the match hasn't started yet. Check that you've selected exactly 11 players within the credit budget and met all position requirements. Clear your browser cache or try a different browser if issues persist. Contact our support team if problems continue.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="tech-4" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    The website is not loading properly. What can I do?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    Try refreshing the page, clearing your browser cache, or using a different browser. Ensure you have a stable internet connection. Big Amazer works best on updated versions of Chrome, Firefox, Safari, and Edge. If issues persist, contact our support team with details about your browser and device.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Support */}
            <section className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4">Support & Contact</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="support-1" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    How can I contact customer support?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    Visit our Contact Us page to reach our support team. You can send us a message through the contact form, and we'll respond within 24-48 hours. For urgent issues, include detailed information about your problem to help us assist you faster.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="support-2" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    Where is Big Amazer's office located?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    Our registered office is located at: SECOND FLOOR, AMIYA, BEHIND 9 TO 9 SUPER MARKET, RAMNAGRI MORE, ASHIANA-DIGHA ROAD, ASHIANA, Patna, Bihar, 800025, India. For general inquiries, please use our online contact form rather than visiting in person.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="support-3" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                    How can I provide feedback or suggestions?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    We love hearing from our users! Send your feedback, suggestions, or feature requests through the Contact Us page. Your input helps us improve the platform and create a better experience for everyone. We review all feedback and consider it for future updates.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
          </div>

          {/* Still have questions CTA */}
          <div className="mt-8 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Still Have Questions?</h2>
            <p className="text-white/90 mb-6">
              Can't find the answer you're looking for? Our support team is here to help!
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-[#FF6B35] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
