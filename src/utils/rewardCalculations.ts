import { supabase } from "@/integrations/supabase/client";
import type { RewardTier } from "@/integrations/supabase/types/rewards.types";
import type { CampaignStats } from "@/integrations/supabase/types/campaign.types";

export const calculateRewardForMention = async (profileId: string, followers: number) => {
  const { data: tiers, error } = await supabase
    .from('reward_tiers')
    .select('*')
    .eq('profile_id', profileId)
    .lte('min_followers', followers)
    .gte('max_followers', followers)
    .single();

  if (error) {
    console.error('Error fetching reward tier:', error);
    return null;
  }

  return tiers as RewardTier;
};

export const updateCampaignStats = async (
  profileId: string, 
  rewardAmount: number, 
  reach: number
) => {
  const adSpendingMultiplier = 0.1; // Estimated cost per reach in currency
  const adSpendingSaved = reach * adSpendingMultiplier;

  const { error } = await supabase
    .from('campaign_stats')
    .upsert({
      profile_id: profileId,
      total_rewards_given: rewardAmount,
      total_reach: reach,
      ad_spending_saved: adSpendingSaved,
      updated_at: new Date().toISOString()
    } as Partial<CampaignStats>);

  if (error) {
    console.error('Error updating campaign stats:', error);
    throw error;
  }
};
