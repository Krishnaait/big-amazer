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
 * Fetch all matches from CricAPI
 * Uses /currentMatches endpoint to get live and recent matches
 * Returns matches with 60-second cache
 */
export async function getMatches(): Promise<Match[]> {
  try {
    // Use /currentMatches endpoint for live and recent matches
    const url = `${BASE_URL}/currentMatches?apikey=${CRIC_API_KEY}&offset=0`;
    
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`CricAPI error: ${response.status} ${response.statusText}`);
      return [];
    }

    const data = await response.json();
    
    if (data.status === "success" && Array.isArray(data.data)) {
      return data.data;
    }

    return [];
  } catch (error) {
    console.error("Error fetching matches:", error);
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
