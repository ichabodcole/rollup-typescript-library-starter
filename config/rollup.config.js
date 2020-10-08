import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import progress from "rollup-plugin-progress";
import { terser } from "rollup-plugin-terser";
import { eslint } from "rollup-plugin-eslint";
import sourcemaps from "rollup-plugin-sourcemaps";
import commonjs from "@rollup/plugin-commonjs";
import ttypescript from "ttypescript";

const plugins = [
  resolve(),
  commonjs(),
  eslint(),
  typescript({
    typescript: ttypescript,
    useTsconfigDeclarationDir: true,
  }),
  progress(),
  sourcemaps(),
];

const outDir = "dist";
const outPath = `${outDir}/index`;

export default [
  {
    input: "src/index.ts",
    output: {
      name: "typescriptRollupLibraryStarter",
      file: `${outPath}.umd.js`,
      format: "umd",
      sourcemap: true,
    },
    plugins: [...plugins, terser()],
  },
  {
    input: "src/index.ts",
    plugins,
    output: { file: `${outPath}.esm.js`, format: "es" },
  },
];
