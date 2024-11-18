import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { SignupForm } from "@/components/auth/SignupForm";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [designation, setDesignation] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useAuthRedirect();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            company_url: companyUrl,
            designation,
          },
        },
      });
      
      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
        return;
      }
      
      toast({
        title: "Check your email",
        description: "We've sent you a verification link.",
      });
      navigate("/login");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px]" />
        
        <CardHeader className="relative">
          <CardTitle className="text-2xl text-center">
            Join Serenes Today
          </CardTitle>
        </CardHeader>
        
        <CardContent className="relative">
          <form onSubmit={handleSubmit} className="space-y-4">
            <SignupForm
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              fullName={fullName}
              setFullName={setFullName}
              companyUrl={companyUrl}
              setCompanyUrl={setCompanyUrl}
              designation={designation}
              setDesignation={setDesignation}
            />
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="w-full"
              onClick={() => navigate("/login")}
            >
              Already have an account? Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;