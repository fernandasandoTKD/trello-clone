/** @type {import('tailwindcss').Config} */
module.exports = {
  // Coidgo para que todos los archivos tenga en contenido de Tailwind
  content:  ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

