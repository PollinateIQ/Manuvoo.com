# Netlify Deployment Guide

## ✅ Pre-Deployment Checklist

- [x] `netlify.toml` configuration file created
- [x] Build command tested locally (`npm run build`)
- [x] `.gitignore` properly configured
- [x] Newsletter section added to Contact and Home pages

## 🚀 Deploy to Netlify (Step-by-Step)

### Step 1: Commit and Push Your Changes

```bash
# Check what files changed
git status

# Add all changes
git add .

# Commit with a message
git commit -m "Add newsletter section and Netlify deployment config"

# Push to GitHub
git push origin main
```

**Note:** If you haven't initialized git yet:
```bash
git init
git add .
git commit -m "Initial commit with newsletter feature"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Deploy on Netlify

**Option A: Using Netlify UI (Easiest)**

1. Go to [https://app.netlify.com/](https://app.netlify.com/)
2. Sign up or log in (you can use your GitHub account)
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **"Deploy with GitHub"**
5. Authorize Netlify to access your GitHub account
6. Select your repository: `ManuvooNew`
7. Netlify will detect your `netlify.toml` and auto-fill:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
8. Click **"Deploy site"**

**Option B: Using Netlify CLI**

```bash
# Install Netlify CLI (one time only)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init

# Follow the prompts:
# - Create & configure a new site
# - Choose your team
# - Enter site name (or leave blank for random)
# - Build command: npm run build
# - Publish directory: dist

# Deploy to production
netlify deploy --prod
```

### Step 3: Verify Deployment

After deployment, Netlify will provide:
- ✅ A live URL (e.g., `https://your-site-name.netlify.app`)
- ✅ Automatic HTTPS
- ✅ Continuous deployment (auto-deploys on git push)

Visit your live site and test:
- Home page loads correctly
- Newsletter section appears on Home page
- Contact page loads correctly
- Newsletter section appears on Contact page
- All forms work as expected

## 🔄 Continuous Deployment

Once connected, Netlify will automatically:
- Deploy when you push to `main` branch
- Show deploy previews for pull requests
- Send you notifications on deploy status

To deploy updates:
```bash
git add .
git commit -m "Your update message"
git push
```

Netlify will automatically rebuild and deploy!

## 🛠️ Bun Configuration

Your project is configured to use **Bun on Netlify**! 

The build process automatically:
1. Installs Bun during the build
2. Runs `bun install` to get dependencies
3. Runs `bun run build` to build your project

This is handled by the `netlify-build.sh` script, which is automatically executed by Netlify.

**No additional configuration needed!** Just push your code and Netlify will handle the rest.

## 🔍 Troubleshooting

### Build Fails on Netlify

1. Check the build logs in Netlify dashboard
2. Ensure all dependencies are in `package.json`
3. Test build locally: `npm run build`
4. Check Node version matches (currently set to Node 20)

### Routes Don't Work (404 on Refresh)

- ✅ Already handled by the `[[redirects]]` section in `netlify.toml`
- All routes redirect to `index.html` for client-side routing

### Environment Variables

**Required for production:**

1. Go to Site settings → Environment variables
2. Add the following variables:
   - `VITE_API_BASE_URL` = `https://api.manuvoo.com`
   - `VITE_USE_MOCK_API` = `false`

These variables configure the backend API connection for:
- Contact form submissions
- Newsletter subscriptions
- CRM integrations

**Note:** The app will default to `https://api.manuvoo.com` if `VITE_API_BASE_URL` is not set.

## 📱 Custom Domain (Optional)

To use your own domain:
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the instructions to update your DNS settings
4. Netlify will automatically provision SSL certificate

## 🎉 You're Done!

Your Manuvoo site is now live on Netlify with:
- ✅ Newsletter subscription on Home and Contact pages
- ✅ Automatic deployments
- ✅ HTTPS enabled
- ✅ Global CDN
- ✅ Instant rollbacks if needed

Need help? Check [Netlify Documentation](https://docs.netlify.com/)
