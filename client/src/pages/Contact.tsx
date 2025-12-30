import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Mail, Phone, Globe } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1419]">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-[#1A1F2E] border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <MapPin className="w-5 h-5 text-[#FF6B35] mr-2" />
                  Registered Office
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>BIG AMAZER TEAM (OPC) PRIVATE LIMITED</p>
                <p className="mt-2">
                  SECOND FLOOR, AMIYA<br />
                  BEHIND 9 TO 9 SUPER MARKET<br />
                  RAMNAGRI MORE, ASHIANA-DIGHA ROAD<br />
                  ASHIANA, Patna, Bihar, 800025
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A1F2E] border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Globe className="w-5 h-5 text-[#FF6B35] mr-2" />
                  Online
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <div>
                  <p className="text-gray-500 text-sm">Website</p>
                  <a href="https://www.amazer.com" className="text-[#FF6B35] hover:text-[#ff5722]">
                    www.amazer.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <a href="mailto:support@amazer.com" className="text-[#FF6B35] hover:text-[#ff5722]">
                    support@amazer.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-[#1A1F2E] border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-white">Company Details</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500 text-sm">CIN</p>
                  <p className="font-mono">U72900BR2019OPC042541</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">GST</p>
                  <p className="font-mono">10AAICB5202A1ZQ</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">PAN</p>
                  <p className="font-mono">AAICB5202A</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Brand Name</p>
                  <p>Big Amazer</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1A1F2E] border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Customer Support</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p className="mb-4">
                Our customer support team is here to help you with any questions or concerns. Whether you need help creating a team, joining a contest, or have questions about your account, we're here to assist.
              </p>
              <div className="bg-[#0F1419] border border-gray-700 rounded-lg p-4">
                <p className="text-white font-semibold mb-2">Support Hours</p>
                <p className="text-gray-400">Monday - Sunday: 9:00 AM - 9:00 PM IST</p>
              </div>
              <p className="mt-4 text-sm text-gray-400">
                For urgent queries during live matches, please use our in-app support chat for faster response times.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
