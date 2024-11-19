export interface RewardTier {
  id: string;
  profile_id: string;
  min_followers: number;
  max_followers: number;
  amount: number;
  coupon_code: string | null;
  currency: string;
  created_at: string;
  updated_at: string;
}

export interface RewardTierInsert {
  profile_id: string;
  min_followers: number;
  max_followers: number;
  amount: number;
  coupon_code?: string | null;
  currency: string;
  created_at?: string;
  updated_at?: string;
}

export interface RewardTierUpdate {
  min_followers?: number;
  max_followers?: number;
  amount?: number;
  coupon_code?: string | null;
  currency?: string;
  updated_at?: string;
}