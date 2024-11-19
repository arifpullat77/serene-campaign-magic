export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      campaign_stats: {
        Row: {
          ad_spending_saved: number
          created_at: string
          currency: string
          id: string
          profile_id: string
          total_reach: number
          total_rewards_given: number
          updated_at: string
        }
        Insert: {
          ad_spending_saved?: number
          created_at?: string
          currency?: string
          id?: string
          profile_id: string
          total_reach?: number
          total_rewards_given?: number
          updated_at?: string
        }
        Update: {
          ad_spending_saved?: number
          created_at?: string
          currency?: string
          id?: string
          profile_id?: string
          total_reach?: number
          total_rewards_given?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "campaign_stats_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      mentions: {
        Row: {
          conversation_state: string | null
          coupon_eligible: number
          created_at: string
          email: string | null
          estimated_reach: number
          followers: number
          id: string
          instagram_id: string
          last_message_sent: string | null
          profile_id: string
          profile_url: string
          status: string
          upload_time: string
        }
        Insert: {
          conversation_state?: string | null
          coupon_eligible: number
          created_at?: string
          email?: string | null
          estimated_reach: number
          followers: number
          id?: string
          instagram_id: string
          last_message_sent?: string | null
          profile_id: string
          profile_url: string
          status: string
          upload_time: string
        }
        Update: {
          conversation_state?: string | null
          coupon_eligible?: number
          created_at?: string
          email?: string | null
          estimated_reach?: number
          followers?: number
          id?: string
          instagram_id?: string
          last_message_sent?: string | null
          profile_id?: string
          profile_url?: string
          status?: string
          upload_time?: string
        }
        Relationships: [
          {
            foreignKeyName: "mentions_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      message_templates: {
        Row: {
          created_at: string
          id: string
          message: string
          profile_id: string
          type: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          profile_id: string
          type: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          profile_id?: string
          type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "message_templates_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          campaign_active: boolean | null
          company_url: string
          created_at: string
          designation: string
          full_name: string
          id: string
          instagram_access_token: string | null
          instagram_business_id: string | null
          instagram_connected: boolean | null
          instagram_username: string | null
          updated_at: string
        }
        Insert: {
          campaign_active?: boolean | null
          company_url: string
          created_at?: string
          designation: string
          full_name: string
          id: string
          instagram_access_token?: string | null
          instagram_business_id?: string | null
          instagram_connected?: boolean | null
          instagram_username?: string | null
          updated_at?: string
        }
        Update: {
          campaign_active?: boolean | null
          company_url?: string
          created_at?: string
          designation?: string
          full_name?: string
          id?: string
          instagram_access_token?: string | null
          instagram_business_id?: string | null
          instagram_connected?: boolean | null
          instagram_username?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      reward_tiers: {
        Row: {
          amount: number
          coupon_code: string | null
          created_at: string
          currency: string
          id: string
          max_followers: number
          min_followers: number
          profile_id: string
          updated_at: string
        }
        Insert: {
          amount: number
          coupon_code?: string | null
          created_at?: string
          currency?: string
          id?: string
          max_followers: number
          min_followers: number
          profile_id: string
          updated_at?: string
        }
        Update: {
          amount?: number
          coupon_code?: string | null
          created_at?: string
          currency?: string
          id?: string
          max_followers?: number
          min_followers?: number
          profile_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "reward_tiers_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
