import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Mail, Phone, Globe, Clock, MessageCircle, HelpCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1419]">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-300 text-lg mb-8">
            Have questions or need assistance? We're here to help! Reach out to our support team through any of the channels below.
          </p>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-[#1A1F2E] border-gray-700 hover:border-[#FF6B35] transition-colors">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Mail className="w-5 h-5 text-[#FF6B35] mr-2" />
                  Email Support
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-2">For general inquiries and support</p>
                <a href="mailto:support@amazer.com" className="text-[#FF6B35] hover:text-[#ff5722] font-semibold">
                  support@amazer.com
                </a>
                <p className="text-sm text-gray-400 mt-3">Response time: 24-48 hours</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A1F2E] border-gray-700 hover:border-[#FF6B35] transition-colors">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <MessageCircle className="w-5 h-5 text-[#FF6B35] mr-2" />
                  Live Chat
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-2">Quick assistance during matches</p>
                <p className="text-white font-semibold">Coming Soon</p>
                <p className="text-sm text-gray-400 mt-3">Available during live matches</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A1F2E] border-gray-700 hover:border-[#FF6B35] transition-colors">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <HelpCircle className="w-5 h-5 text-[#FF6B35] mr-2" />
                  FAQ
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-2">Find instant answers</p>
                <a href="/faq" className="text-[#FF6B35] hover:text-[#ff5722] font-semibold">
                  Visit FAQ Page
                </a>
                <p className="text-sm text-gray-400 mt-3">Most common questions answered</p>
              </CardContent>
            </Card>
          </div>

          {/* Support Hours */}
          <Card className="bg-[#1A1F2E] border border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Clock className="w-5 h-5 text-[#FF6B35] mr-2" />
                Support Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Email Support</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span>Monday - Friday</span>
                      <span className="text-white font-semibold">9:00 AM - 9:00 PM IST</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span>Saturday - Sunday</span>
                      <span className="text-white font-semibold">10:00 AM - 8:00 PM IST</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span>Public Holidays</span>
                      <span className="text-white font-semibold">10:00 AM - 6:00 PM IST</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Response Time</h3>
                  <div className="space-y-3">
                    <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                      <p className="text-sm text-gray-400 mb-1">General Inquiries</p>
                      <p className="text-white font-semibold">24-48 hours</p>
                    </div>
                    <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                      <p className="text-sm text-gray-400 mb-1">Technical Issues</p>
                      <p className="text-white font-semibold">12-24 hours</p>
                    </div>
                    <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                      <p className="text-sm text-gray-400 mb-1">Urgent Matters</p>
                      <p className="text-white font-semibold">4-8 hours</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                * Response times may vary during peak hours and major cricket tournaments. We appreciate your patience.
              </p>
            </CardContent>
          </Card>

          {/* Registered Office */}
          <Card className="bg-[#1A1F2E] border border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <MapPin className="w-5 h-5 text-[#FF6B35] mr-2" />
                Registered Office
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Company Name</h3>
                  <p className="text-white font-semibold mb-4">BIG AMAZER TEAM (OPC) PRIVATE LIMITED</p>
                  
                  <h3 className="text-lg font-semibold text-white mb-3">Address</h3>
                  <p className="leading-relaxed">
                    SECOND FLOOR, AMIYA<br />
                    BEHIND 9 TO 9 SUPER MARKET<br />
                    RAMNAGRI MORE, ASHIANA-DIGHA ROAD<br />
                    ASHIANA, Patna<br />
                    Bihar - 800025<br />
                    India
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Company Registration</h3>
                  <div className="space-y-3">
                    <div className="bg-[#0F1419] p-3 rounded-lg border border-gray-700">
                      <p className="text-sm text-gray-400 mb-1">CIN</p>
                      <p className="text-white font-mono">U72900BR2019OPC042541</p>
                    </div>
                    <div className="bg-[#0F1419] p-3 rounded-lg border border-gray-700">
                      <p className="text-sm text-gray-400 mb-1">GST Number</p>
                      <p className="text-white font-mono">10AAICB5202A1ZQ</p>
                    </div>
                    <div className="bg-[#0F1419] p-3 rounded-lg border border-gray-700">
                      <p className="text-sm text-gray-400 mb-1">PAN</p>
                      <p className="text-white font-mono">AAICB5202A</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-[#0F1419] border border-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">Note:</strong> For general inquiries, please use our email support rather than visiting the office in person. Our registered office is primarily for administrative and legal correspondence.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Online Presence */}
          <Card className="bg-[#1A1F2E] border border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Globe className="w-5 h-5 text-[#FF6B35] mr-2" />
                Online Presence
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Website</h3>
                  <a href="https://www.amazer.com" className="text-[#FF6B35] hover:text-[#ff5722] font-semibold text-lg">
                    www.amazer.com
                  </a>
                  <p className="text-sm text-gray-400 mt-2">Your gateway to free fantasy cricket</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Social Media</h3>
                  <p className="text-gray-400">Coming Soon</p>
                  <p className="text-sm text-gray-400 mt-2">Follow us for updates, tips, and cricket news</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What to Include in Your Message */}
          <Card className="bg-[#1A1F2E] border border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-white">What to Include in Your Support Request</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p className="mb-4">To help us assist you quickly and effectively, please include the following information in your message:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                  <h4 className="text-white font-semibold mb-2">For Account Issues:</h4>
                  <ul className="space-y-1 text-sm list-disc list-inside">
                    <li>Your registered email address</li>
                    <li>Account username (if applicable)</li>
                    <li>Description of the issue</li>
                    <li>Screenshots (if relevant)</li>
                  </ul>
                </div>

                <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                  <h4 className="text-white font-semibold mb-2">For Team/Contest Issues:</h4>
                  <ul className="space-y-1 text-sm list-disc list-inside">
                    <li>Match name and date</li>
                    <li>Contest name/ID</li>
                    <li>Team name/ID</li>
                    <li>Specific issue description</li>
                  </ul>
                </div>

                <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                  <h4 className="text-white font-semibold mb-2">For Technical Issues:</h4>
                  <ul className="space-y-1 text-sm list-disc list-inside">
                    <li>Browser and version</li>
                    <li>Device type (mobile/desktop)</li>
                    <li>Error messages (if any)</li>
                    <li>Steps to reproduce the issue</li>
                  </ul>
                </div>

                <div className="bg-[#0F1419] p-4 rounded-lg border border-gray-700">
                  <h4 className="text-white font-semibold mb-2">For Scoring Queries:</h4>
                  <ul className="space-y-1 text-sm list-disc list-inside">
                    <li>Player name</li>
                    <li>Match details</li>
                    <li>Expected vs actual points</li>
                    <li>Specific action in question</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Common Reasons to Contact */}
          <Card className="bg-[#1A1F2E] border border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-white">Common Reasons to Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold mb-3">Account & Login</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-[#FF6B35] mr-2">•</span>
                      <span>Password reset issues</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF6B35] mr-2">•</span>
                      <span>Email verification problems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF6B35] mr-2">•</span>
                      <span>Account access issues</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF6B35] mr-2">•</span>
                      <span>Profile update requests</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3">Team & Contests</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-[#FF6B35] mr-2">•</span>
                      <span>Team creation difficulties</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF6B35] mr-2">•</span>
                      <span>Contest joining issues</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF6B35] mr-2">•</span>
                      <span>Player selection problems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF6B35] mr-2">•</span>
                      <span>Team editing before deadline</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3">Scoring & Points</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-[#FF6B35] mr-2">•</span>
                      <span>Points calculation queries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF6B35] mr-2">•</span>
                      <span>Leaderboard discrepancies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF6B35] mr-2">•</span>
                      <span>Player performance updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF6B35] mr-2">•</span>
                      <span>Final rankings questions</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3">Technical Support</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-[#FF6B35] mr-2">•</span>
                      <span>Website loading issues</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF6B35] mr-2">•</span>
                      <span>Browser compatibility</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF6B35] mr-2">•</span>
                      <span>Mobile responsiveness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF6B35] mr-2">•</span>
                      <span>Error messages</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feedback */}
          <div className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">We Value Your Feedback</h2>
            <p className="text-white/90 mb-6 max-w-3xl mx-auto">
              Your suggestions and feedback help us improve Big Amazer for everyone. Whether it's a feature request, bug report, or general comment, we'd love to hear from you!
            </p>
            <a 
              href="mailto:support@amazer.com" 
              className="inline-block bg-white text-[#FF6B35] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Send Us Your Feedback
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
