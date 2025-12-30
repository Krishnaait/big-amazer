import { Link, useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [location, setLocation] = useLocation();
  const { user, isAuthenticated } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const logoutMutation = trpc.auth.logout.useMutation({
    onSuccess: () => {
      toast.success("Logged out successfully");
      setLocation("/");
      window.location.reload(); // Refresh to clear auth state
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <header className="bg-[#1A1F2E] border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3 cursor-pointer">
            <img src="/logo.png" alt="Big Amazer" className="h-10 w-10" />
            <div className="flex flex-col">
              <div className="text-xl font-bold leading-tight">
                <span className="text-[#004E89]">Big </span>
                <span className="text-[#FF6B35]">Amazer</span>
              </div>
              <span className="text-xs text-gray-400">Fantasy Sports</span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-[#FF6B35]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
              Home
            </Link>
            <Link href="/matches" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
              Matches
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
              About
            </Link>
            <Link href="/how-to-play" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
              How to Play
            </Link>
            <Link href="/faq" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            {isAuthenticated ? (
              <>
                <span className="text-gray-400 text-sm hidden sm:inline">
                  Hello, {user?.name}
                </span>
                <Button variant="outline" size="sm" className="border-[#004E89] text-[#004E89] hover:bg-[#004E89] hover:text-white" asChild>
                  <Link href="/dashboard">
                    Dashboard
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  disabled={logoutMutation.isPending}
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  {logoutMutation.isPending ? "..." : "Logout"}
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="sm" className="border-[#004E89] text-[#004E89] hover:bg-[#004E89] hover:text-white" asChild>
                  <Link href="/login">
                    Login
                  </Link>
                </Button>
                <Button size="sm" className="bg-[#FF6B35] hover:bg-[#ff5722] text-white" asChild>
                  <Link href="/register">
                    Register
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-3 pt-4">
              <Link
                href="/"
                className="text-gray-300 hover:text-[#FF6B35] transition-colors px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/matches"
                className="text-gray-300 hover:text-[#FF6B35] transition-colors px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Matches
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-[#FF6B35] transition-colors px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/how-to-play"
                className="text-gray-300 hover:text-[#FF6B35] transition-colors px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                How to Play
              </Link>
              <Link
                href="/faq"
                className="text-gray-300 hover:text-[#FF6B35] transition-colors px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-[#FF6B35] transition-colors px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
