module.exports = {
  plugins: [require('daisyui')],
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  variants: {
    extend: {
      padding: ['first', 'last'],
    },
  },
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
  theme: {
    extend: {
      maxHeight: {
        initial: 'initial',
      },
    },
  },
};
