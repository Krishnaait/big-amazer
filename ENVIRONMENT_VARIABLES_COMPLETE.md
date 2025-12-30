# Big Amazer - Complete Environment Variables Guide

This document lists all environment variables required for Big Amazer deployment.

## Required Variables (MUST SET)

### 1. DATABASE_URL
**Purpose:** MySQL/TiDB database connection string  
**Format:** `mysql://username:password@host:port/database`  
**Example:** `mysql://root:password123@localhost:3306/big_amazer`  
**Where to get:** From your database provider (Railway, PlanetScale, etc.)  
**Required:** YES - Application will not start without this

### 2. CRIC_API_KEY
**Purpose:** Cricket data API key for fetching match information  
**Format:** UUID format (e.g., `1a822521-d7e0-46ff-98d3-3e51020863f3`)  
**Where to get:** https://cricketdata.org/  
**Required:** YES - Cricket matches won't load without this  
**Note:** This is a paid API key, keep it secure

### 3. JWT_SECRET
**Purpose:** Secret key for signing and verifying JWT session tokens  
**Format:** Base64 encoded random string (minimum 32 characters)  
**Generate:** `openssl rand -base64 32`  
**Example:** `bcwJBNwU2Nec58S5YA5eooLj3TVbKZC7qzfWFR58smA=`  
**Required:** YES - User authentication won't work without this  
**Security:** Keep this secret and never commit to version control

---

## Optional Variables

### 4. NODE_ENV
**Purpose:** Application environment mode  
**Values:** `production` or `development`  
**Default:** `production` (when not set)  
**Required:** NO - Defaults to production  
**Usage:** Controls logging verbosity and asset serving

### 5. PORT
**Purpose:** Server port number  
**Values:** Any valid port number (1-65535)  
**Default:** `3000` (when not set)  
**Required:** NO - Defaults to 3000  
**Usage:** Change if port 3000 is already in use

### 6. CRON_SECRET
**Purpose:** Secret key for scheduled tasks/cron jobs  
**Format:** Any string  
**Default:** `default-cron-secret` (when not set)  
**Required:** NO - Only needed if running scheduled tasks  
**Usage:** Protects cron endpoints from unauthorized access

---

## Quick Setup Guide

### For Railway Deployment

1. Go to https://railway.app/ → Your project
2. Click your service → **Variables** tab
3. Add these variables:

```
DATABASE_URL = mysql://user:pass@host:port/db
CRIC_API_KEY = 1a822521-d7e0-46ff-98d3-3e51020863f3
JWT_SECRET = bcwJBNwU2Nec58S5YA5eooLj3TVbKZC7qzfWFR58smA=
NODE_ENV = production
PORT = 3000
```

### For Local Development

Create `.env.local` file in project root:

```env
DATABASE_URL=mysql://root:password@localhost:3306/big_amazer
CRIC_API_KEY=your-api-key-here
JWT_SECRET=your-secret-here
NODE_ENV=development
PORT=3000
```

Then run:
```bash
pnpm dev
```

### For Docker/Container Deployment

Pass variables as environment variables:

```bash
docker run \
  -e DATABASE_URL="mysql://user:pass@host:port/db" \
  -e CRIC_API_KEY="your-api-key" \
  -e JWT_SECRET="your-secret" \
  -e NODE_ENV="production" \
  -e PORT="3000" \
  big-amazer:latest
```

---

## Obtaining Each Variable

### DATABASE_URL

**Option 1: Railway (Recommended)**
1. Create MySQL service in Railway
2. Go to Variables tab
3. Copy the `DATABASE_URL` value

**Option 2: PlanetScale**
1. Create database at https://planetscale.com/
2. Click "Connect" → "Node.js"
3. Copy the connection string

**Option 3: Local MySQL**
```
mysql://root:password@localhost:3306/big_amazer
```

### CRIC_API_KEY

1. Visit https://cricketdata.org/
2. Sign up for an account
3. Go to Dashboard → API Keys
4. Copy your API key
5. Keep it private and secure

### JWT_SECRET

Generate using OpenSSL:
```bash
openssl rand -base64 32
```

Or use Node.js:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

---

## Environment Variables by Feature

### Authentication
- `JWT_SECRET` - Required for user sessions

### Database
- `DATABASE_URL` - Required for all data storage

### Cricket Data
- `CRIC_API_KEY` - Required for match information

### Server Configuration
- `NODE_ENV` - Controls production/development mode
- `PORT` - Server listening port
- `CRON_SECRET` - Protects scheduled tasks

---

## Troubleshooting

### "DATABASE_URL is not configured"
- Check if `DATABASE_URL` is set in your environment
- Verify the connection string format is correct
- Test the database connection manually

### "CRIC_API_KEY is not configured"
- Check if `CRIC_API_KEY` is set
- Verify the API key is valid and active
- Check if API key has rate limits

### "JWT_SECRET is not configured"
- Check if `JWT_SECRET` is set
- Ensure it's a strong random string
- Regenerate if needed: `openssl rand -base64 32`

### "Cannot connect to database"
- Verify `DATABASE_URL` is correct
- Check database server is running
- Verify network connectivity
- Check firewall rules

---

## Security Best Practices

1. **Never commit `.env` files** - Add to `.gitignore`
2. **Use strong JWT_SECRET** - Minimum 32 characters
3. **Rotate secrets regularly** - Change JWT_SECRET periodically
4. **Use HTTPS in production** - Always use secure connections
5. **Restrict API keys** - Limit CRIC_API_KEY usage to your domain
6. **Use environment-specific values** - Different secrets for dev/prod
7. **Monitor API usage** - Track CRIC_API_KEY usage for abuse

---

## Production Deployment Checklist

- [ ] Set `DATABASE_URL` to production database
- [ ] Set `CRIC_API_KEY` to valid API key
- [ ] Generate strong `JWT_SECRET`
- [ ] Set `NODE_ENV=production`
- [ ] Verify all variables are set
- [ ] Test authentication flow
- [ ] Test cricket data loading
- [ ] Monitor logs for errors
- [ ] Set up database backups
- [ ] Configure HTTPS certificate

---

## Support

For issues with environment variables:
1. Check this guide
2. Review application logs
3. Verify each variable is set correctly
4. Test database connection
5. Check API key validity
