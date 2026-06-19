export function readEnv(name: string) {
    const key = process.env[name]
    if (!key) {
        throw new Error(`Missing env variable: ${name}`);
    }
    return key;
}

export const env = {
    supabaseURL: 'NEXT_PUBLIC_SUPABASE_URL',
    supabasePublishableKey: 'NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY'
}

