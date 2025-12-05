import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Use automatic JSX runtime for smaller bundles
      jsxRuntime: "automatic",
    }),
  ],
  base: "./",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    // Target modern browsers for smaller bundles
    target: "esnext",
    // CSS code splitting
    cssCodeSplit: true,
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          motion: ["framer-motion"],
          icons: ["lucide-react"],
        },
        // Optimize chunk file names
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Use esbuild for faster minification
    minify: "esbuild",
    // Reduce bundle size
    reportCompressedSize: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion", "lucide-react"],
    // Exclude large packages from pre-bundling
    exclude: [],
  },
  // Enable caching
  cacheDir: "node_modules/.vite",
  // Performance optimizations
  esbuild: {
    // Remove console and debugger in production
    drop: ["console", "debugger"],
    // Minify identifiers
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
  },
});
