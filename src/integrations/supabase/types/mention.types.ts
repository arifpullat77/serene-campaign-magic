export interface Mention {
  id: string;
  profile_id: string;
  instagram_id: string;
  profile_url: string;
  followers: number;
  estimated_reach: number;
  upload_time: string;
  coupon_eligible: number;
  email: string | null;
  status: string;
  created_at: string;
  conversation_state: string | null;
  last_message_sent: string | null;
}

export interface MentionInsert {
  profile_id: string;
  instagram_id: string;
  profile_url: string;
  followers: number;
  estimated_reach: number;
  upload_time: string;
  coupon_eligible: number;
  email?: string | null;
  status: string;
  conversation_state?: string | null;
}

export interface MentionUpdate {
  email?: string | null;
  status?: string;
  conversation_state?: string | null;
  last_message_sent?: string | null;
}