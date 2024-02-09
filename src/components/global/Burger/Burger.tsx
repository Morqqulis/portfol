"use client";
import { useEffect, useState } from "react";

const Burger: React.FC = (): JSX.Element => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		const htmlElement: HTMLElement | null = document.querySelector("html");
		const resizeHandler = () => {
			if (window.innerWidth > 768) {
				setIsMenuOpen(false);
				htmlElement?.classList.remove("menu-opened");
			}
		};
		window.addEventListener("resize", resizeHandler);

		if (htmlElement) {
			if (isMenuOpen) {
				htmlElement.classList.add("menu-opened");
			} else {
				htmlElement.classList.remove("menu-opened");
			}
			return () => {
				htmlElement.classList.remove("menu-opened");
				removeEventListener("resize", resizeHandler);
			};
		}
	}, [isMenuOpen]);

	return (
		<button
			className='burger relative w-[18px] h-4 flex sm:hidden'
			onClick={toggleMenu}
			type='button'
			aria-label='Toggle menu'>
			<span className='h-0.5 w-full absolute block transition-transform duration-300 bg-[#607B96] group-[.menu-opened]:bg-[#FEA55F] top-0 group-[.menu-opened]:-rotate-45 group-[.menu-opened]:top-[50%]'></span>
			<span className='h-0.5 w-full absolute block transition-transform duration-300 bg-[#607B96] group-[.menu-opened]:bg-[#FEA55F] top-[45%] group-[.menu-opened]:scale-0'></span>
			<span className='h-0.5 w-full absolute block transition-transform duration-300 bg-[#607B96] group-[.menu-opened]:bg-[#FEA55F] bottom-0 group-[.menu-opened]:rotate-45 group-[.menu-opened]:top-[50%]'></span>
		</button>
	);
};
export default Burger;
