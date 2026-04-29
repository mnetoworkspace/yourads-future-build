import { createServer } from "vite";

const port = parseInt(process.env.PORT || "3000");

const server = await createServer({
  configFile: "vite.config.ts",
  server: {
    host: "0.0.0.0",
    port,
    allowedHosts: true,
  },
});

await server.listen();
server.printUrls();
