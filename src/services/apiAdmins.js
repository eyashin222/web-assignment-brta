import supabase from "./supabase";

export async function getAdmin() {
  const { data, error } = await supabase.from("admins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Admin can not be added");
  }
  return data;
}
