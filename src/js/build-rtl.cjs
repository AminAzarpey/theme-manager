const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const distDir = path.resolve(__dirname, "../../dist");
const rtlcssBin = path.resolve(__dirname, "../../node_modules/.bin/rtlcss");

fs.readdirSync(distDir)
    .filter((file) => file.endsWith(".ltr.css"))
    .forEach((file) => {
        const base = file.replace(".ltr.css", "");
        const input = path.join(distDir, file);
        const output = path.join(distDir, `${base}.rtl.css`);
        console.log("🔁 Generating RTL:", output);

        try {
            const command = `"${rtlcssBin}" "${input}" "${output}"`;
            execSync(command, { stdio: "inherit" });
        } catch (error) {
            console.error(`❌ RTL generation failed for: ${input}`);
            console.error(error.message);
        }
    });
