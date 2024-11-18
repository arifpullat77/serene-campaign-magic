import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogOut, Menu, Mail } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();
  const contactEmail = "arifpullat@serenes.life";

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleWaitlistClick = () => {
    window.open("https://cutt.ly/beJsnsBc", "_blank", "noopener,noreferrer");
  };

  const NavItems = () => (
    <>
      {isLoggedIn ? (
        <>
          <Button variant="ghost" onClick={() => navigate("/dashboard")}>
            dashboard
          </Button>
          <Button variant="ghost" onClick={() => navigate("/calculator")}>
            reward calculator
          </Button>
          <Button variant="ghost" onClick={handleLogout} className="text-destructive">
            logout
          </Button>
        </>
      ) : (
        <>
          <Button variant="ghost" onClick={() => navigate("/pricing")}>
            pricing
          </Button>
          <Button variant="ghost" onClick={handleWaitlistClick}>
            join waitlist
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => window.location.href = `mailto:${contactEmail}`}
            className="inline-flex items-center gap-2"
          >
            <Mail className="h-4 w-4" />
            contact
          </Button>
          <Button 
            variant="default"
            onClick={() => navigate("/login")}
            className="bg-primary-600 hover:bg-primary-700"
          >
            login
          </Button>
        </>
      )}
    </>
  );

  return (
    <nav className="border-b bg-background">
      <div className="flex justify-between h-16 items-center container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <span
            className="text-2xl font-bold text-primary-600 cursor-pointer"
            onClick={() => navigate("/")}
          >
            serenes
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <NavItems />
          {isLoggedIn && (
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
                  logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <NavItems />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};