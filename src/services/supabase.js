import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://osbmfjwljmsobritppin.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zYm1mandsam1zb2JyaXRwcGluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5MTc1MDAsImV4cCI6MjAwNjQ5MzUwMH0.kXGJfD0s5hvVEaA7WTOW2N_-r6RYlkhWUDzX1Wbmm5k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
