import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogOut, Menu } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
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
              <Button variant="ghost" onClick={() => navigate("/campaigns")}>
                Campaigns
              </Button>
              <Button variant="ghost" onClick={() => navigate("/analytics")}>
                Analytics
              </Button>
              <Button variant="ghost" onClick={() => navigate("/settings")}>
                Settings
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
              <Button variant="ghost" onClick={() => navigate("/about")}>
                About
              </Button>
              <Button variant="ghost" onClick={() => navigate("/contact")}>
                Contact
              </Button>
              <Button onClick={() => navigate("/login")}>Login</Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};