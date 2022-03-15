import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-node-polyfills';

// this override is needed because Module format cjs does not support top-level await
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package.json');

const globals = {
    ...packageJson.devDependencies,
};

const config = {
    input: 'src/package/index.tsx',
    inlineDynamicImports: true,
    output: [
        {
            file: packageJson.main,
            format: 'cjs', // commonJS
            sourcemap: true,
        },
        {
            file: packageJson.module,
            format: 'esm', // ES Modules
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve({ preferBuiltins: true }),
        commonjs(),
        typescript({
            useTsconfigDeclarationDir: true,
            tsconfigOverride: {
                include: ["src/package"],
                exclude: ['**/*.stories.*'],
            },
        }),
        postcss({
            plugins: [autoprefixer()],
            sourceMap: true,
            extract: true
        }),
        json(),
        commonjs({
            exclude: 'node_modules',
            ignoreGlobal: true,
        }),
        nodePolyfills()
    ],
    external: Object.keys(globals),
};

export default config;

// Other useful plugins you might want to add are:
// @rollup/plugin-images - import image files into your components
// @rollup/plugin-json - import JSON files into your components
// rollup-plugin-terser - minify the Rollup bundle
