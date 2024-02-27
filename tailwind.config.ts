import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "marineblue": "hsl(213, 96%, 18%)",
        "purplishblue": "hsl(243, 100%, 62%)",
        "pastelblue": "hsl(228, 100%, 84%)",
        "lightblue": "hsl(206, 94%, 87%)",
        "strawberryred": "hsl(354, 84%, 57%)",

        "coolgray": "hsl(231, 11%, 63%)",
        "lightgray": "hsl(229, 24%, 87%)",
        "magnolia": "hsl(217, 100%, 97%)",
        "alabaster": "hsl(231, 100%, 99%)",
      }
    },
  },
  plugins: [],
};
export default config;
