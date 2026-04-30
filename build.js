import { execSync } from "node:child_process";
import { stdout } from "node:process";

const output = execSync("vp run build");
stdout.write(output);
