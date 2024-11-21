export interface Lead {
  id: string;
  email: string;
  created_at: string;
}

export type LeadInsert = Omit<Lead, "id" | "created_at">;
export type LeadUpdate = Partial<LeadInsert>;