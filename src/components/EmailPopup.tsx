import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const EmailPopup = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem("hasSeenEmailPopup");
      if (!hasSeenPopup) {
        setOpen(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('leads')
        .insert({ email });

      if (error) throw error;

      localStorage.setItem("hasSeenEmailPopup", "true");
      setOpen(false);
      toast({
        title: "Thank you for joining!",
        description: "We'll keep you updated with the latest news.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px] mx-4 md:mx-auto bg-gradient-to-br from-primary-100 via-secondary-100 to-primary-200 text-black p-0 gap-0 animate-fade-up rounded-2xl">
        <div className="relative p-6">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center">
              <h2 className="text-lg font-semibold">Improve ROAS Now</h2>
              <Input
                type="email"
                placeholder="Enter your email"
                className="mt-4 border-gray-200 rounded-xl text-white placeholder:text-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white rounded-xl"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Joining..." : "Join"}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};