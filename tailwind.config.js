/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "azure-radiance": {
                    DEFAULT: "#166064",
                    50: "#57D3DA",
                    100: "#47CFD6",
                    200: "#2CC0C8",
                    300: "#25A0A7",
                    400: "#1D8085",
                    500: "#166064",
                    600: "#0C3436",
                    700: "#020808",
                    800: "#000000",
                    900: "#000000",
                },
                buttercup: {
                    DEFAULT: "#F59E0B",
                    50: "#FCE4BB",
                    100: "#FBDCA8",
                    200: "#FACD81",
                    300: "#F8BD59",
                    400: "#F7AE32",
                    500: "#F59E0B",
                    600: "#C07C08",
                    700: "#8A5906",
                    800: "#543603",
                    900: "#1E1401",
                },
                rose: {
                    DEFAULT: "#B31942",
                    50: "#F5B7C8",
                    100: "#F3A6BA",
                    200: "#EE829E",
                    300: "#E95E83",
                    400: "#E33A67",
                    500: "#D71E4F",
                    600: "#B31942",
                    700: "#821230",
                    800: "#510B1E",
                    900: "#1F040C",
                },
            },
        },
    },
    plugins: [],
};
