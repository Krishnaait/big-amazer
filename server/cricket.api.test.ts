import { describe, expect, it } from "vitest";

describe("CricAPI Integration", () => {
  it("should validate CRIC_API_KEY by fetching current matches", async () => {
    const CRIC_API_KEY = process.env.CRIC_API_KEY;
    
    expect(CRIC_API_KEY).toBeDefined();
    expect(CRIC_API_KEY).not.toBe("");
    
    const url = `https://api.cricapi.com/v1/currentMatches?apikey=${CRIC_API_KEY}&offset=0`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    // Check if API key is valid
    expect(response.ok).toBe(true);
    expect(data.status).toBe("success");
    expect(data.data).toBeDefined();
    expect(Array.isArray(data.data)).toBe(true);
  });
});
