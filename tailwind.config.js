/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f7ff",
          100: "#e6ecff",
          200: "#c9d7ff",
          300: "#9cb8ff",
          400: "#688dff",
          500: "#4465f2",
          600: "#3249d1",
          700: "#2839aa",
          800: "#273487",
          900: "#25306c"
        }
      },
      boxShadow: {
        soft: "0 20px 45px rgba(15, 23, 42, 0.18)"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at top left, rgba(68, 101, 242, 0.22), transparent 35%), radial-gradient(circle at bottom right, rgba(16, 185, 129, 0.16), transparent 35%)"
      }
    }
  },
  plugins: []
};
