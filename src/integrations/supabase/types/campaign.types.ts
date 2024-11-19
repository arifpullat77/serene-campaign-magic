export interface CampaignStats {
  id: string;
  profile_id: string;
  total_rewards_given: number;
  total_reach: number;
  ad_spending_saved: number;
  currency: string;
  created_at: string;
  updated_at: string;
}

export interface CampaignStatsInsert {
  profile_id: string;
  total_rewards_given?: number;
  total_reach?: number;
  ad_spending_saved?: number;
  currency?: string;
  created_at?: string;
  updated_at?: string;
}

export interface CampaignStatsUpdate {
  total_rewards_given?: number;
  total_reach?: number;
  ad_spending_saved?: number;
  currency?: string;
  updated_at?: string;
}