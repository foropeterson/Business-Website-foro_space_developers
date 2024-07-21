import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const myPlugin = () => {
  return {
    name: 'my-plugin',
    configureServer(server) {
      server.httpServer.once('listening', () => {
        console.log('Happy Hacking, 🫠 🫠 😴\n Github https://github.com/jasurhaydarovcode');
      });
    },
  };
};

export default defineConfig({
  plugins: [react(), myPlugin()],
  server: {
    port: 8080,
    open: true,
  },
});
