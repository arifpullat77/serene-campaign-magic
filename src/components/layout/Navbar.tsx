import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { LogOut, Menu, Mail } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, logout } = useAuth();
  const contactEmail = "arifpullat@serenes.life";
  const isHomePage = location.pathname === "/";

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleWaitlistClick = () => {
    window.open("https://cutt.ly/beJsnsBc", "_blank", "noopener,noreferrer");
  };

  return (
    <nav className="border-b bg-background">
      <div className="flex justify-between h-16 items-center container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <span
            className="text-2xl font-bold text-primary-600 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Serenes
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <Button variant="ghost" onClick={() => navigate("/dashboard")}>
                Dashboard
              </Button>
              <Button variant="ghost" onClick={() => navigate("/calculator")}>
                Reward Calculator
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="text-destructive"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button variant="ghost" onClick={() => navigate("/pricing")}>
                Pricing
              </Button>
              <Button 
                variant="ghost" 
                onClick={handleWaitlistClick}
              >
                Join Waitlist
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => window.location.href = `mailto:${contactEmail}`}
                className="inline-flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Contact
              </Button>
              <Button 
                variant="default"
                onClick={() => navigate("/login")}
                className="bg-primary-600 hover:bg-primary-700"
              >
                Login
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};