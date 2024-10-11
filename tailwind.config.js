module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // Adicione esta linha
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // Adicione esta linha
  ],
}