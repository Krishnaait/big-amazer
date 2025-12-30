# Railway Environment Variables - Ready to Add

## 🎯 Copy and Paste These Exact Values

Add these **2 environment variables** in Railway's Variables tab:

---

## Variable 1: CRIC_API_KEY

**Variable Name:**
```
CRIC_API_KEY
```

**Variable Value:**
```
1a822521-d7e0-46ff-98d3-3e51020863f3
```

---

## Variable 2: JWT_SECRET

**Variable Name:**
```
JWT_SECRET
```

**Variable Value:**
```
bcwJBNwU2Nec58S5YA5eooLj3TVbKZC7qzfWFR58smA=
```

---

## 📋 Step-by-Step Instructions

### Step 1: Open Railway Dashboard
1. Go to https://railway.app/
2. Log in to your account
3. Click on your `big-amazer` project

### Step 2: Open Variables Tab
1. Click on your service (the one that's deploying)
2. Click on the **"Variables"** tab at the top

### Step 3: Add CRIC_API_KEY
1. Click **"+ New Variable"** button
2. In "Variable Name" field, type: `CRIC_API_KEY`
3. In "Variable Value" field, paste: `1a822521-d7e0-46ff-98d3-3e51020863f3`
4. Click "Add" or press Enter

### Step 4: Add JWT_SECRET
1. Click **"+ New Variable"** button again
2. In "Variable Name" field, type: `JWT_SECRET`
3. In "Variable Value" field, paste: `bcwJBNwU2Nec58S5YA5eooLj3TVbKZC7qzfWFR58smA=`
4. Click "Add" or press Enter

### Step 5: Verify Variables
You should now see 3 variables in total:
- ✅ `DATABASE_URL` (already configured)
- ✅ `CRIC_API_KEY` (just added)
- ✅ `JWT_SECRET` (just added)

### Step 6: Wait for Auto-Deploy
- Railway will automatically trigger a new deployment
- Wait 2-3 minutes for the build to complete
- Check the "Deployments" tab to monitor progress

---

## ✅ After Deployment

Once the deployment completes successfully:

1. Visit: `https://big-amazer-production.up.railway.app`
2. The homepage should load without errors
3. Test registration: Click "Register" and create an account
4. Test login: Log in with your new account
5. Check matches: Click "Matches" to see live cricket data

---

## 🔒 Security Notes

- ✅ JWT_SECRET is randomly generated and secure
- ✅ CRIC_API_KEY is your paid API key
- ✅ DATABASE_URL is already configured
- ⚠️ Never commit these values to GitHub
- ⚠️ Keep these values private

---

## 🎉 You're All Set!

Once you add these 2 variables to Railway, your Big Amazer platform will be fully functional in production!
