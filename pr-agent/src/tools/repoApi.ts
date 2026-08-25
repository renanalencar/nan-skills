export type PullRequestData = {
    id: string;
    title: string;
    description: string;
    author: string;
    baseBranch: string;
    headBranch: string;
    labels: string[];
    linkedIssues: string[];
};

export async function getPullRequestById(prId: string): Promise<PullRequestData> {
    return {
        id: prId,
        title: "Exemplo de PR",
        description: "PR de exemplo para o agente local.",
        author: "local-user",
        baseBranch: "main",
        headBranch: "feature/example",
        labels: ["backend", "review-needed"],
        linkedIssues: ["#1"]
    };
}