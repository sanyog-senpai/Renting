import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

    // For FlowBite
    "./node_modules/flowbite-react/lib/**/*.js,.ts,.tsx",
  ],
  theme: {
    extend: {
      fontSize: {
        display: ["var(--fs-display)", { lineHeight: "var(--lh-display)" }],
        h1: ["var(--fs-h1)", { lineHeight: "var(--lh-h1)" }],
        h2: ["var(--fs-h2)", { lineHeight: "var(--lh-h2)" }],
        h3: ["var(--fs-h3)", { lineHeight: "var(--lh-h3)" }],
        h4: ["var(--fs-h4)", { lineHeight: "var(--lh-h4)" }],
        h5: ["var(--fs-h5)", { lineHeight: "var(--lh-h5)" }],
        h6: ["var(--fs-h6)", { lineHeight: "var(--lh-h6)" }],
        "large-base": [
          "var(--fs-base-large)",
          { lineHeight: "var(--lh-base-large)" },
        ],
        base: ["var(--fs-base)", { lineHeight: "var(--lh-base)" }],
        footer: ["var(--fs-footer)", { lineHeight: "var(--lh-footer)" }],
      },
      colors: {
        "blue-50": "var(--blue-50)",
        "blue-75": "var(--blue-75)",
        "blue-100": "var(--blue-100)",
        "blue-125": "var(--blue-125)",
        "blue-150": "var(--blue-150)",

        "sky-50": "var(--sky-50)",
        "sky-75": "var(--sky-75)",
        "sky-100": "var(--sky-100)",
        "sky-125": "var(--sky-125)",
        "sky-150": "var(--sky-150)",

        "teal-50": "var(--teal-50)",
        "teal-75": "var(--teal-75)",
        "teal-100": "var(--teal-100)",
        "teal-125": "var(--teal-125)",
        "teal-150": "var(--teal-150)",

        "gray-100": "var(--gray-100)",

        "red-300": "var(--red-300)",
        "light-blue-300": "var(--light-blue-300)",

        'white': '#fff',
        'black': '#000',

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
          "xl": "1200px",
          "lg": "1000px",
        },
      },
      extend: {
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        screens: {
          xs: "450px",
          xxs: "350px",
        },
        width: {
          650: "650px"
        },
        maxWidth: {
          xl: "1000px"
        }
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};

export default config;
