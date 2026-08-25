import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function runGitCommand(
    args: string[],
    cwd: string = process.cwd()
): Promise<string> {
    const command = `git ${args.join(" ")}`;
    const { stdout } = await execAsync(command, { cwd });
    return stdout;
}

export async function getBranchDiff(
    baseBranch: string,
    headBranch: string,
    cwd: string = process.cwd()
): Promise<string> {
    return runGitCommand(["diff", `${baseBranch}...${headBranch}`], cwd);
}