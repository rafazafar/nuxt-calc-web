module.exports = {
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        axa: {
          ...require("daisyui/src/theming/themes")["corporate"],
          primary: "blue",
          secondary: "teal",
        },
      },
    ],
  },
};
 