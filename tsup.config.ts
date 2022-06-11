import { defineConfig } from "tsup"

export default defineConfig({
    entry: [
        "src/package/index.tsx"
    ],
    outDir: "build",
    format: [
        "cjs",
        "esm"
    ],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    external: [ "react", "react-dom" ],
})