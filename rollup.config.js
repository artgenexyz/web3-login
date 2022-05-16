import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import autoprefixer from 'autoprefixer';

import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';


import pkg from './package.json';

const INPUT_FILE_PATH = 'src/package/index.tsx';
const OUTPUT_NAME = 'Example';

const GLOBALS = {
    react: 'React',
    'react-dom': 'ReactDOM',
    'prop-types': 'PropTypes',

    ...pkg.devDependencies,
};

const PLUGINS = [
    postcss({
        extract: true,
        plugins: [
            autoprefixer,
        ],
    }),

    peerDepsExternal(),
    typescript({
        useTsconfigDeclarationDir: true,
        tsconfigOverride: {
            include: ["src/package"],
            exclude: ['**/*.stories.*'],
        },
    }),
    json(),

    babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
    }),
    resolve({
        browser: true,
        resolveOnly: [
            /^(?!react$)/,
            /^(?!react-dom$)/,
            /^(?!prop-types)/,
        ],
    }),
    commonjs(),
    filesize(),
];

const EXTERNAL = [
    'react',
    'react-dom',
    'prop-types',
];

// https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
const CJS_AND_ES_EXTERNALS = EXTERNAL.concat(/@babel\/runtime/);

const OUTPUT_DATA = [
    // {
    //     file: pkg.browser,
    //     format: 'umd',
    // },
    {
        file: pkg.main,
        format: 'cjs',
    },
    {
        file: pkg.module,
        format: 'es',
    },
];

const config = OUTPUT_DATA.map(({ file, format }) => ({
    input: INPUT_FILE_PATH,
    inlineDynamicImports: true,
    output: {
        file,
        format,
        name: OUTPUT_NAME,
        globals: GLOBALS,
        // sourcemap: true,
    },
    external: ['cjs', 'es'].includes(format) ? CJS_AND_ES_EXTERNALS : EXTERNAL,
    plugins: PLUGINS,
}));

export default config;
