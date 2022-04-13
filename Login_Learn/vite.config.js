import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@honkhonk/vite-plugin-svgr'
import svgrPlugin from 'vite-plugin-svgr'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgrPlugin({
    svgrOptions: {
      icon: true,
      // ...svgr options (https://react-svgr.com/docs/options/)
    },
  }), svgr() , react()]
})

