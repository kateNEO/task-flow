import {createClient} from '@supabase/supabase-js';
import {env} from "@/app/signUp/env";

export const supabase = createClient(
    env.supabaseURL,
    env.supabasePublishableKey
);
