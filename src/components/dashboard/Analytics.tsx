import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideBarChart, Users, DollarSign } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { useCurrency } from "@/contexts/CurrencyContext";
import type { CampaignStats } from "@/integrations/supabase/types";

export const Analytics = () => {
  const { currency } = useCurrency();

  const { data: stats, isLoading } = useQuery<CampaignStats>({
    queryKey: ['campaignStats'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      const { data, error } = await supabase
        .from('campaign_stats')
        .select('*')
        .eq('profile_id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') throw error;
      
      return data || {
        id: '',
        profile_id: user.id,
        total_rewards_given: 0,
        total_reach: 0,
        ad_spending_saved: 0,
        currency: currency,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
    }
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Rewards Given</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {stats?.total_rewards_given.toLocaleString('en-IN', {
              style: 'currency',
              currency: currency
            })}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Estimated Reach</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {stats?.total_reach.toLocaleString()}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Ad Spending Saved</CardTitle>
          <LucideBarChart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {stats?.ad_spending_saved.toLocaleString('en-IN', {
              style: 'currency',
              currency: currency
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};