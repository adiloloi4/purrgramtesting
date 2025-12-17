# OpenAI API Key Setup

The AI Assistant feature requires an OpenAI API key to function.

## Steps to Add Your OpenAI API Key

1. **Get your OpenAI API key:**
   - Go to https://platform.openai.com/api-keys
   - Sign in or create an account
   - Click "Create new secret key"
   - Copy the key (it starts with `sk-`)

2. **Add it to your `.env.local` file:**
   - Open `.env.local` in the root of your project
   - Add this line:
     ```
     OPENAI_API_KEY=sk-your-actual-key-here
     ```
   - Replace `sk-your-actual-key-here` with your actual API key

3. **Restart your development server:**
   - Stop the server (Ctrl+C)
   - Run `npm run dev` again
   - The environment variable will be loaded

## Example `.env.local` file:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# OpenAI
OPENAI_API_KEY=sk-your-actual-openai-api-key-here
```

## Troubleshooting

- **Error: "OpenAI API key is not configured"**
  - Make sure `OPENAI_API_KEY` is in your `.env.local` file
  - Make sure the file is named exactly `.env.local` (not `.env` or `.env.example`)
  - Restart your dev server after adding the key

- **Error: "Invalid OpenAI API key"**
  - Check that your API key is correct
  - Make sure there are no extra spaces or quotes around the key
  - Verify the key is active at https://platform.openai.com/api-keys

- **Error: "Rate limit exceeded"**
  - You've hit OpenAI's rate limit
  - Wait a few minutes and try again
  - Consider upgrading your OpenAI plan if this happens frequently

## Cost Note

The AI Assistant uses GPT-4, which has usage costs. Monitor your usage at https://platform.openai.com/usage to avoid unexpected charges.

