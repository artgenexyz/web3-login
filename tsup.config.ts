import { defineConfig } from "tsup"

import pkg from "./package.json"

export default defineConfig({
    entry: [
        "src/package/index.tsx"
    ],
    outDir: "build",
    format: [
        "esm",
        "cjs",
    ],
    loader: { '.png': 'dataurl', '.svg': 'dataurl' },
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    external: Object.keys(pkg.peerDependencies),
})