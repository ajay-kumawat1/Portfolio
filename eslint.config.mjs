import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next"),
    {

        rules: {
            // Disable unescaped entities check for apostrophes and similar
            "react/no-unescaped-entities": "off",

            // Disable Next.js image element warning
            "@next/next/no-img-element": "off",

            // For React Hook exhaustive deps warning
            "react-hooks/exhaustive-deps": "off",

            // (Example: you already disabled this)
            "@typescript-eslint/no-explicit-any": "off"
        }

    }
];

export default eslintConfig;
