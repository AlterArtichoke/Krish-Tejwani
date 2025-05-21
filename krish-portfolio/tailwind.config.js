export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        handwriting: ['"Gloria Hallelujah"', 'cursive'],
      },
    },
  },
  theme: {
    extend: {
      rotate: {
        '-5': '-5deg',
        '3': '3deg',
        '-2': '-2deg',
      }
    }
  },
  plugins: [],
}