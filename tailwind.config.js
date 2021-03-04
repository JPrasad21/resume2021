module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#1a3263',
      secondary1: '#f16821',
      secondary2: '#fab95b',
      outer: '#282c34',
      white: '#fff',
      black: '#000',
      purple: '#663399'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
