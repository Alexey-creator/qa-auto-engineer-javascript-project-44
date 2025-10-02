import eslintJs from "@eslint/js";

export default [
  // include the @eslint/js recommended flat-config directly
  eslintJs.configs.recommended,
  {
    // ignore node_modules
    ignores: ["node_modules/**"],

    // use ESM and latest ECMAScript features and declare Node globals
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        // common Node globals (readonly)
        globalThis: "readonly",
        process: "readonly",
        Buffer: "readonly",
        setImmediate: "readonly",
        clearImmediate: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        console: "readonly",
      },
    },

    // project rules (customize as needed)
    rules: {},
  },
];
