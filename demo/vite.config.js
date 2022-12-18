// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// eslint-disable-next-line no-undef
const codespaceName = process.env['CODESPACE_NAME']

/**
 * yarn demo --host 0.0.0.0 --port 24678
 */
const server = {}
if (codespaceName) {
  const hmrPort = 24678
  // https://vitejs.dev/config/#server-hmr
  server.hmr = {
    host: `${codespaceName}-${hmrPort}.githubpreview.dev`,
    port: hmrPort,
    clientPort: 443,
  }
}


export default defineConfig({
  plugins: [react()],
  server,
});
