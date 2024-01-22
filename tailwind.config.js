/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts,tsx,jsx}"],
  theme: {
    extend: {
      "colors": {
        "dark": {
          "primary": "#1f2937",
          "secondary": "#2a3441",
          "tertiary": "#2a3441",
          "quaternary": "#30363d",
          "quinary": "#484f58",
          "senary": "#6e7681",
          "graphic": "#8b939e",
          "accent": "#58a6ff",
          "muted": "#c9d1d9",
          "text": "#f0f6fc"
        },
        "light": {
          "primary": "rgba(211,210,210,0.71)",
          "secondary": "#f8f9fa",
          "tertiary": "#e9ecef",
          "quaternary": "#dee2e6",
          "quinary": "#ced4da",
          "senary": "#adb5bd",
          "graphic": "#6c757d",
          "accent": "#495057",
          "muted": "#343a40",
          "text": "#212529"
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',

}

