/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: "#2A7DE1",
                secondary: "#27C498",
                accent: "#6C63FF",
                background: "#F7F9FC",
            }
        },
    },
    plugins: [],
}
