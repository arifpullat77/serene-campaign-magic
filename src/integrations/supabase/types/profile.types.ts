export interface Profile {
  id: string;
  full_name: string;
  company_url: string;
  designation: string;
  instagram_connected: boolean | null;
  campaign_active: boolean | null;
  created_at: string;
  updated_at: string;
  instagram_access_token: string | null;
  instagram_business_id: string | null;
  instagram_username: string | null;
}

export interface ProfileInsert {
  id: string;
  full_name: string;
  company_url: string;
  designation: string;
  instagram_connected?: boolean | null;
  campaign_active?: boolean | null;
  instagram_access_token?: string | null;
  instagram_business_id?: string | null;
  instagram_username?: string | null;
}

export interface ProfileUpdate {
  full_name?: string;
  company_url?: string;
  designation?: string;
  instagram_connected?: boolean | null;
  campaign_active?: boolean | null;
  instagram_access_token?: string | null;
  instagram_business_id?: string | null;
  instagram_username?: string | null;
  updated_at?: string;
}