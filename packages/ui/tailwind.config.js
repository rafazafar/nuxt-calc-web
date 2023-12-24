module.exports = {
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        axa: {
          primary: "#00008f",
          "primary-focus": "#00004d",
          "primary-content": "#ededfd",

          secondary: "#4976ba",
          "secondary-focus": "#385785",
          "secondary-content": "#ebf1fa",

          accent: "#1cc54e",
          "accent-focus": "#41be88",
          "accent-content": "#161827",

          neutral: "#f5f5f5",
          "neutral-focus": "#e6e5e5",
          "neutral-content": "#212121",

          "base-100": "#ffffff",
          "base-200": "#f7fafd",
          "base-300": "#eaf0f6",
          "base-content": "#161827",

          info: "#67cba0",
          success: "#009485",
          warning: "#f0ff93",
          error: "#c91432",

          "--rounded-box": "0rem",
          "--rounded-btn": "0rem",
          "--rounded-badge": "0rem",

          "--animation-btn": "0",
          "--animation-input": "0",

          "--btn-text-case": "uppercase",
          "--navbar-padding": "0.5rem",
          "--border-btn": "1px",
        },
      },
    ],
  },
};
