/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
      extend: {
        animation: {
          shimmer: "shimmer 2s linear infinite",
          "fade-in": "fadeIn 0.5s ease-out forwards",
          "bounce-slow": "bounce 3s infinite",
        },
        keyframes: {
          shimmer: {
            from: {
              backgroundPosition: "0 0",
            },
            to: {
              backgroundPosition: "-200% 0",
            },
          },
          fadeIn: {
            from: {
              opacity: "0",
              transform: "translateY(10px)",
            },
            to: {
              opacity: "1",
              transform: "translateY(0)",
            },
          },
        },
        colors: {
          "vcode-primary": "#00d9ff",
          "vcode-secondary": "#a855f7",
          "vcode-accent": "#ec4899",
        },
      },
    },
    plugins: [],
  };
  