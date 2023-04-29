import { createClient } from "@supabase/supabase-js";

const url = "https://iaonqhgjxdkurmjpruoh.supabase.co";
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlhb25xaGdqeGRrdXJtanBydW9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI3Mzc5OTgsImV4cCI6MTk5ODMxMzk5OH0.WahftY16sDHaOenx_WekCxmYAcItYqW8DL1m2d0Dvcs";

export const supabase = createClient(url, key);
