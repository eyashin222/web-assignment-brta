import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fhbrwzcxhxjqpstglyln.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoYnJ3emN4aHhqcXBzdGdseWxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExNzE1NzIsImV4cCI6MjAxNjc0NzU3Mn0.0rNUrc4zxU4xux4d4XqW8PTne_SUY8dhdBBthts29m0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
