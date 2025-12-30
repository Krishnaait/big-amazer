// LLM service removed - not implemented for standalone deployment
// For LLM integration, use external services like OpenAI, Anthropic, or Hugging Face

export type Message = {
  role: "system" | "user" | "assistant" | "tool" | "function";
  content: string | Array<{
    type: "text" | "image_url" | "file_url";
    text?: string;
    image_url?: { url: string; detail?: "auto" | "low" | "high" };
    file_url?: { url: string; mime_type?: string };
  }>;
};

export type Tool = {
  type: "function";
  function: {
    name: string;
    description?: string;
    parameters?: Record<string, unknown>;
  };
};

export type InvokeParams = {
  messages: Message[];
  tools?: Tool[];
  tool_choice?: "none" | "auto" | "required" | { type: "function"; function: { name: string } };
  response_format?: {
    type: "json_schema";
    json_schema: {
      name: string;
      strict: boolean;
      schema: Record<string, unknown>;
    };
  };
};

export type InvokeResult = {
  choices: Array<{
    message: {
      content: string;
      tool_calls?: Array<{
        id: string;
        type: "function";
        function: {
          name: string;
          arguments: string;
        };
      }>;
    };
  }>;
};

export async function invokeLLM(params: InvokeParams): Promise<InvokeResult> {
  throw new Error("LLM service not implemented. Please configure an external LLM provider like OpenAI, Anthropic, or Hugging Face.");
}
