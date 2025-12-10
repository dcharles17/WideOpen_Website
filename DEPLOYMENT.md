# Deployment Guide - Wide Open Development

## ✅ Netlify Deployment (Recommended for You)

Your site is now configured for Netlify! Here's how to deploy:

### Step 1: Sign Up for Netlify
1. Go to https://www.netlify.com
2. Click "Sign up" (use GitHub to connect easily)
3. Authorize Netlify to access your GitHub

### Step 2: Create New Site
1. Click "Add new site" → "Import an existing project"
2. Choose "GitHub"
3. Select `dcharles17/WideOpen_Website` repository
4. Netlify will auto-detect Next.js settings ✅

### Step 3: Configure Build Settings
Netlify should auto-detect these (from your `netlify.toml`):
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18

### Step 4: Add Environment Variables
Click "Site settings" → "Environment variables" → "Add a variable"

**Required Variables:**
```
NEXT_PUBLIC_SITE_URL=https://your-site.netlify.app
```

**For Email (when ready):**
```
RESEND_API_KEY=re_your_key_here
RESEND_FROM_EMAIL=noreply@wideopendevelopment.com
RESEND_TO_EMAIL=dillon@wideopendevelopment.com
```

### Step 5: Deploy!
1. Click "Deploy site"
2. Wait 2-3 minutes for build
3. Your site will be live at `https://your-site-name.netlify.app`

### Step 6: Add Custom Domain (Optional)
1. In Netlify, go to "Domain settings"
2. Click "Add custom domain"
3. Enter `wideopendevelopment.com`
4. Follow DNS instructions from your domain registrar
5. Netlify provides free SSL certificate automatically

---

## 🚀 Alternative: Vercel Deployment

Vercel is optimized for Next.js and may have better performance.

### Deploy to Vercel
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import `dcharles17/WideOpen_Website`
5. Add environment variables (same as above)
6. Click "Deploy"

**Vercel Advantages:**
- Built specifically for Next.js
- Automatic optimizations
- Edge functions
- Better performance metrics
- Free SSL + CDN included

---

## 📋 Pre-Deployment Checklist

### Must Do Before Going Live
- [ ] **Set up Resend account** (resend.com)
- [ ] **Add environment variables** to hosting platform
- [ ] **Test contact form** after deployment
- [ ] **Test all pages** work on production
- [ ] **Check mobile responsiveness**
- [ ] **Test dark mode toggle**

### Should Do Soon After Launch
- [ ] Set up custom domain (wideopendevelopment.com)
- [ ] Configure DNS records
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics
- [ ] Claim Google Business Profile
- [ ] Get 3-5 real client testimonials
- [ ] Add real portfolio images

### Nice to Have
- [ ] Set up email forwarding for your domain
- [ ] Add real logo (replace "WOD" text)
- [ ] Add favicon
- [ ] Create social media profiles
- [ ] Set up Tawk.to live chat

---

## 🔧 Build & Test Locally

Before deploying, you can test the production build:

```bash
# Build for production
npm run build

# Start production server
npm start

# Open http://localhost:3000
```

This will show exactly what users will see in production.

---

## 🌐 Domain Setup (After Deployment)

### If using Netlify with custom domain:
1. Buy domain (Namecheap, GoDaddy, Google Domains)
2. In Netlify: Domain settings → Add custom domain
3. In your domain registrar, add DNS records:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5 (Netlify's load balancer)

   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```
4. Wait 24-48 hours for DNS propagation
5. SSL certificate auto-issued by Netlify

### If using Vercel with custom domain:
1. In Vercel: Settings → Domains → Add
2. Follow Vercel's DNS instructions
3. SSL automatic

---

## 📧 Email Setup (Resend)

### Step 1: Sign Up
1. Go to https://resend.com
2. Sign up (free tier: 100 emails/day)
3. Verify your email

### Step 2: Add Domain (Optional but Recommended)
1. In Resend dashboard: Domains → Add Domain
2. Add `wideopendevelopment.com`
3. Add DNS records (provided by Resend)
4. Wait for verification

### Step 3: Get API Key
1. API Keys → Create API Key
2. Copy the key (starts with `re_`)
3. Add to environment variables in Netlify/Vercel:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   RESEND_FROM_EMAIL=noreply@wideopendevelopment.com
   RESEND_TO_EMAIL=dillon@wideopendevelopment.com
   ```

### Step 4: Test
1. Redeploy site (to pick up new env vars)
2. Submit test quote from contact form
3. Check your inbox for quote notification

---

## 📊 Post-Deployment Setup

### Google Search Console
1. Go to https://search.google.com/search-console
2. Add property: `wideopendevelopment.com`
3. Verify ownership (DNS or HTML file)
4. Submit sitemap: `https://wideopendevelopment.com/sitemap.xml`

### Google Analytics (Optional)
1. Go to https://analytics.google.com
2. Create account and property
3. Get tracking ID (G-XXXXXXXXXX)
4. Add to environment variables:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
5. Redeploy

### Google Business Profile
1. Go to https://www.google.com/business
2. Claim your business
3. Add details:
   - Wide Open Development
   - Phone: (801) 834-7246
   - Location: Utah
   - Website: wideopendevelopment.com
4. Upload photos
5. Start collecting reviews

---

## 🐛 Troubleshooting

### Build Fails
**Error**: "Module not found"
**Fix**: Make sure all dependencies are in `package.json` and committed

**Error**: "Environment variable missing"
**Fix**: Check environment variables are set in hosting dashboard

### Contact Form Not Working
**Issue**: Form submits but no email received
**Fix**:
1. Check RESEND_API_KEY is set
2. Verify email addresses in env vars
3. Check Resend dashboard for logs
4. Make sure domain is verified in Resend

### Site Loads Slowly
**Issue**: Images or pages load slowly
**Fix**:
1. Optimize images (use next/image)
2. Check Netlify/Vercel analytics
3. Consider upgrading to paid plan for more resources

### Dark Mode Not Working
**Issue**: Toggle doesn't change theme
**Fix**: Clear browser cache and hard refresh (Cmd+Shift+R)

---

## 💰 Costs

### Free Tier (Recommended to Start)
- **Netlify/Vercel**: Free
  - 100GB bandwidth/month
  - Unlimited sites
  - SSL included
  - Custom domain supported

- **Resend**: Free
  - 100 emails/day
  - 3,000 emails/month
  - Perfect for contact forms

- **Domain**: ~$12/year
  - From Namecheap, Google Domains, etc.

**Total Monthly Cost**: $0 (just domain ~$1/month)

### Paid Upgrades (If Needed Later)
- **Netlify Pro**: $19/month
  - More bandwidth
  - Better analytics
  - Priority support

- **Vercel Pro**: $20/month
  - More builds
  - Better performance
  - Team features

- **Resend Pro**: $20/month
  - 50,000 emails/month
  - Better deliverability

---

## 🎯 Launch Day Checklist

### Morning of Launch
- [ ] ☕ Get coffee
- [ ] Test build locally: `npm run build && npm start`
- [ ] Check all environment variables are set
- [ ] Test contact form one more time
- [ ] Clear browser cache

### Deploy
- [ ] Push any final changes to GitHub
- [ ] Deploy on Netlify/Vercel
- [ ] Wait for build (2-3 minutes)
- [ ] Check deployment logs for errors

### Post-Deploy Testing
- [ ] Visit live site
- [ ] Test all navigation links
- [ ] Submit test contact form
- [ ] Check email received
- [ ] Test on mobile device
- [ ] Test dark mode toggle
- [ ] Check portfolio pages
- [ ] Test FAQ page
- [ ] Try speed test tool

### Announce
- [ ] Share on LinkedIn
- [ ] Update email signature
- [ ] Tell existing clients
- [ ] Update Google Business Profile
- [ ] Celebrate! 🎉

---

## 📞 Need Help?

### Documentation
- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Resend Docs: https://resend.com/docs

### Support
- Netlify Support: support@netlify.com
- Vercel Support: https://vercel.com/support
- Resend Support: support@resend.com

---

## ✅ You're Ready!

Your website is production-ready and configured for deployment. Choose either Netlify or Vercel, follow the steps above, and you'll be live in minutes!

**Recommended Path:**
1. Deploy to Netlify now (free, easy)
2. Test everything works
3. Set up Resend and configure email
4. Add custom domain
5. Submit to Google Search Console
6. Start marketing!

Good luck with your launch! 🚀
