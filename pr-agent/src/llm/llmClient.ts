// src/tools/llmClient.ts

import fs from "fs";
import path from "path";

/**
 * Tipos compartilhados entre DecisionMaker e os providers.
 */
export type LLMReviewInput = {
    context: unknown;
    diffSummary: unknown;
    qualityReport: unknown;
    rules: Record<string, unknown>;
};

export type LLMReviewOutput = {
    status?: "approve" | "request_changes" | "split_pr" | "needs_manual_review";
    comments?: string[];
};

/**
 * Configuração de LLM carregada do agent.config.json.
 */
type LLMConfig = {
    provider: "openai" | "ollama";
    model: string;
    ollamaModel?: string;
    timeoutMs?: number;
};

function loadLLMConfig(): LLMConfig {
    const configPath = path.join(process.cwd(), "config", "agent.config.json");
    const raw = fs.readFileSync(configPath, "utf-8");
    const json = JSON.parse(raw);

    return json.llm as LLMConfig;
}

/**
 * Interface comum para qualquer provider.
 */
interface LLMProvider {
    review(input: LLMReviewInput): Promise<LLMReviewOutput>;
}

/**
 * Provider OpenAI (placeholder – você integra o SDK real depois).
 */
class OpenAIProvider implements LLMProvider {
    private readonly model: string;
    private readonly timeoutMs: number;

    constructor(config: LLMConfig) {
        this.model = config.model;
        this.timeoutMs = config.timeoutMs ?? 30000;
    }

    async review(input: LLMReviewInput): Promise<LLMReviewOutput> {
        // TODO: integrar com SDK da OpenAI (por exemplo, openai.responses.create)
        // Aqui, retornamos uma resposta mockada, mas já no “estilo” da OpenAI.

        return {
            status: "needs_manual_review",
            comments: [
                `[OpenAI:${this.model}] LLM ainda não configurado. Esta é uma resposta mock.`,
                "Contexto, diff e métricas foram recebidos corretamente pelo provider OpenAI."
            ]
        };
    }
}

/**
 * Provider Ollama (Local) – usando HTTP para um endpoint local.
 */
class OllamaProvider implements LLMProvider {
    private readonly model: string;
    private readonly timeoutMs: number;

    constructor(config: LLMConfig) {
        this.model = config.ollamaModel || "llama3.1";
        this.timeoutMs = config.timeoutMs ?? 30000;
    }

    async review(input: LLMReviewInput): Promise<LLMReviewOutput> {
        // TODO: integrar com a API HTTP do Ollama (POST /api/chat ou /api/generate).
        // Exemplo: fetch("http://localhost:11434/api/chat", { ... })

        return {
            status: "needs_manual_review",
            comments: [
                `[Ollama:${this.model}] LLM local ainda não configurado. Esta é uma resposta mock.`,
                "Contexto, diff e métricas foram recebidos corretamente pelo provider Ollama."
            ]
        };
    }
}

/**
 * Factory: escolhe o provider com base na configuração.
 */
function createProvider(config: LLMConfig): LLMProvider {
    if (config.provider === "openai") {
        return new OpenAIProvider(config);
    }

    if (config.provider === "ollama") {
        return new OllamaProvider(config);
    }

    // Fallback defensivo.
    return new OpenAIProvider(config);
}

/**
 * Função única usada pelo agente para falar com LLM,
 * independente de qual provider está por trás.
 */
export async function askLLM(input: LLMReviewInput): Promise<LLMReviewOutput> {
    const config = loadLLMConfig();
    const provider = createProvider(config);

    return provider.review(input);
}