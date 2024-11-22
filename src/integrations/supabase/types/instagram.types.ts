export interface InstagramWebhookEvent {
  id: string;
  profile_id: string;
  event_type: string;
  object_type: string;
  object_id: string;
  raw_data: any;
  processed: boolean;
  created_at: string;
  processed_at: string | null;
}

export interface InstagramWebhookEventInsert {
  profile_id: string;
  event_type: string;
  object_type: string;
  object_id: string;
  raw_data: any;
  processed?: boolean;
  processed_at?: string | null;
}

export interface InstagramWebhookEventUpdate {
  event_type?: string;
  object_type?: string;
  object_id?: string;
  raw_data?: any;
  processed?: boolean;
  processed_at?: string | null;
}