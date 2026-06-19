import {supabase} from "@/app/createClient";

export function createUser (){

}

const { data, error } = await supabase.auth.signUp({
    email: 'example@email.com',
    password: 'example-password',
})
