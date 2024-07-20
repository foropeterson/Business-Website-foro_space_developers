import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const myPlugin = () => {
  return {
    name: 'my-plugin',
    configureServer(server) {
      server.httpServer.once('listening', () => {
        console.log('Happy Hacking');
      });
    },
  };
};

export default defineConfig({
  plugins: [react(), myPlugin()],
  server: {
    port: 16000,
    open: true,
  },
});
