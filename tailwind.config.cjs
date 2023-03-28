module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
      },
      colors: {
        'smallgray': '#d9d9d9',
        'gradientFrom': '#746E6E',
        'gradientTo': '#D9D9D9',
        'iconYellow': '#FCD144',
        'buttonYellow':'#E7B810',
        'buttonPurple':'#9E1CB0',
        'buttonBlue':'#0049FF',
        'buttonRed':'#FF004D',
        'buttonGreen':'#21B727',
        'bg-card':'#42636E'
      },
      aspectRatio: {
        '4/5': '4/5',
      },
    }
  },
  plugins:[],
};
