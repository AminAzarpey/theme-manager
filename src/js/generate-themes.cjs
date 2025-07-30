const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "../../");
const config = require("../../themes.config.json");

const outputDir = path.join(projectRoot, "src", "scss", "generated");

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

function generateSCSS(theme, palette) {
    return `
// Load theme and palette
@use "../theme-${theme.name}" as theme;
@use "../palette-${palette.name}" as palette;
@use "../mixins/theme" as *;
@import "../../../node_modules/bootstrap/scss/functions";

// Set required Bootstrap variables
$theme-colors: palette.$theme-colors;
$theme-colors-rgb: map-loop($theme-colors, to-rgb, "$value");

$body-bg: theme.$theme-${theme.name}-bg;
$body-color: theme.$theme-${theme.name}-text;

// Import Bootstrap parts
@import "../../../node_modules/bootstrap/scss/variables";
@import "../../../node_modules/bootstrap/scss/variables-dark";
@import "../../../node_modules/bootstrap/scss/maps";
@import "../../../node_modules/bootstrap/scss/mixins";
@import "../../../node_modules/bootstrap/scss/root";
@import "../../../node_modules/bootstrap/scss/utilities";
@import "../../../node_modules/bootstrap/scss/reboot";
@import "../../../node_modules/bootstrap/scss/type";
@import "../../../node_modules/bootstrap/scss/buttons";
@import "../../../node_modules/bootstrap/scss/card";
@import "../../../node_modules/bootstrap/scss/forms";
@import "../../../node_modules/bootstrap/scss/utilities/api";
@import "../../../node_modules/bootstrap/scss/alert";
@import "../../../node_modules/bootstrap/scss/bootstrap";

// Generate theme class
@include bootstrap-theme("theme-${theme.name}", $theme-colors, $body-bg, $body-color);
`;
}

// generate all combinations
config.themes.forEach((theme) => {
    config.palettes.forEach((palette) => {
        const filename = `theme-${theme.name}.${palette.name}.ltr.scss`;
        const filepath = path.join(outputDir, filename);
        const content = generateSCSS(theme, palette);
        fs.writeFileSync(filepath, content);
        console.log("✅ Created:", filename);
    });
});
