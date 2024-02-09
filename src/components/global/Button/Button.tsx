// Define the props interface for the Button component

import { IButton } from "@/interfaces/interfaces";


// Button component with destructured props
const Button: React.FC<IButton> = ({ className, children, text, type, ariaLabel, buttonStyle }: IButton): JSX.Element => {
	return (
		// Button element with dynamic class, type, and ARIA label
		<button
			className={`${className} py-2.5 px-3.5 rounded-lg ${
				buttonStyle === "ghost"
					? "bg-transparent border border-white hover:border-ghost-hover text-white"
					: buttonStyle === "default"
					? "bg-default-button text-white hover:bg-default-button-hover"
					: "bg-primary-button text-primary-black hover:bg-primary-button-hover"
			}`}
			type={type}
			aria-label={ariaLabel}>
			{text}
			{children}
		</button>
	);
};
