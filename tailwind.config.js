/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				jakarta: [
					"Plus Jakarta Sans",
					"Segoe UI",
					"Tahoma",
					"Geneva",
					"Verdana",
					"sans-serif",
				],
			},
			colors: {
				primary: {
					50: "#f4f5f4",
					100: "#e4e8e3",
					200: "#c9d1c9",
					300: "#a4b1a5",
					400: "#7a8d7c",
					500: "#677d6a",
					600: "#455648",
					700: "#37453a",
					800: "#2d382f",
					900: "#262e28",
					950: "#151916",
				},
				secondary: {
					50: "#faf7f2",
					100: "#f3ede1",
					200: "#e7d8c1",
					300: "#d6bd98",
					400: "#c69e71",
					500: "#ba8755",
					600: "#ac734a",
					700: "#8f5d3f",
					800: "#744c38",
					900: "#5e3f30",
					950: "#321f18",
				},
			},
		},
	},
	plugins: [],
};
