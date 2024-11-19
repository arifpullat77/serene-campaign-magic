export interface MessageTemplate {
  id: string;
  profile_id: string;
  type: string;
  message: string;
  created_at: string;
  updated_at: string;
}

export interface MessageTemplateInsert {
  id: string;
  profile_id: string;
  type: string;
  message: string;
}

export interface MessageTemplateUpdate {
  message?: string;
  type?: string;
  updated_at?: string;
}