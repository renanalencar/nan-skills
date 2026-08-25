import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export type TestResult = {
    success: boolean;
    output: string;
};

export async function runTests(command: string = "npm test"): Promise<TestResult> {
    try {
        const { stdout, stderr } = await execAsync(command);
        return {
            success: true,
            output: `${stdout}${stderr}`
        };
    } catch (error: any) {
        return {
            success: false,
            output: `${error?.stdout || ""}${error?.stderr || error?.message || ""}`
        };
    }
}