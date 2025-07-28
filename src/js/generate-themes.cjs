// generate-themes.cjs

const fs = require("fs");
const path = require("path");
const projectRoot = path.resolve(__dirname, "../../");

const config = require("../../themes.config.json");
const outputDir = path.join(projectRoot, "src", "scss", "generated");

// اطمینان از وجود پوشه خروجی
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// قالب فایل خروجی SCSS
function generateSCSS(theme, palette) {
    return `
@use "../mixins" as *;
@import "node_modules/bootstrap/scss/bootstrap";
@include theme("theme-${theme.name}", ${theme.bg}, ${theme.text});
@include palette("${palette.name}", ${palette.primary});
`;
}

// تولید برای هر ترکیب theme + palette
config.themes.forEach(theme => {
    config.palettes.forEach(palette => {
        const filename = `theme-${theme.name}.${palette.name}.scss`;
        const filepath = path.join(outputDir, filename);
        fs.writeFileSync(filepath, generateSCSS(theme, palette));
        console.log("✅ Created:", filepath);
    });
});
