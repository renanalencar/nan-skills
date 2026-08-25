import { getPullRequestById } from "../tools/repoApi";

export type PRContext = {
    id: string;
    title: string;
    description: string;
    author: string;
    baseBranch: string;
    headBranch: string;
    labels: string[];
    linkedIssues: string[];
};

export async function analyzePRContext(prId: string): Promise<PRContext> {
    const pr = await getPullRequestById(prId);

    return {
        id: pr.id,
        title: pr.title,
        description: pr.description,
        author: pr.author,
        baseBranch: pr.baseBranch,
        headBranch: pr.headBranch,
        labels: pr.labels,
        linkedIssues: pr.linkedIssues
    };
}