import { defineBuildConfig } from "unbuild"

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

    externals: ["react", "react-dom"],

})
