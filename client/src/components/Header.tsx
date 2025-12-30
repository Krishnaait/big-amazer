import { Link, useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Header() {
  const [location, setLocation] = useLocation();
  const { user, isAuthenticated } = useAuth();
  
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
          <Link href="/">
            <a className="flex items-center space-x-2 cursor-pointer">
              <div className="text-2xl font-bold">
                <span className="text-[#FF6B35]">Big Amazer</span>
              </div>
              <span className="text-sm text-gray-400 hidden sm:inline">Fantasy Sports</span>
            </a>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/about">
              <a className="text-gray-300 hover:text-[#FF6B35] transition-colors">About</a>
            </Link>
            <Link href="/how-to-play">
              <a className="text-gray-300 hover:text-[#FF6B35] transition-colors">How to Play</a>
            </Link>
            <Link href="/faq">
              <a className="text-gray-300 hover:text-[#FF6B35] transition-colors">FAQ</a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-300 hover:text-[#FF6B35] transition-colors">Contact</a>
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            {isAuthenticated ? (
              <>
                <span className="text-gray-400 text-sm hidden sm:inline">
                  Hello, {user?.name}
                </span>
                <Link href="/dashboard">
                  <Button variant="outline" size="sm" className="border-[#004E89] text-[#004E89] hover:bg-[#004E89] hover:text-white">
                    Dashboard
                  </Button>
                </Link>
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
                <Link href="/login">
                  <Button variant="outline" size="sm" className="border-[#004E89] text-[#004E89] hover:bg-[#004E89] hover:text-white">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm" className="bg-[#FF6B35] hover:bg-[#ff5722] text-white">
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
