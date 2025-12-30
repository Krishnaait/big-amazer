import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1419]">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Frequently Asked Questions</h1>

          <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-[#FF6B35]">
                  What is Big Amazer Fantasy Cricket?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Big Amazer is a fantasy cricket platform where you can create your own virtual cricket team using real players from upcoming matches. Your team earns points based on how the players perform in actual matches, and you can win prizes based on your team's ranking in contests.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-[#FF6B35]">
                  How do I create a team?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Select an upcoming match, then choose 11 players within the credit budget. You must select players from both teams and assign one as Captain (2x points) and one as Vice-Captain (1.5x points). Once your team is ready, save it and join a contest.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-[#FF6B35]">
                  What are the different contest types?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  We offer three main contest types:<br/>
                  • <strong>Mega Contests:</strong> Large contests with many participants and big prize pools<br/>
                  • <strong>Head to Head:</strong> Compete directly against one other player<br/>
                  • <strong>Winner Takes All:</strong> Small group contests where the top scorer wins the entire prize pool
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-[#FF6B35]">
                  How are points calculated?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Points are awarded based on player performance in the actual match. Runs scored, wickets taken, catches, run-outs, and other actions earn points. Your Captain earns 2x points and Vice-Captain earns 1.5x points. Detailed scoring rules are available in our How to Play section.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-[#FF6B35]">
                  Can I edit my team after creating it?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  You can edit your team until the match starts. Once the match begins, team changes are locked. Make sure to finalize your team and join contests before the match deadline.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-[#FF6B35]">
                  How do I win prizes?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Prizes are awarded based on your final rank in the contest after the match ends. The higher your team ranks, the bigger your prize. Prize distribution varies by contest type and is shown before you join.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-[#FF6B35]">
                  Is Big Amazer legal in India?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Yes, fantasy sports are considered games of skill and are legal in most Indian states. Big Amazer operates in compliance with all applicable laws and regulations. We are a registered company (CIN: U72900BR2019OPC042541) operating legally in India.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-[#FF6B35]">
                  How do I withdraw my winnings?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Winnings are credited to your Big Amazer account after contest completion. You can withdraw funds to your bank account through our secure withdrawal process. Minimum withdrawal amounts and processing times apply.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-[#FF6B35]">
                  What if a match is cancelled?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  If a match is cancelled or abandoned, all entry fees for that match's contests are refunded to your account. No points are awarded and no prizes are distributed for cancelled matches.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-[#FF6B35]">
                  How can I contact customer support?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  You can reach our customer support team through the Contact Us page. We're available to help with any questions or issues you may have. Our registered office is at SECOND FLOOR, AMIYA, BEHIND 9 TO 9 SUPER MARKET, RAMNAGRI MORE, ASHIANA-DIGHA ROAD, ASHIANA, Patna, Bihar, 800025.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
