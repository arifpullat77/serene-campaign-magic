export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      campaign_stats: {
        Row: CampaignStats;
        Insert: CampaignStatsInsert;
        Update: CampaignStatsUpdate;
      };
      mentions: {
        Row: Mention;
        Insert: MentionInsert;
        Update: MentionUpdate;
      };
      message_templates: {
        Row: MessageTemplate;
        Insert: MessageTemplateInsert;
        Update: MessageTemplateUpdate;
      };
      profiles: {
        Row: Profile;
        Insert: ProfileInsert;
        Update: ProfileUpdate;
      };
      reward_tiers: {
        Row: RewardTier;
        Insert: RewardTierInsert;
        Update: RewardTierUpdate;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}

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

export interface CampaignStatsInsert {
  profile_id: string;
  total_rewards_given: number;
  total_reach: number;
  ad_spending_saved: number;
  currency: string;
  created_at?: string;
  updated_at?: string;
}

export interface CampaignStatsUpdate {
  total_rewards_given?: number;
  total_reach?: number;
  ad_spending_saved?: number;
  currency?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Mention {
  conversation_state: string | null;
  coupon_eligible: number;
  created_at: string;
  email: string | null;
  estimated_reach: number;
  followers: number;
  id: string;
  instagram_id: string;
  last_message_sent: string | null;
  profile_id: string;
  profile_url: string;
  status: string;
  upload_time: string;
}

export interface MentionInsert {
  conversation_state?: string | null;
  coupon_eligible: number;
  created_at?: string;
  email?: string | null;
  estimated_reach: number;
  followers: number;
  instagram_id: string;
  profile_id: string;
  profile_url: string;
  status: string;
  upload_time: string;
}

export interface MentionUpdate {
  conversation_state?: string | null;
  coupon_eligible?: number;
  created_at?: string;
  email?: string | null;
  estimated_reach?: number;
  followers?: number;
  instagram_id?: string;
  profile_id?: string;
  profile_url?: string;
  status?: string;
  upload_time?: string;
}

export interface MessageTemplate {
  created_at: string;
  id: string;
  message: string;
  profile_id: string;
  type: string;
  updated_at: string;
}

export interface MessageTemplateInsert {
  created_at?: string;
  id: string;
  message: string;
  profile_id: string;
  type: string;
  updated_at?: string;
}

export interface MessageTemplateUpdate {
  created_at?: string;
  message?: string;
  profile_id?: string;
  type?: string;
  updated_at?: string;
}

export interface Profile {
  campaign_active: boolean | null;
  company_url: string;
  created_at: string;
  designation: string;
  full_name: string;
  id: string;
  instagram_access_token: string | null;
  instagram_business_id: string | null;
  instagram_connected: boolean | null;
  instagram_username: string | null;
  updated_at: string;
}

export interface ProfileInsert {
  campaign_active?: boolean | null;
  company_url: string;
  designation: string;
  full_name: string;
  id: string;
  instagram_access_token?: string | null;
  instagram_business_id?: string | null;
  instagram_connected?: boolean | null;
  instagram_username?: string | null;
  updated_at?: string;
}

export interface ProfileUpdate {
  campaign_active?: boolean | null;
  company_url?: string;
  designation?: string;
  full_name?: string;
  instagram_access_token?: string | null;
  instagram_business_id?: string | null;
  instagram_connected?: boolean | null;
  instagram_username?: string | null;
  updated_at?: string;
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
  profile_id?: string;
  min_followers?: number;
  max_followers?: number;
  amount?: number;
  coupon_code?: string | null;
  currency?: string;
  created_at?: string;
  updated_at?: string;
}
