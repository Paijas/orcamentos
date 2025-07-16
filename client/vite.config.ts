import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import tailwindcss from '@tailwindcss/vite' // Garantir que está importado
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({

      registerType: 'autoUpdate', // Mantém a atualização automática
      injectRegister: 'auto', // MUDEI: Deixa o plugin injetar o registro do SW. Mais fácil!

      // --- Manifesto do PWA (Atualizado!) ---
      manifest: {
        name: 'Budgify - Gestor de Orçamentos', // NOME COMPLETO ATUALIZADO
        short_name: 'Budgify',                 // NOME CURTO ATUALIZADO
        description: 'Crie e gerencie seus orçamentos de forma fácil e rápida com Budgify.', // DESCRIÇÃO ATUALIZADA
        theme_color: '#0d47a1', // ADICIONEI: Cor tema (Ex: um azul escuro - ajuste para sua marca)
        background_color: '#ffffff', // Mantido: Cor de fundo (splash screen)
        start_url: '/', // ADICIONEI: Página inicial
        display: 'standalone', // ADICIONEI: Para abrir como app
        scope: '/', // ADICIONEI: Escopo do PWA
        icons: [ // ADICIONEI: Ícones - ESSENCIAL!
          {
            src: '/icons/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: '/icons/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: '/icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: '/icons/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: '/icons/icon-152x152.png',
            sizes: '152x152',
            type: 'image/png',
          },
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable' // Ícone 'maskable' é importante
          },
          {
            src: '/icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },

      // --- Configuração do Workbox (Service Worker) ---
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}'], // ADICIONEI woff2 (fontes)
        cleanupOutdatedCaches: true, // Mantido: Limpa caches antigos
        clientsClaim: true, // Mantido: SW assume controle rápido
        skipWaiting: true, // ADICIONEI: SW atualiza sem esperar o usuário fechar abas
      },

      // --- Geração de Ícones Automática (pwa-assets-generator) ---
      // pwaAssets: { // Mantive comentado - Se quiser usar, descomente e configure
      //   disabled: false,
      //   config: true, // Precisa instalar @vite-pwa/assets-generator
      // },

      // --- Opções de Desenvolvimento ---
      devOptions: {
        enabled: true, // MUDEI: Habilita SW em DEV para testes (lembre-se dos caveats de cache!)
        navigateFallback: 'index.html',
        suppressWarnings: false, // MUDEI: Veja os avisos durante o dev, ajuda a pegar erros
        type: 'module',
      },
    }),
    tailwindcss(), // Mantido
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})