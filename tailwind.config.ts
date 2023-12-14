import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'blue': {
          'xx-light': '#91A4F9',
          'x-light': '#6F8BEF',
          'light': '#4D78E5',
          'DEFAULT': '#1665D8',
        },
        'green': {
          'xx-light': '#82E675',
          'x-light': '#68D265',
          'light': '#4EBE54',
          'DEFAULT': '#34AA44',
        },
        'violet': {
          'xx-light': '#82E675',
          'x-light': '#68D265',
          'light': '#4EBE54',
          'DEFAULT': '#6758F3',
        },
        'red': {
          'xx-light': '#F59D8D',
          'x-light': '#F3816D',
          'light': '#F1654D',
          'DEFAULT': '#E6492D'
        },
        'orange': {
          'xx-light': '#FEEB8F',
          'x-light': '#FCE06F',
          'light': '#FAC64F',
          'DEFAULT': '#F6AB2F'
        },
        'yellow': {
          'xx-light': '#FCFFB5',
          'x-light': '#FBEF95',
          'light': '#FBDF75',
          'DEFAULT': '#FACF55'
        },
        'main': {
          'xx-light': '#3E3F42',
          'x-light': '#3E3F42',
          'light': '#3E3F42',
          'DEFAULT': '#3E3F42',
        },
        'secondary': {
          'xx-light': '#6B6C6F',
          'x-light': '#6B6C6F',
          'light': '#6B6C6F',
          'DEFAULT': '#6B6C6F',
        },
        'gray': {
          'xx-light': '#BCBCBC',
          'x-light': '#BCBCBC',
          'light': '#BCBCBC',
          'DEFAULT': '#BCBCBC',
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Roboto Slab", "serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
    plugins: [],
  }
};

export default config
