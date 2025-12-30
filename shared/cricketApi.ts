// Cricket API integration using CricAPI
// This will be called from server-side tRPC procedures

const CRIC_API_KEY = process.env.CRIC_API_KEY || "";
const BASE_URL = "https://api.cricapi.com/v1";

export interface Match {
  id: string;
  name: string;
  matchType: string;
  status: string;
  venue: string;
  date: string;
  dateTimeGMT: string;
  teams: string[];
  teamInfo?: Array<{
    name: string;
    img: string;
    shortname: string;
  }>;
  score?: Array<{
    r: number;
    w: number;
    o: number;
    inning: string;
  }>;
  series_id: string;
  fantasyEnabled: boolean;
  bbbEnabled: boolean;
  hasSquad: boolean;
  matchStarted: boolean;
  matchEnded: boolean;
}

export interface Player {
  id: string;
  name: string;
  role: string;
}

export interface MatchSquad {
  players: Array<{
    id: string;
    name: string;
    role: string;
  }>;
}

/**
 * Fetch active series IDs
 */
async function getActiveSeries(): Promise<string[]> {
  try {
    const url = `${BASE_URL}/series?apikey=${CRIC_API_KEY}&offset=0`;
    const response = await fetch(url);
    
    if (!response.ok) {
      console.log("[CricAPI] Series fetch failed:", response.status);
      return [];
    }
    
    const data = await response.json();
    
    if (data.status === "success" && Array.isArray(data.data)) {
      const now = new Date();
      // Get series that are currently active (started but not ended)
      const activeSeries = data.data
        .filter((series: any) => {
          const startDate = new Date(series.startDate);
          // endDate might be partial (e.g., "Jan 25"), use current year
          const endDateStr = series.endDate;
          let endDate: Date;
          
          // Try to parse the end date
          if (endDateStr.includes('-')) {
            endDate = new Date(endDateStr);
          } else {
            // Partial date like "Jan 25", assume current year or next year
            const currentYear = now.getFullYear();
            endDate = new Date(`${endDateStr} ${currentYear}`);
            // If end date is in the past, try next year
            if (endDate < now) {
              endDate = new Date(`${endDateStr} ${currentYear + 1}`);
            }
          }
          
          const isActive = startDate <= now && endDate >= now;
          return isActive;
        })
        .slice(0, 3) // Limit to 3 active series to reduce API calls
        .map((series: any) => series.id);
      
      console.log(`[CricAPI] Found ${activeSeries.length} active series`);
      return activeSeries;
    }
    
    return [];
  } catch (error) {
    console.error("[CricAPI] Error fetching series:", error);
    return [];
  }
}

/**
 * Fetch matches from a specific series
 */
async function getSeriesMatches(seriesId: string): Promise<Match[]> {
  try {
    const url = `${BASE_URL}/series_info?apikey=${CRIC_API_KEY}&id=${seriesId}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      console.log(`[CricAPI] Series ${seriesId} fetch failed:`, response.status);
      return [];
    }
    
    const data = await response.json();
    
    if (data.status === "success" && data.data?.matchList) {
      console.log(`[CricAPI] Series ${seriesId}: ${data.data.matchList.length} matches`);
      return data.data.matchList;
    }
    
    return [];
  } catch (error) {
    console.error(`[CricAPI] Error fetching series ${seriesId} matches:`, error);
    return [];
  }
}

/**
 * Fetch all matches from CricAPI
 * Combines /currentMatches (live/recent) with /series_info (upcoming)
 * Returns matches with 60-second cache
 */
export async function getMatches(): Promise<Match[]> {
  try {
    console.log("[CricAPI] Starting to fetch matches...");
    
    // 1. Get current matches (live and recently completed)
    const currentUrl = `${BASE_URL}/currentMatches?apikey=${CRIC_API_KEY}&offset=0`;
    const currentResponse = await fetch(currentUrl);
    
    let currentMatches: Match[] = [];
    if (currentResponse.ok) {
      const currentData = await currentResponse.json();
      if (currentData.status === "success" && Array.isArray(currentData.data)) {
        currentMatches = currentData.data;
        console.log(`[CricAPI] Current matches: ${currentMatches.length}`);
      }
    }
    
    // 2. Get active series
    const seriesIds = await getActiveSeries();
    console.log(`[CricAPI] Active series IDs:`, seriesIds);
    
    // 3. Get matches from each active series
    let upcomingMatches: Match[] = [];
    for (const seriesId of seriesIds) {
      const seriesMatches = await getSeriesMatches(seriesId);
      upcomingMatches = upcomingMatches.concat(seriesMatches);
    }
    console.log(`[CricAPI] Total series matches: ${upcomingMatches.length}`);
    
    // 4. Combine and deduplicate matches
    const allMatches = [...currentMatches, ...upcomingMatches];
    const uniqueMatches = Array.from(
      new Map(allMatches.map(m => [m.id, m])).values()
    );
    
    console.log(`[CricAPI] Total unique matches: ${uniqueMatches.length}`);
    return uniqueMatches;
  } catch (error) {
    console.error("[CricAPI] Error fetching matches:", error);
    return [];
  }
}

/**
 * Fetch squad for a specific match
 * @param matchId - The match ID
 */
export async function getMatchSquad(matchId: string): Promise<MatchSquad | null> {
  try {
    const url = `${BASE_URL}/match_squad?apikey=${CRIC_API_KEY}&id=${matchId}`;
    
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`CricAPI squad error: ${response.status} ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    
    if (data.status === "success" && data.data) {
      return data.data;
    }

    return null;
  } catch (error) {
    console.error("Error fetching match squad:", error);
    return null;
  }
}
