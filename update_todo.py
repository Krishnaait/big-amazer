#!/usr/bin/env python3.11
"""
Comprehensive todo.md updater - marks all actually completed tasks as done
"""

import re

def update_todo():
    with open('/home/ubuntu/big-amazer/todo.md', 'r') as f:
        content = f.read()
    
    # Fix escaped brackets first
    content = content.replace(r'\[ \]', '[ ]')
    content = content.replace(r'\[x\]', '[x]')
    
    # Dictionary of tasks to mark as complete
    completions = {
        # Environment setup
        "Add NEXTAUTH_SECRET equivalent for session management": True,
        "Add CRON_SECRET for automated sync": True,
        "Document all environment variables": True,
        "Import and add Toaster component from react-hot-toast": True,
        
        # Database
        "Remove openId requirement for custom auth": True,
        "name (varchar 255, not null) - team name": True,
        "Add indexes for frequently queried fields": True,
        "Test connection with simple query": True,
        "Add logic to create all 5 tables if not exist": True,
        "Add ALTER TABLE for missing columns": True,
        "Return success/failure response": True,
        
        # Cricket API
        "If matchId: return single match": True,
        
        # Pages
        "Add featured contests section": True,
        'Add page title: "Matches"': True,
        
        # Team Creation - all procedures exist
        "Create teams router in `server/routers.ts`": True,
        "Add createTeam procedure (protected):": True,
        "Validate user is authenticated": True,
        "Accept input: matchId, name, players[], captainId, viceCaptainId, totalCreditsUsed": True,
        "Validate: exactly 11 players": True,
        "Validate: captain and vice-captain provided": True,
        "Validate: team name provided": True,
        "Insert team record into userTeams table": True,
        "Insert player records into teamPlayers table": True,
        "Return team ID on success": True,
        
        # Contests - all procedures exist
        "Add contests router in `server/routers.ts`": True,
        "Add getContests procedure:": True,
        "Accept optional matchId filter": True,
        "Query contests from database": True,
        "Return contests array with count": True,
        "Add seedContests procedure:": True,
        "Define 3 sample contests:": True,
        "Insert contests into database": True,
        "Add joinContest procedure (protected):": True,
        "Find contest by ID": True,
        "Validate contest exists": True,
        "Validate contest not full (currentEntries < maxEntries)": True,
        "Create contest entry record": True,
        "Increment currentEntries counter": True,
        
        # Contest page
        "Create `client/src/pages/Contests.tsx`": True,
        "Contest name": True,
        "Entry fee (orange text)": True,
        "Prize pool (golden text)": True,
        "Spots filled progress bar": True,
        "Join button (orange background)": True,
        "Test contests page": True,
        
        # Live Score
        "Create `client/src/pages/LiveScore.tsx`": True,
        "Use trpc.contests.getLeaderboard.useQuery()": True,
        "Display leaderboard table with columns:": True,
        "Rank (with trophy icons for top 3)": True,
        "Team Name": True,
        "User Name": True,
        "Points (orange color)": True,
        "Add auto-refresh toggle button": True,
        "Add manual refresh button": True,
        "Implement 30-second auto-refresh using useEffect": True,
        "Show last updated timestamp": True,
        "Test live score page": True,
        
        # Footer
        "Add Big Amazer company information:": True,
        
        # Informational pages - all have comprehensive content
        "Create `client/src/pages/About.tsx`": True,
        "Add company overview section": True,
        "Add mission and vision section": True,
        "Add team information": True,
        "Add contact information": True,
        "Test About page": True,
        
        "Create `client/src/pages/HowToPlay.tsx`": True,
        "Add step-by-step guide": True,
        "Add rules and scoring system": True,
        "Add tips for beginners": True,
        "Test How to Play page": True,
        
        "Create `client/src/pages/FAQ.tsx`": True,
        "Add common questions and answers": True,
        "Add search/filter functionality": True,
        "Test FAQ page": True,
        
        "Create `client/src/pages/Contact.tsx`": True,
        "Add contact form": True,
        "Add email and phone information": True,
        "Add office address": True,
        "Test Contact page": True,
        
        "Create `client/src/pages/Terms.tsx`": True,
        "Add terms of service content": True,
        "Add user agreement": True,
        "Add liability clauses": True,
        "Test Terms page": True,
        
        "Create `client/src/pages/Privacy.tsx`": True,
        "Add privacy policy content": True,
        "Add data collection information": True,
        "Add data usage and protection": True,
        "Test Privacy page": True,
        
        "Create `client/src/pages/FairPlay.tsx`": True,
        "Add fair play guidelines": True,
        "Add anti-cheating measures": True,
        "Add reporting mechanism": True,
        "Test Fair Play page": True,
        
        "Create `client/src/pages/ResponsibleGaming.tsx`": True,
        "Add responsible gaming guidelines": True,
        "Add self-exclusion information": True,
        "Add helpline numbers": True,
        "Test Responsible Gaming page": True,
    }
    
    # Process each line
    lines = content.split('\n')
    updated_lines = []
    
    for line in lines:
        updated_line = line
        # Check if it's an incomplete task
        if line.strip().startswith('- [ ]'):
            task_text = line.split('- [ ]', 1)[1].strip() if '- [ ]' in line else ""
            # Check if this task should be marked complete
            for pattern, should_complete in completions.items():
                if should_complete and pattern in task_text:
                    updated_line = line.replace('- [ ]', '- [x]', 1)
                    break
        updated_lines.append(updated_line)
    
    # Write back
    with open('/home/ubuntu/big-amazer/todo.md', 'w') as f:
        f.write('\n'.join(updated_lines))
    
    print("Todo list updated successfully!")
    
    # Count remaining
    incomplete = sum(1 for line in updated_lines if line.strip().startswith('- [ ]'))
    complete = sum(1 for line in updated_lines if line.strip().startswith('- [x]'))
    print(f"Complete: {complete}")
    print(f"Incomplete: {incomplete}")

if __name__ == '__main__':
    update_todo()
