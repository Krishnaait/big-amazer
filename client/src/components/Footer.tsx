import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1F2E] border-t border-gray-700 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-3">
            <h3 className="text-[#FF6B35] font-bold text-lg">Big Amazer</h3>
            <p className="text-gray-400 text-sm">
              The ultimate fantasy cricket experience. Create your team, join contests, and win big!
            </p>
            <div className="text-gray-500 text-xs space-y-1">
              <p>BIG AMAZER TEAM (OPC) PRIVATE LIMITED</p>
              <p>CIN: U72900BR2019OPC042541</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#FF6B35] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-to-play" className="text-gray-400 hover:text-[#FF6B35] transition-colors">
                  How to Play
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-[#FF6B35] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#FF6B35] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-[#FF6B35] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-[#FF6B35] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/fair-play" className="text-gray-400 hover:text-[#FF6B35] transition-colors">
                  Fair Play Policy
                </Link>
              </li>
              <li>
                <Link href="/responsible-gaming" className="text-gray-400 hover:text-[#FF6B35] transition-colors">
                  Responsible Gaming
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <div className="text-gray-400 text-sm space-y-2">
              <p>SECOND FLOOR, AMIYA</p>
              <p>BEHIND 9 TO 9 SUPER MARKET</p>
              <p>RAMNAGRI MORE, ASHIANA-DIGHA ROAD</p>
              <p>ASHIANA, Patna, Bihar, 800025</p>
              <p className="mt-3">
                <span className="text-gray-500">GST:</span> 10AAICB5202A1ZQ
              </p>
              <p>
                <span className="text-gray-500">PAN:</span> AAICB5202A
              </p>
              <p className="mt-3">
                <a href="https://www.amazer.com" className="text-[#FF6B35] hover:text-[#ff5722]">
                  www.amazer.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} BIG AMAZER TEAM (OPC) PRIVATE LIMITED. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
