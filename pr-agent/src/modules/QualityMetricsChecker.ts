import type { PRContext } from "./PRContextAnalyzer";
import type { DiffSummary } from "./DiffAnalyzer";
import { runGitCommand } from "../tools/gitTools";

export type QualityReport = {
    totalChangedLines: number;
    exceedsLineLimit: boolean;
    exceedsFileLimit: boolean;
    cyclomaticComplexity: Record<string, number>;
    smells: string[];
    syntaxIssues: string[];
    notes: string[];
};

const LINE_LIMIT = 400;
const FILE_LIMIT = 10;

function extractFilesFromDiff(rawDiff: string): string[] {
    const files = new Set<string>();
    for (const line of rawDiff.split("\n")) {
        if (line.startsWith("+++ b/")) files.add(line.replace("+++ b/", "").trim());
    }
    return Array.from(files);
}

function estimateCyclomaticComplexity(source: string): number {
    const matches = source.match(/\b(if|for|while|case|catch|&&|\|\||\?)\b/g);
    return 1 + (matches ? matches.length : 0);
}

export async function checkQualityMetrics(
    _prContext: PRContext,
    diffSummary: DiffSummary,
    cwd: string = process.cwd()
): Promise<QualityReport> {
    const totalChangedLines = diffSummary.addedLines + diffSummary.removedLines;
    const exceedsLineLimit = totalChangedLines > LINE_LIMIT;
    const exceedsFileLimit = diffSummary.filesChanged > FILE_LIMIT;

    const files = extractFilesFromDiff(diffSummary.rawDiff);
    const cyclomaticComplexity: Record<string, number> = {};
    const smells: string[] = [];
    const syntaxIssues: string[] = [];
    const notes: string[] = [];

    for (const file of files) {
        try {
            const content = await runGitCommand(["show", `HEAD:${file}`], cwd);
            cyclomaticComplexity[file] = estimateCyclomaticComplexity(content);

            if (cyclomaticComplexity[file] >= 15) {
                smells.push(`Alta complexidade ciclomática estimada em ${file}`);
            }
        } catch {
            syntaxIssues.push(`Não foi possível ler ou validar o arquivo ${file}`);
        }
    }

    if (exceedsLineLimit) {
        notes.push(`A PR ultrapassa o limite de ${LINE_LIMIT} linhas modificadas.`);
    }

    if (exceedsFileLimit) {
        notes.push(`A PR ultrapassa o limite de ${FILE_LIMIT} arquivos alterados.`);
    }

    return {
        totalChangedLines,
        exceedsLineLimit,
        exceedsFileLimit,
        cyclomaticComplexity,
        smells,
        syntaxIssues,
        notes
    };
}