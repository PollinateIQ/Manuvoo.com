# Environment Setup Instructions

To connect to the Supabase backend, you need to create a `.env.local` file in the root directory of the project with the following content:

```
NEXT_PUBLIC_SUPABASE_URL=https://ntzeinyrrtogekvpukqp.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

Replace `your_anon_key_here` with the actual anon key from your Supabase project dashboard.

## How to get your Supabase anon key:

1. Go to [Supabase Dashboard](https://app.supabase.com/)
2. Select your project: `ntzeinyrrtogekvpukqp`
3. Go to Project Settings > API
4. Copy the "anon public" key
5. Paste it in your `.env.local` file

After creating this file, restart your development server for the changes to take effect.

**Note:** The `.env.local` file is gitignored to prevent exposing sensitive credentials in version control.
