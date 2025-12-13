import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import image from '@rollup/plugin-image';
import { readFileSync, copyFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));

// Copy CSS file to dist after build
const copyCSS = {
  name: 'copy-css',
  writeBundle() {
    const distDir = 'dist';
    try {
      mkdirSync(distDir, { recursive: true });
      copyFileSync('src/index.css', 'dist/index.css');
      console.log('✓ Copied index.css to dist/');
    } catch (error) {
      console.error('Error copying CSS:', error);
    }
  },
};

export default {
  input: 'src/index.ts',
  onwarn(warning, warn) {
    // Suppress circular dependency warnings for now
    if (warning.code === 'CIRCULAR_DEPENDENCY') {
      return;
    }
    warn(warning);
  },
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: [
    ...Object.keys(pkg.peerDependencies || {}),
    ...Object.keys(pkg.dependencies || {}),
    'react/jsx-runtime',
  ],
  plugins: [
    image(),
    resolve({
      preferBuiltins: false,
      browser: true,
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.build.json',
      declaration: true,
      declarationDir: 'dist',
      rootDir: 'src',
    }),
    copyCSS,
  ],
};

