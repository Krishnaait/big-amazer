// Image generation functions removed - not implemented for standalone deployment
// For image generation, use external services like OpenAI DALL-E, Replicate, or Stability AI

export type GenerateImageOptions = {
  prompt: string;
  originalImages?: Array<{
    url?: string;
    b64Json?: string;
    mimeType?: string;
  }>;
};

export type GenerateImageResponse = {
  url?: string;
};

export async function generateImage(
  options: GenerateImageOptions
): Promise<GenerateImageResponse> {
  throw new Error("Image generation not implemented. Please configure an external image generation service.");
}
