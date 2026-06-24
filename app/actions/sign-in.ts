import {supabase} from "@/app/createClient";
import {LoginFormInterface} from "@/components/LoginForm";

export async function signInWithPassword (userData: LoginFormInterface) {
    const { data, error } = await supabase.auth.signInWithPassword({...userData})
    if (error) return { error: error.message };
}
