import { analyzePRContext } from "./modules/PRContextAnalyzer";
import { analyzeDiff } from "./modules/DiffAnalyzer";
import { checkQualityMetrics } from "./modules/QualityMetricsChecker";
import { makeDecision } from "./modules/DecisionMaker";

async function main() {
    console.log("PR Agent iniciado.");

    const prId = process.env.PR_ID || "123";
    const cwd = process.cwd();

    const context = await analyzePRContext(prId);
    const diffSummary = await analyzeDiff(context, cwd);
    const qualityReport = await checkQualityMetrics(context, diffSummary, cwd);
    const decision = await makeDecision(context, diffSummary, qualityReport);

    console.log(JSON.stringify({ context, diffSummary, qualityReport, decision }, null, 2));
}

main().catch((err) => {
    console.error("Erro ao executar PR Agent:", err);
    process.exit(1);
});