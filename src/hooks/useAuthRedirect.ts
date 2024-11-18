import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

export const useAuthRedirect = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        toast({
          title: "Success",
          description: "You have been successfully logged in!",
        });
        navigate('/dashboard');
      } else if (event === 'SIGNED_OUT') {
        navigate('/login');
      } else if (event === 'USER_UPDATED') {
        toast({
          title: "Email Verified",
          description: "Your email has been verified. You can now log in.",
        });
        navigate('/login');
      }
    });

    // Check for email verification status from URL
    const hash = window.location.hash;
    if (hash && hash.includes('type=email_verification')) {
      toast({
        title: "Verification Success",
        description: "Your email has been verified. Please log in.",
      });
    }

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate, toast]);
};