module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      "es": "350px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      'xl': '1280px',
    },
    extend: {
      maxWidth:{
        "8xl": "1920px"
      },
    },    
  },
  plugins: [],
}
