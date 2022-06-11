import { defineBuildConfig } from "unbuild"
import pkg from "./package.json"

export default defineBuildConfig({

    entries: [
        './src/package/index',

        // {
        //     builder: 'mkdist',
        //     input: './src/package/components/',
        //     outDir: './build/components'
        // },
    ],

    // change outDir, default is 'dist'
    outDir: 'build',

    // generates .d.ts declaration file
    declaration: true,

    externals: Object.keys(pkg.peerDependencies),

})
