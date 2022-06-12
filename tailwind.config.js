module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        DarkBlueIntroAndEmail: "hsl(217, 28%, 15%)",
        DarkBlueMainBackground: "hsl(218, 28%, 13%)",
        DarkBlueFooterBackground: "hsl(216, 53%, 9%)",
        DarkBlueTestimonialsBackground: "hsl(219, 30%, 18%)",
        CyanCall: "hsl(176, 68%, 64%)",
        BlueCall: "hsl(198, 60%, 50%)",
        LightRed: "hsl(0, 100%, 63%)",
        whiteColor: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        Raleway: "'Raleway',serif",
        OpenSans: "'Open Sans', monospace",
      },
      backgroundImage: {
        quotes: "url('images/bg-quotes.png')",
        DesktopBg: "url('images/bg-curvy-desktop.svg')",
        MobileBg: "url('images/bg-curvy-mobile.svg')",
      },
    },
  },
  plugins: [],
};
