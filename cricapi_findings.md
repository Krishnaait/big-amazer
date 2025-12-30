# CricAPI Findings - Upcoming Matches

## Key Discovery

The CricAPI has **TWO different endpoints**:

1. **`/currentMatches`** - Returns only LIVE and recently completed matches
   - URL: `https://api.cricapi.com/v1/currentMatches?apikey={KEY}&offset=0`
   - Returns: Live matches + recently completed matches
   - Does NOT include upcoming scheduled matches

2. **`/matches`** - Returns upcoming scheduled matches + live matches
   - URL: `https://api.cricapi.com/v1/matches?apikey={KEY}&offset=0`
   - Returns: Upcoming matches scheduled for coming days + live matches
   - This is what we need!

## Evidence

From the schedule page at https://cricketdata.org/cricket-data-formats/schedule, I can see:
- Dozens of upcoming matches scheduled for Dec 31, Jan 1, Jan 2, Jan 3, Jan 4, etc.
- Matches from various series: Super Smash, Big Bash League, International League T20, SA20, Vijay Hazare Trophy, etc.
- All with "Preview" status and countdown timers (e.g., "9h 46m", "1d 11h 16m")

## Solution

We need to:
1. Update `cricketApi.ts` to use the `/matches` endpoint instead of (or in addition to) `/currentMatches`
2. The `/matches` endpoint will give us all the upcoming scheduled matches
3. We can still use `/currentMatches` for live scores, or just use `/matches` for everything

## API Endpoint Documentation

Based on the CricketData.org website and the GitHub samples, the correct endpoint is:
```
https://api.cricapi.com/v1/matches?apikey={APIKEY}&offset=0
```

This will return upcoming matches that are scheduled for the coming days.
