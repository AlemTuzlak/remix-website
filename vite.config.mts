import { defineConfig, splitVendorChunkPlugin } from "vite";
import { vitePlugin as remix } from "@remix-run/dev";
import tsconfigPaths from "vite-tsconfig-paths";
import arraybuffer from "vite-plugin-arraybuffer";
import { remixDevTools } from "remix-development-tools";
export default defineConfig({
  build: {
    sourcemap: true,
  },
  ssr: {
    noExternal: ["@docsearch/react"],
  },
  plugins: [
    remixDevTools(),
    tsconfigPaths(),
    splitVendorChunkPlugin(),
    arraybuffer(),
    remix({
      future: {},
    }),
  ],
});
