import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                404: './404.html',
                500: './50x.html'
            }
        }
    }
});
