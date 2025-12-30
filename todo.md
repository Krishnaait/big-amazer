# Big Amazer Fantasy Cricket Platform - Complete TODO
## Verified Against 37-Page PDF Document - Adapted for Manus tRPC Template

## PART 1: PROJECT SETUP, CORE CONFIGURATION, AND BASE STYLES

### Step 1.1: Project Initialization
- [x] Create project with TypeScript and Tailwind CSS
- [x] Verify project structure created

### Step 1.2: Install Dependencies
- [ ] Install bcrypt: `pnpm install bcrypt`
- [ ] Install bcrypt types: `pnpm install -D @types/bcrypt`
- [ ] Install react-hot-toast: `pnpm install react-hot-toast`
- [ ] Install date-fns: `pnpm install date-fns`
- [ ] Verify all packages in package.json

### Step 1.3: Environment Variables Setup
- [ ] Add CRIC_API_KEY to environment
- [ ] Add NEXTAUTH_SECRET equivalent for session management
- [ ] Add CRON_SECRET for automated sync
- [ ] Document all environment variables

### Step 1.4: Base Styles Configuration
- [ ] Update `client/src/index.css` with Big Amazer color scheme
- [ ] Configure dark theme: bg-[#0F1419] (very dark blue-black)
- [ ] Add orange primary color: #FF6B35
- [ ] Add blue secondary color: #004E89
- [ ] Add golden accent: #F7931E
- [ ] Configure text colors (white, light gray, medium gray)
- [ ] Add custom CSS variables for theming
- [ ] Test dark theme styling renders correctly

### Step 1.5: Root Layout Configuration
- [ ] Update `client/src/App.tsx` with routes
- [ ] Configure ThemeProvider to dark theme
- [ ] Import and add Toaster component from react-hot-toast
- [ ] Add proper TypeScript types
- [ ] Test layout renders without errors

---

## PART 2: DATABASE SCHEMA, ORM, AND INITIALIZATION

### Step 2.1: Drizzle ORM Configuration
- [ ] Verify `drizzle.config.ts` exists and is properly configured
- [ ] Verify schema path points to `drizzle/schema.ts`
- [ ] Verify migrations output to `drizzle/` directory

### Step 2.2: Database Schema Definition
- [x] Update `drizzle/schema.ts` with complete fantasy cricket schema

**Users Table** (modify existing):
- [ ] id (primary key, auto-increment) - EXISTS
- [ ] name (text, not null)
- [ ] email (varchar 320, unique, not null)
- [ ] password (varchar 255, not null) - ADD THIS
- [ ] createdAt (timestamp, default now) - EXISTS
- [ ] Remove openId requirement for custom auth
- [ ] Keep role enum (user, admin)

**User Teams Table** (NEW):
- [ ] id (primary key, auto-increment)
- [ ] userId (int, foreign key to users.id, not null)
- [ ] matchId (varchar 255, not null)
- [ ] name (varchar 255, not null) - team name
- [ ] captainId (varchar 255, not null)
- [ ] viceCaptainId (varchar 255, not null)
- [ ] totalCreditsUsed (decimal 10,2, not null)
- [ ] createdAt (timestamp, default now)

**Team Players Table** (NEW):
- [ ] id (primary key, auto-increment)
- [ ] teamId (int, foreign key to userTeams.id, not null)
- [ ] playerId (varchar 255, not null)
- [ ] createdAt (timestamp, default now)

**Contests Table** (NEW):
- [ ] id (primary key, auto-increment)
- [ ] matchId (varchar 255, not null)
- [ ] name (varchar 255, not null)
- [ ] entryFee (decimal 10,2, not null)
- [ ] prizePool (decimal 10,2, not null)
- [ ] maxEntries (int, not null)
- [ ] currentEntries (int, default 0, not null)
- [ ] status (enum: pending, live, completed, default pending)
- [ ] createdAt (timestamp, default now)

**Contest Entries Table** (NEW):
- [ ] id (primary key, auto-increment)
- [ ] contestId (int, foreign key to contests.id, not null)
- [ ] userId (int, foreign key to users.id, not null)
- [ ] teamId (int, foreign key to userTeams.id, not null)
- [ ] points (decimal 10,2, default 0, not null)
- [ ] rank (int, nullable)
- [ ] createdAt (timestamp, default now)

- [ ] Add proper foreign key relationships
- [ ] Add indexes for frequently queried fields

### Step 2.3: Database Connection
- [ ] Verify `server/db.ts` exists and exports getDb()
- [ ] Update database helper functions for fantasy cricket
- [ ] Add getUserByEmail function
- [ ] Add createUser function with bcrypt hashing
- [ ] Test connection with simple query

### Step 2.4: Database Initialization
- [ ] Create tRPC procedure for database initialization
- [ ] Add logic to create all 5 tables if not exist
- [ ] Add ALTER TABLE for missing columns
- [ ] Add error handling with try-catch
- [ ] Return success/failure response

### Step 2.5: Generate and Apply Migration
- [x] Run `pnpm db:push` command
- [x] Verify all tables created in database
- [x] Verify all columns present with correct types
- [x] Verify foreign key constraints created

---

## PART 3: AUTHENTICATION (CUSTOM CREDENTIALS) AND USER API

### Step 3.1: Custom Authentication System
- [ ] Create auth router in `server/routers.ts`
- [ ] Add register procedure with:
  - [ ] Email and password validation
  - [ ] Check for existing user
  - [ ] Hash password using bcrypt.hashSync(password, 10)
  - [ ] Insert new user into database
  - [ ] Return success message
- [ ] Add login procedure with:
  - [ ] Email and password validation
  - [ ] Database user lookup by email
  - [ ] Password verification using bcrypt.compareSync()
  - [ ] Create session cookie
  - [ ] Return user object on success
- [ ] Update auth.me procedure to return current user
- [ ] Keep auth.logout procedure as is
- [ ] Add proper error handling

### Step 3.2: Login Page
- [ ] Create `client/src/pages/Login.tsx`
- [ ] Add form with email and password fields
- [ ] Use trpc.auth.login.useMutation()
- [ ] Add error toast notification on failure
- [ ] Add success toast notification on success
- [ ] Redirect to /dashboard on successful login
- [ ] Add link to registration page
- [ ] Apply Big Amazer dark theme styling (orange/blue colors)
- [ ] Test login functionality

### Step 3.3: Registration Page
- [ ] Create `client/src/pages/Register.tsx`
- [ ] Add form with name, email, and password fields
- [ ] Use trpc.auth.register.useMutation()
- [ ] Add error toast notification on failure
- [ ] Add success toast notification on success
- [ ] Redirect to /login on successful registration
- [ ] Add link to login page
- [ ] Apply Big Amazer dark theme styling
- [ ] Test registration and duplicate email prevention

---

## PART 4: CRICKET DATA API INTEGRATION AND MATCH DISPLAY

### Step 4.1: Cricket API Library
- [ ] Create `shared/cricketApi.ts` with:
  - [ ] Define CRIC_API_KEY from environment
  - [ ] Define BASE_URL = "https://api.cricapi.com/v1"
  - [ ] Create getMatches() function with error handling
  - [ ] Create getMatchSquad(matchId) function with error handling
  - [ ] Export both functions

### Step 4.2: CricScore tRPC Procedure
- [ ] Create cricket router in `server/routers.ts`
- [ ] Add getMatches procedure:
  - [ ] Accept optional matchId input
  - [ ] Call getMatches() function
  - [ ] If matchId: return single match
  - [ ] If no matchId: filter and categorize (live, upcoming, completed)
  - [ ] Sort upcoming by date ascending
  - [ ] Sort completed by date descending
  - [ ] Return categorized object
  - [ ] Add error handling

### Step 4.3: Match Squad tRPC Procedure
- [ ] Add getMatchSquad procedure:
  - [ ] Accept matchId input (required)
  - [ ] Call getMatchSquad(matchId) function
  - [ ] Return squad data
  - [ ] Add error handling

---

## PART 5: CORE APPLICATION PAGES (HOMEPAGE, DASHBOARD, MATCHES)

### Step 5.1: Header Component
- [ ] Create `client/src/components/Header.tsx`
- [ ] Add Big Amazer branding/logo with orange color
- [ ] Create navigation menu with links:
  - [ ] /about - About
  - [ ] /how-to-play - How to Play
  - [ ] /faq - FAQ
  - [ ] /contact - Contact
- [ ] Add conditional rendering based on useAuth():
  - [ ] If authenticated: Dashboard link, Logout button
  - [ ] If not authenticated: Login link, Register link
- [ ] Style with Big Amazer colors (orange #FF6B35, blue #004E89)
- [ ] Add dark background (#0F1419)
- [ ] Add hover effects
- [ ] Test header rendering

### Step 5.2: Footer Component
- [ ] Create `client/src/components/Footer.tsx`
- [ ] Add Big Amazer company information:
  - [ ] Company Name: BIG AMAZER TEAM (OPC) PRIVATE LIMITED
  - [ ] Brand: Big Amazer
  - [ ] Tagline: Fantasy Sports
  - [ ] Address: SECOND FLOOR, AMIYA BEHIND 9 TO 9 SUPER MARKET, RAMNAGRI MORE, ASHIANA-DIGHA ROAD, ASHIANA, Patna, Bihar, 800025
  - [ ] GST: 10AAICB5202A1ZQ
  - [ ] PAN: AAICB5202A
  - [ ] CIN: U72900BR2019OPC042541
  - [ ] Domain: www.amazer.com
- [ ] Add Quick Links section
- [ ] Add Legal section
- [ ] Add copyright with dynamic year
- [ ] Apply dark theme styling
- [ ] Test footer rendering

### Step 5.3: Homepage
- [ ] Update `client/src/pages/Home.tsx`
- [ ] Import Header and Footer components
- [ ] Create hero section with:
  - [ ] Title: "Big Amazer - Fantasy Sports Reimagined"
  - [ ] Subtitle: "Create your dream cricket team and compete for glory"
  - [ ] Orange gradient background
- [ ] Add match sections (live, upcoming, completed)
- [ ] Add featured contests section
- [ ] Apply Big Amazer branding throughout
- [ ] Test homepage rendering

### Step 5.4: Dashboard Page
- [ ] Create `client/src/pages/Dashboard.tsx`
- [ ] Import Header and Footer
- [ ] Add page title: "Dashboard"
- [ ] Add user stats section
- [ ] Add my teams section
- [ ] Add my contests section
- [ ] Apply Big Amazer styling
- [ ] Test dashboard rendering

### Step 5.5: Matches Page
- [ ] Create `client/src/pages/Matches.tsx`
- [ ] Import Header and Footer
- [ ] Add page title: "Matches"
- [ ] Use trpc.cricket.getMatches.useQuery()
- [ ] Display live matches section
- [ ] Display upcoming matches section
- [ ] Display completed matches section
- [ ] Add match cards with team names, scores, status
- [ ] Add "Create Team" button for upcoming matches
- [ ] Apply Big Amazer styling
- [ ] Test matches page

---

## PART 6: TEAM CREATION FLOW (UI AND API)

### Step 6.1: Team Creation tRPC Procedure
- [ ] Create teams router in `server/routers.ts`
- [ ] Add createTeam procedure (protected):
  - [ ] Validate user is authenticated
  - [ ] Accept input: matchId, name, players[], captainId, viceCaptainId, totalCreditsUsed
  - [ ] Validate: exactly 11 players
  - [ ] Validate: captain and vice-captain provided
  - [ ] Validate: team name provided
  - [ ] Insert team record into userTeams table
  - [ ] Insert player records into teamPlayers table
  - [ ] Return team ID on success
  - [ ] Add error handling

### Step 6.2: Team Creation Page (Multi-Step Wizard)
- [ ] Create `client/src/pages/CreateTeam.tsx`
- [ ] Define Player interface (pid, name, role, credits, teamName)
- [ ] Create state variables:
  - [ ] squad: Player[]
  - [ ] selectedPlayers: Player[]
  - [ ] teamName: string
  - [ ] captain: string | null
  - [ ] viceCaptain: string | null
  - [ ] step: 1 | 2 | 3
- [ ] Fetch squad data using trpc.cricket.getMatchSquad.useQuery()
- [ ] Assign random credits (7-10) to each player

**Step 1: Player Selection**
- [ ] Display squad list grouped by role
- [ ] Add selection controls (checkboxes)
- [ ] Show selected count (X/11)
- [ ] Show credits used/remaining
- [ ] Validate: exactly 11 players
- [ ] Add Next button

**Step 2: Captain & Vice-Captain Selection**
- [ ] Display selected 11 players
- [ ] Add captain selection (radio buttons)
- [ ] Add vice-captain selection (radio buttons)
- [ ] Validate: captain and vice-captain different
- [ ] Add Previous and Next buttons

**Step 3: Team Preview & Submission**
- [ ] Display team name input
- [ ] Display all selected players
- [ ] Highlight captain (orange badge)
- [ ] Highlight vice-captain (golden badge)
- [ ] Show total credits used
- [ ] Add Previous and Submit buttons
- [ ] Use trpc.teams.createTeam.useMutation()
- [ ] Show success/error toast
- [ ] Redirect to contests page on success

- [ ] Apply Big Amazer styling throughout
- [ ] Test complete team creation flow

---

## PART 7: CONTEST SYSTEM (API, PAGES, AND SEEDING)

### Step 7.1: Contest List tRPC Procedure
- [ ] Add contests router in `server/routers.ts`
- [ ] Add getContests procedure:
  - [ ] Accept optional matchId filter
  - [ ] Query contests from database
  - [ ] Return contests array with count
  - [ ] Add error handling

### Step 7.2: Contest Seeding tRPC Procedure
- [ ] Add seedContests procedure:
  - [ ] Accept matchId input (required)
  - [ ] Define 3 sample contests:
    - [ ] Mega Contest: entryFee 10, prizePool 1000, maxEntries 100
    - [ ] Head to Head: entryFee 50, prizePool 90, maxEntries 2
    - [ ] Winner Takes All: entryFee 25, prizePool 225, maxEntries 10
  - [ ] Insert contests into database
  - [ ] Return success message with count
  - [ ] Add error handling

### Step 7.3: Join Contest tRPC Procedure
- [ ] Add joinContest procedure (protected):
  - [ ] Validate user is authenticated
  - [ ] Accept input: contestId, teamId
  - [ ] Find contest by ID
  - [ ] Validate contest exists
  - [ ] Validate contest not full (currentEntries < maxEntries)
  - [ ] Create contest entry record
  - [ ] Increment currentEntries counter
  - [ ] Return success message
  - [ ] Add error handling

### Step 7.4: Match Contests Page
- [ ] Create `client/src/pages/Contests.tsx`
- [ ] Define Contest interface
- [ ] Use trpc.contests.getContests.useQuery({ matchId })
- [ ] Display contests in grid layout
- [ ] Create contest cards showing:
  - [ ] Contest name
  - [ ] Entry fee (orange text)
  - [ ] Prize pool (golden text)
  - [ ] Spots filled progress bar
  - [ ] Join button (orange background)
- [ ] Use trpc.contests.joinContest.useMutation()
- [ ] Show success/error toast
- [ ] Apply Big Amazer styling
- [ ] Test contests page

---

## PART 8: LIVE SCORE SYSTEM AND AUTOMATED CONTEST SYNC

### Step 8.1: Live Score Page
- [ ] Create `client/src/pages/LiveScore.tsx`
- [ ] Define Match interface (t1, t2, s, ar)
- [ ] Create state for match and autoRefresh
- [ ] Use trpc.cricket.getMatches.useQuery({ matchId })
- [ ] Display match information:
  - [ ] Team names (white text, bold)
  - [ ] Current score (large orange text)
  - [ ] Match status (light gray text)
- [ ] Add auto-refresh toggle button
- [ ] Implement 30-second auto-refresh with setInterval
- [ ] Clear interval on cleanup
- [ ] Apply Big Amazer styling
- [ ] Test live score page with auto-refresh

### Step 8.2: Contest Sync tRPC Procedure
- [ ] Add syncContests procedure:
  - [ ] Fetch all matches from CricAPI
  - [ ] Filter by status (live, upcoming, completed)
  - [ ] Update contest statuses in database:
    - [ ] Set "live" for live matches
    - [ ] Set "completed" for completed matches
  - [ ] Auto-create contests for new upcoming matches
  - [ ] Calculate points for completed contests (placeholder logic)
  - [ ] Return success message
  - [ ] Add error handling

### Step 8.3: Cron Job tRPC Procedure
- [ ] Add cronSyncContests procedure:
  - [ ] Validate CRON_SECRET from request header
  - [ ] Return 401 if secret doesn't match
  - [ ] Call syncContests procedure internally
  - [ ] Return sync results
  - [ ] Add error handling
- [ ] Document: Set up external cron job to call this every 5 minutes

---

## PART 9: INFORMATIONAL PAGES AND FINAL TOUCHES

### Step 9.1: Create Informational Pages

All pages follow this structure:
- [ ] Import Header and Footer components
- [ ] Add page title
- [ ] Add page-specific content
- [ ] Apply Big Amazer dark theme styling
- [ ] Include company details where appropriate

**About Page**
- [ ] Create `client/src/pages/About.tsx`
- [ ] Add Big Amazer company mission
- [ ] Add company registration details
- [ ] Add team information

**How to Play Page**
- [ ] Create `client/src/pages/HowToPlay.tsx`
- [ ] Add step-by-step guide
- [ ] Add team creation instructions
- [ ] Add contest joining instructions
- [ ] Add scoring explanation

**FAQ Page**
- [ ] Create `client/src/pages/FAQ.tsx`
- [ ] Add common questions and answers
- [ ] Add accordion/expandable sections

**Contact Page**
- [ ] Create `client/src/pages/Contact.tsx`
- [ ] Add contact form
- [ ] Add company address and details

**Terms of Service Page**
- [ ] Create `client/src/pages/Terms.tsx`
- [ ] Add terms and conditions
- [ ] Include company registration info

**Privacy Policy Page**
- [ ] Create `client/src/pages/Privacy.tsx`
- [ ] Add privacy policy content
- [ ] Add data collection information

**Fair Play Policy Page**
- [ ] Create `client/src/pages/FairPlay.tsx`
- [ ] Add fair play rules
- [ ] Add prohibited activities

**Responsible Gaming Page**
- [ ] Create `client/src/pages/ResponsibleGaming.tsx`
- [ ] Add responsible gaming guidelines
- [ ] Add support resources

### Step 9.2: Final Styling and UI Polish
- [ ] Review entire application for styling consistency
- [ ] Verify Big Amazer color scheme applied everywhere:
  - [ ] Primary orange: #FF6B35
  - [ ] Secondary blue: #004E89
  - [ ] Accent golden: #F7931E
  - [ ] Dark background: #0F1419
  - [ ] Card background: #1A1F2E
- [ ] Check text visibility on all backgrounds
- [ ] Test responsive design on mobile, tablet, desktop
- [ ] Optimize images to WebP format
- [ ] Verify all links work correctly

### Step 9.3: Environment Variables Configuration
- [ ] Document all required environment variables:
  - [ ] DATABASE_URL (MySQL connection string)
  - [ ] CRIC_API_KEY (CricAPI key)
  - [ ] CRON_SECRET (for automated sync)
  - [ ] JWT_SECRET (for session management)
- [ ] Verify variables are not exposed in client code

---

## PART 10: TESTING AND DEPLOYMENT

### Step 10.1: Feature Testing
- [ ] Test user registration with valid/invalid data
- [ ] Test login with correct/incorrect credentials
- [ ] Test logout functionality
- [ ] Test match display (live, upcoming, completed)
- [ ] Test team creation wizard (all 3 steps)
- [ ] Test contest seeding
- [ ] Test joining contests
- [ ] Test live score page with auto-refresh
- [ ] Test all informational pages load correctly

### Step 10.2: Database Verification
- [ ] Verify all 5 tables exist
- [ ] Verify all columns have correct types
- [ ] Verify foreign key constraints work
- [ ] Test data insertion and retrieval

### Step 10.3: Final Verification
- [ ] Run build command: `pnpm build`
- [ ] Verify no build errors
- [ ] Test production build locally
- [ ] Verify all features work in production mode

### Step 10.4: Create Checkpoint
- [ ] Save checkpoint with description: "Complete Big Amazer fantasy cricket platform with all features"
- [ ] Verify checkpoint saved successfully
- [ ] Guide user to publish via Manus UI

---

## Summary Statistics
- **Total Database Tables**: 5 (users, userTeams, teamPlayers, contests, contestEntries)
- **Total tRPC Procedures**: 13+ (auth, cricket, teams, contests, cron)
- **Total Pages**: 15+ (Home, Dashboard, Matches, CreateTeam, Contests, LiveScore, 8 info pages, Login, Register)
- **Total Components**: 2+ (Header, Footer)
- **Company**: BIG AMAZER TEAM (OPC) PRIVATE LIMITED
- **Brand Colors**: Orange (#FF6B35), Blue (#004E89), Golden (#F7931E)
- **Theme**: Dark (#0F1419 background)



## BUG FIXES

- [x] Fix nested anchor tag error on homepage (Link component wrapping anchor tags)
