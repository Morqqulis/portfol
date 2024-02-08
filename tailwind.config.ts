import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			ssm: { max: "767.99px" },
			mmd: { max: "991.99px" },
			llg: { max: "1199.99px" },
			xxl: { max: "1399.99px" },

			xs: "489.99px",
			mid: "575.99px",
			sm: "767.99px",
			md: "991.99px",
			lg: "1199.99px",
			xl: "1399.99px",
		},
		extend: {
			colors: {
				"border-color": "#1E2D3D",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
