import type { PRContext } from "./PRContextAnalyzer";
import { getBranchDiff } from "../tools/gitTools";

export type DiffSummary = {
    rawDiff: string;
    filesChanged: number;
    addedLines: number;
    removedLines: number;
    modifiedFiles: string[];
};

export async function analyzeDiff(
    prContext: PRContext,
    cwd: string = process.cwd()
): Promise<DiffSummary> {
    const rawDiff = await getBranchDiff(prContext.baseBranch, prContext.headBranch, cwd);

    const lines = rawDiff.split("\n");
    const modifiedFiles = new Set<string>();
    let filesChanged = 0;
    let addedLines = 0;
    let removedLines = 0;

    for (const line of lines) {
        if (line.startsWith("+++ b/")) {
            const filePath = line.replace("+++ b/", "").trim();
            modifiedFiles.add(filePath);
            filesChanged++;
            continue;
        }

        if (line.startsWith("+") && !line.startsWith("+++")) {
            addedLines++;
            continue;
        }

        if (line.startsWith("-") && !line.startsWith("---")) {
            removedLines++;
            continue;
        }
    }

    return {
        rawDiff,
        filesChanged,
        addedLines,
        removedLines,
        modifiedFiles: Array.from(modifiedFiles)
    };
}