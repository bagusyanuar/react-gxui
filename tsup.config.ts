// tsup.config.ts
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],       // Entry utama
  format: ['esm', 'cjs'],        // Output dalam format ESM dan CommonJS
  dts: true,                     // Generate .d.ts (TypeScript typings)
  external: ['react', 'react-dom'], // Jangan bundle React
  target: 'es2018',
  clean: true,
})
