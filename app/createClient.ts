import {createClient} from '@supabase/supabase-js';
import {env} from "@/app/registration/env";

export const supabase = createClient(
    env.supabaseURL,
    env.supabasePublishableKey
);
