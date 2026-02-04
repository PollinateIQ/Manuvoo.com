# Pre-Deployment Checklist ✅

Before you deploy to Netlify, verify these items:

## Files to Commit

Make sure these files are in your repository:

- [ ] `netlify.toml` - Netlify configuration
- [ ] `netlify-build.sh` - Bun build script
- [ ] `src/sections/Newsletter.tsx` - Newsletter component
- [ ] `src/pages/Home.tsx` - Updated with Newsletter
- [ ] `src/pages/Contact.tsx` - Updated with Newsletter
- [ ] `package.json` - Your dependencies
- [ ] `package-lock.json` - Lock file (for npm compatibility)

## Local Testing

- [ ] Run `bun run build` - Build should succeed
- [ ] Run `bun run dev` - Site should load locally
- [ ] Test Newsletter on Home page - Form should appear and submit
- [ ] Test Newsletter on Contact page - Form should appear and submit
- [ ] Test Contact form - Should work properly

## Git Repository

- [ ] Initialize git (if not done): `git init`
- [ ] Add remote repository: `git remote add origin YOUR_REPO_URL`
- [ ] Verify remote: `git remote -v`

## Ready to Deploy?

Run these commands:

```bash
# 1. Check status
git status

# 2. Add all files
git add .

# 3. Commit
git commit -m "Add newsletter section and Netlify deployment config"

# 4. Push to GitHub
git push origin main
```

## After Pushing

1. [ ] Go to [netlify.com](https://app.netlify.com/)
2. [ ] Sign up/Login
3. [ ] Click "Add new site" → "Import an existing project"
4. [ ] Select GitHub provider
5. [ ] Choose your repository
6. [ ] Verify build settings:
   - Build command: `chmod +x netlify-build.sh && ./netlify-build.sh`
   - Publish directory: `dist`
7. [ ] Click "Deploy site"
8. [ ] Wait for deployment (first build takes ~2-3 minutes)
9. [ ] Visit your live site URL
10. [ ] Test all features

## Post-Deployment Testing

On your live site, verify:

- [ ] Home page loads
- [ ] Newsletter section appears on Home page
- [ ] Contact page loads
- [ ] Newsletter section appears on Contact page
- [ ] Navigation works
- [ ] All links work
- [ ] Forms submit without errors

## Optional Next Steps

- [ ] Set up custom domain
- [ ] Configure environment variables
- [ ] Connect newsletter to real email service (MailChimp, ConvertKit, etc.)
- [ ] Set up form submissions handler
- [ ] Add analytics
- [ ] Enable Netlify Forms for contact form

---

## 🎉 Once Complete

You'll have:
- ✅ Live website on Netlify
- ✅ HTTPS enabled
- ✅ Continuous deployment
- ✅ Newsletter on Home and Contact pages
- ✅ Professional deployment setup

**Need help?** Check `DEPLOYMENT.md` for detailed instructions!
