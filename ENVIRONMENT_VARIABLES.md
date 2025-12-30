# Big Amazer - Environment Variables Guide

This document lists all environment variables needed to deploy Big Amazer to external hosting platforms (Railway, Vercel, Render, etc.).

## Required Variables

### 1. DATABASE_URL
**Purpose:** MySQL database connection string  
**Format:** `mysql://username:password@host:port/database`  
**Example:** `mysql://root:wvEoXNksdaqOScFbTImDjKfacMZquJWz@metro.proxy.rlwy.net:14408/railway`  
**How to get:** You already have this from Railway

---

### 2. JWT_SECRET
**Purpose:** Secret key for signing session cookies and JWT tokens  
**Format:** Random string (32+ characters recommended)  
**Example:** `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0`  
**How to get:** Generate a random string using:
```bash
openssl rand -base64 32
```
Or use any random string generator

---

### 3. CRIC_API_KEY
**Purpose:** API key for fetching cricket matches, scores, and fixtures  
**Format:** String (API key from CricketData.org)  
**Example:** `abc123def456ghi789`  
**How to get:** 
1. Visit https://cricketdata.org/
2. Sign up for a free account
3. Get your API key from the dashboard
4. **Note:** You already have this configured in the current project

---

### 4. PORT (Optional)
**Purpose:** Port number for the server to run on  
**Format:** Integer  
**Default:** `3000`  
**Example:** `3000` or `8080`  
**How to get:** Most hosting platforms set this automatically

---

### 5. NODE_ENV (Optional)
**Purpose:** Specifies the environment mode  
**Format:** `development` | `production` | `test`  
**Default:** `production`  
**Example:** `production`  
**How to get:** Set to `production` for deployed environments

---

## Optional Variables (Manus Platform Features)

These are only needed if you're using Manus platform features. For standalone deployment, you can skip these:

### OAUTH_SERVER_URL
**Purpose:** Manus OAuth backend URL  
**Default:** `https://api.manus.im`

### VITE_OAUTH_PORTAL_URL
**Purpose:** Manus login portal URL  
**Default:** `https://portal.manus.im`

### VITE_APP_ID
**Purpose:** Manus OAuth application ID  
**How to get:** From Manus platform dashboard

### BUILT_IN_FORGE_API_URL
**Purpose:** Manus built-in APIs (LLM, storage, notifications)  
**Default:** `https://forge.manus.im`

### BUILT_IN_FORGE_API_KEY
**Purpose:** Server-side API key for Manus services  
**How to get:** From Manus platform dashboard

### VITE_FRONTEND_FORGE_API_KEY
**Purpose:** Frontend API key for Manus services  
**How to get:** From Manus platform dashboard

---

## Branding Variables

### VITE_APP_TITLE
**Purpose:** Application title shown in browser tab  
**Default:** `Big Amazer`  
**Example:** `Big Amazer - Fantasy Cricket`

### VITE_APP_LOGO
**Purpose:** Path to application logo  
**Default:** `/logo.png`  
**Example:** `/logo.png` or `/assets/logo.svg`

---

## Analytics Variables (Optional)

### VITE_ANALYTICS_ENDPOINT
**Purpose:** Analytics tracking endpoint  
**Example:** `https://analytics.yourdomain.com`

### VITE_ANALYTICS_WEBSITE_ID
**Purpose:** Website ID for analytics tracking  
**Example:** `your-website-id`

---

## Minimum Required for Deployment

For a basic standalone deployment, you only need these **3 variables**:

1. **DATABASE_URL** - Your Railway MySQL connection string (you have this)
2. **JWT_SECRET** - Generate using `openssl rand -base64 32`
3. **CRIC_API_KEY** - Your CricketData.org API key (you have this)

All other variables are either optional or have sensible defaults.

---

## How to Set Variables on Different Platforms

### Railway
1. Go to your project dashboard
2. Click on "Variables" tab
3. Add each variable with its value
4. Deploy

### Vercel
1. Go to Project Settings → Environment Variables
2. Add each variable
3. Redeploy

### Render
1. Go to Environment tab in your service
2. Add each variable
3. Save changes

### Netlify
1. Site Settings → Build & Deploy → Environment
2. Add each variable
3. Trigger new deploy

---

## Security Notes

- **Never commit** `.env` files to Git
- **Never share** your JWT_SECRET or API keys publicly
- **Use different secrets** for development and production
- **Rotate secrets** periodically for security
