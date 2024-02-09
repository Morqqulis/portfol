import { IMyLink } from "@/interfaces/interfaces";
import Link from "next/link";

/**
 * A strongly-typed component for rendering a link.
 * @param href - The URL the link should point to.
 * @param text - The text to display in the link.
 * @param className - The CSS class for the link.
 * @param ariaLabel - The ARIA label for the link.
 * @param props - Additional props for the Link component.
 * @returns A strongly-typed React component for rendering a link.
 */
const MyLink: React.FC<IMyLink> = ({ href, children, className, text, ariaLabel }: IMyLink): JSX.Element => {
	return (
		<Link className={`${className} duration-300 hover:text-accent-green`} aria-label={ariaLabel} href={href}>
			{text}
			{children}
		</Link>
	);
};

export default MyLink;
