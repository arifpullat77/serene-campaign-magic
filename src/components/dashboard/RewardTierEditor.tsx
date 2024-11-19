import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCurrency } from "@/contexts/CurrencyContext";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

interface RewardTier {
  id: string;
  min_followers: number;
  max_followers: number;
  amount: number;
  coupon_code: string | null;
  currency: string;
}

export const RewardTierEditor = () => {
  const { toast } = useToast();
  const { currency, setCurrency, currencySymbol } = useCurrency();
  const queryClient = useQueryClient();

  const { data: tiers, isLoading } = useQuery({
    queryKey: ['rewardTiers'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      const { data, error } = await supabase
        .from('reward_tiers')
        .select('*')
        .eq('profile_id', user.id)
        .order('min_followers', { ascending: true });

      if (error) throw error;
      return data as RewardTier[];
    }
  });

  const updateTierMutation = useMutation({
    mutationFn: async (tier: RewardTier) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      const { error } = await supabase
        .from('reward_tiers')
        .upsert({
          ...tier,
          profile_id: user.id,
          currency: currency,
          updated_at: new Date().toISOString()
        });

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['rewardTiers'] });
      toast({
        title: "Success",
        description: "Reward tier updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  });

  const handleSave = async () => {
    if (!tiers) return;
    
    for (const tier of tiers) {
      await updateTierMutation.mutateAsync(tier);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <Link 
          to="/calculator"
          className="text-primary hover:underline text-sm"
        >
          Calculate how much you can offer for breakeven sale
        </Link>
        <Select value={currency} onValueChange={(value: 'INR' | 'USD' | 'EUR') => setCurrency(value)}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Select currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="INR">INR (₹)</SelectItem>
            <SelectItem value="USD">USD ($)</SelectItem>
            <SelectItem value="EUR">EUR (€)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Follower Range</TableHead>
            <TableHead>Reward Amount ({currency})</TableHead>
            <TableHead>Coupon Code</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tiers?.map((tier) => (
            <TableRow key={tier.id}>
              <TableCell className="flex items-center gap-2">
                <Input
                  type="number"
                  value={tier.min_followers}
                  onChange={(e) => {
                    const newTiers = tiers.map(t => 
                      t.id === tier.id ? { ...t, min_followers: parseInt(e.target.value) || 0 } : t
                    );
                    queryClient.setQueryData(['rewardTiers'], newTiers);
                  }}
                  className="w-24"
                />
                <span>-</span>
                <Input
                  type="number"
                  value={tier.max_followers}
                  onChange={(e) => {
                    const newTiers = tiers.map(t => 
                      t.id === tier.id ? { ...t, max_followers: parseInt(e.target.value) || 0 } : t
                    );
                    queryClient.setQueryData(['rewardTiers'], newTiers);
                  }}
                  className="w-24"
                />
              </TableCell>
              <TableCell>
                <Input
                  type="number"
                  value={tier.amount}
                  onChange={(e) => {
                    const newTiers = tiers.map(t => 
                      t.id === tier.id ? { ...t, amount: parseInt(e.target.value) || 0 } : t
                    );
                    queryClient.setQueryData(['rewardTiers'], newTiers);
                  }}
                  className="w-32"
                />
              </TableCell>
              <TableCell>
                <Input
                  type="text"
                  value={tier.coupon_code || ''}
                  onChange={(e) => {
                    const newTiers = tiers.map(t => 
                      t.id === tier.id ? { ...t, coupon_code: e.target.value } : t
                    );
                    queryClient.setQueryData(['rewardTiers'], newTiers);
                  }}
                  placeholder="Enter coupon code"
                  className="w-48"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-end">
        <Button 
          onClick={handleSave}
          disabled={updateTierMutation.isPending}
        >
          {updateTierMutation.isPending ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </div>
  );
};