import type { PRContext } from "./PRContextAnalyzer";
import type { DiffSummary } from "./DiffAnalyzer";
import type { QualityReport } from "./QualityMetricsChecker";
import { askLLM } from "../tools/llmClient";

export type ReviewDecision = {
    status: "approve" | "request_changes" | "split_pr" | "needs_manual_review";
    comments: string[];
};

export async function makeDecision(
    context: PRContext,
    diffSummary: DiffSummary,
    qualityReport: QualityReport
): Promise<ReviewDecision> {
    const prompt = {
        context,
        diffSummary,
        qualityReport,
        rules: {
            maxChangedLines: 400,
            preferSmallPRs: true,
            considerFilesChanged: true
        }
    };

    const llmResponse = await askLLM(prompt);

    const comments =
        llmResponse.comments?.length > 0
            ? llmResponse.comments
            : [
                "Revisão concluída com base no contexto, diff e métricas de qualidade.",
                `Linhas modificadas: ${qualityReport.totalChangedLines}.`
            ];

    const status =
        qualityReport.exceedsLineLimit || qualityReport.exceedsFileLimit
            ? "split_pr"
            : llmResponse.status || "needs_manual_review";

    return {
        status,
        comments
    };
}