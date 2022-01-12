module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: `#FF7979`,
        green: `#38CC8B`,
        blue: {
          DEFAULT: `#5E54A4`,
          dark: `#3D3B48`
        } ,
        black: `#3D3B48`,
      },

      boxShadow: {
        DEFAULT: '0px 8px 0px rgba(0, 0, 0, 0.14688)',
      }
    }
  },
  plugins: [],
}
