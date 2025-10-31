import withMT from "@material-tailwind/react/utils/withMT"
import type { Config } from "tailwindcss"

export default withMT({
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#00ADEF',
        accentGold: '#FFD54F',
        bgLight: '#F7F9FA',
        bgDark: '#0F172A',
      },
    },
  },
} satisfies Config)