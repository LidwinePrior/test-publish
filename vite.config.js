import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


export default defineConfig({
  plugins: [react()],
  root: './', // Définit la racine du projet
  build: {
    outDir: 'dist', // Le répertoire de sortie pour les fichiers
    input:'./index.html'  },
});

