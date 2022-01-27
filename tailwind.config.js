const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      creamyWhite: "#E5E5E5",
      searchWhite: "#FBFAFF",
      iconDColor: "#554886",
      duidRed: "#F26675",
      duidPurple: "#554886",
    },
    extend: {
      width: {
        "88px": "88px",
      },
      margin: {
        "40px": "40px",
      },
    },
  },
  plugins: [],
};
