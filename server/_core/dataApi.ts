// Data API removed - not implemented for standalone deployment
// For external data integration, use specific API providers directly

export type DataApiCallOptions = {
  query?: Record<string, unknown>;
  body?: Record<string, unknown>;
  pathParams?: Record<string, unknown>;
  formData?: Record<string, unknown>;
};

export async function callDataApi(
  apiId: string,
  options: DataApiCallOptions = {}
): Promise<unknown> {
  throw new Error("Data API not implemented. Please configure external API providers directly.");
}
