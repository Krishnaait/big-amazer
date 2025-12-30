# Railway Deployment Guide for Big Amazer

## Error Fixed: Missing CRIC_API_KEY

Your deployment failed with this error:
```
Build Failed: secret CRIC_API_KEY not found
```

This means you need to add environment variables in Railway.

---

## Required Environment Variables for Railway

You need to add these **3 variables** in Railway:

### 1. DATABASE_URL
**Value:** `mysql://root:wvEoXNksdaqOScFbTImDjKfacMZquJWz@metro.proxy.rlwy.net:14408/railway`  
**Purpose:** MySQL database connection string

### 2. CRIC_API_KEY  
**Value:** Your CricketData.org API key  
**Purpose:** Fetches cricket matches, scores, and fixtures  
**How to get:**
1. Go to https://cricketdata.org/
2. Sign up / Log in
3. Get your API key from dashboard
4. Copy the key (looks like: `abc123def456ghi789`)

### 3. JWT_SECRET
**Value:** Generate using: `openssl rand -base64 32`  
**Purpose:** Secures session cookies and JWT tokens  
**Example:** `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0`

---

## How to Add Environment Variables in Railway

### Step 1: Open Your Project
1. Go to https://railway.app/
2. Click on your `big-amazer` project

### Step 2: Go to Variables Tab
1. Click on your service (the one that's failing to deploy)
2. Click on the **"Variables"** tab

### Step 3: Add Each Variable
For each of the 3 variables above:

1. Click **"+ New Variable"** button
2. Enter the **Variable Name** (e.g., `DATABASE_URL`)
3. Enter the **Variable Value** (the actual value)
4. Click **"Add"**

### Step 4: Redeploy
1. After adding all 3 variables, Railway will automatically trigger a new deployment
2. OR you can manually click **"Deploy"** button

---

## Complete Variable List

Here's what you need to add in Railway:

```
DATABASE_URL=mysql://root:wvEoXNksdaqOScFbTImDjKfacMZquJWz@metro.proxy.rlwy.net:14408/railway

CRIC_API_KEY=your-cricapi-key-here

JWT_SECRET=your-generated-jwt-secret-here
```

---

## Optional Variables (Not Required for Basic Deployment)

These are optional and only needed if you want specific features:

```
# Node Environment (Railway sets this automatically)
NODE_ENV=production

# Port (Railway sets this automatically)
PORT=3000

# Branding (optional)
VITE_APP_TITLE=Big Amazer
VITE_APP_LOGO=/logo.png
```

---

## After Adding Variables

1. ✅ Railway will automatically redeploy
2. ✅ Wait 2-3 minutes for build to complete
3. ✅ Check the deployment logs for success
4. ✅ Visit your Railway URL to see the live site

---

## Troubleshooting

### If deployment still fails:

1. **Check all 3 variables are added correctly**
   - No typos in variable names
   - No extra spaces in values
   - CRIC_API_KEY is valid

2. **Check the logs**
   - Click on "Deployments" tab
   - Click on the latest deployment
   - Read the error message

3. **Verify database connection**
   - Make sure DATABASE_URL is exactly as provided
   - Test connection from Railway's database service

### Common Issues:

**Error: "CRIC_API_KEY not found"**
- Solution: Add CRIC_API_KEY variable in Railway

**Error: "DATABASE_URL not found"**
- Solution: Add DATABASE_URL variable in Railway

**Error: "JWT_SECRET not found"**
- Solution: Add JWT_SECRET variable in Railway

**Error: "Cannot connect to database"**
- Solution: Check DATABASE_URL is correct
- Make sure Railway MySQL service is running

---

## Need Help?

If you're still having issues:

1. Check that all 3 variables are added
2. Make sure CRIC_API_KEY is valid (test at https://cricketdata.org/)
3. Verify DATABASE_URL matches your Railway MySQL service
4. Check Railway deployment logs for specific errors

---

## Summary

**Minimum Required:**
1. DATABASE_URL (you have this)
2. CRIC_API_KEY (get from cricketdata.org)
3. JWT_SECRET (generate with openssl)

Add these 3 in Railway Variables tab and your deployment will succeed!
