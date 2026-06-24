export function readEnv(name: string) {
    const key = process.env[name]
    if (!key) {
        throw new Error(`Missing env variable: ${name}`);
    }
    return key;
}

export const env = {
    supabaseURL: readEnv('NEXT_PUBLIC_SUPABASE_URL'),
    supabasePublishableKey: readEnv('NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY')
}

