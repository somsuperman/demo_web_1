module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: '#1D0A34',
      },
      fontSize: {
        'xl': '1.35rem',
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
    },
    fontFamily: {
      sans: ["Baloo", "sans-serif"],
      permanent: ["Permanent Marker"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
