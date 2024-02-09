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
				"primary-black": "#01080E",
				"primary-dark": "#011221",
				"primary-grey": "#011627",
				"secondary-grey": "#607B96",
				"secondary-green": "#3C9D93",
				"secondary-blue": "#4D5BCE",
				"accent-orange": "#FEA55F",
				"accent-green": "#43D9AD",
				"accent-red": "#E99287",
				"accent-pink": "#C98BDF",

				"primary-button": "#FEA55F",
				"primary-button-hover": "#FFAC6B",
				"default-button": "##1C2B3A",
				"default-button-hover": "#263B50",
				"border-color": "#1E2D3D",
			},
			backgroundImage: {
				"my-gradient":
					"linear-gradient(153.43deg, rgba(23, 85, 83, 0.7) 1.705%,rgba(67, 217, 173, 0.09) 81.819%)",
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			borderColor: {
				"ghost-hover": "rgba(255, 255, 255, 0.5)",
			},
			transitionTimingFunction: {
				superBezier: "cubic-bezier(.98,.33,.08,.66)",
			},
		},
	},
	plugins: [],
};
export default config;
