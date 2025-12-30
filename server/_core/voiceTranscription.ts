// Voice transcription functions removed - not implemented for standalone deployment
// For voice transcription, use external services like OpenAI Whisper, Google Cloud Speech-to-Text, or AssemblyAI

export type TranscriptionResult = {
  text?: string;
  language?: string;
  segments?: Array<{
    id: number;
    seek: number;
    start: number;
    end: number;
    text: string;
    tokens: number[];
    temperature: number;
    avg_logprob: number;
    compression_ratio: number;
    no_speech_prob: number;
  }>;
  error?: string;
  code?: string;
  details?: string;
};

export async function transcribeAudio(input: {
  audioUrl: string;
  language?: string;
  prompt?: string;
}): Promise<TranscriptionResult> {
  throw new Error("Voice transcription not implemented. Please configure an external transcription service.");
}
