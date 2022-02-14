export interface token {
  refresh_token: string;
  refresh_token_expires_in: number | null;
  session_idle_time: number | null;
  token_type: string;
  access_token: string;
  expires_in: number | null;
  scope: string;
}
