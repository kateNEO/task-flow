import {supabase} from "@/app/createClient";
import {RegistrationFormInterface} from "@/components/RegistrationForm";
import {redirect} from "next/navigation";

export async function createUser(userData: RegistrationFormInterface){
    const { data, error } = await supabase.auth.signUp({...userData})
    if (error) return { error: error.message };
    console.log(data)
    redirect('/sections')
}
