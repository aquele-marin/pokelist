/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                "spin-reverse": "spin 1s linear infinite reverse",
                "spin-slow": "spin 3s linear infinite",
                "spin-slow-reverse": "spin 3s linear infinite reverse",
            },
        },
    },
    darkMode: "class",
    plugins: [],
};
