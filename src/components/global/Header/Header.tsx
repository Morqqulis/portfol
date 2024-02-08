import Link from "next/link";
import Burger from "./Burger";
import styles from "./Header.module.css";
const Header = () => {
	return (
		<header
			className={
				"header min-h-[60px] relative before:absolute before:h-[1px] before:w-[120%] before:bg-[#1E2D3D] before:bottom-0 before:-left-[10%] before:-z-10 pr-[18px] sm:pr-0"
			}>
			<nav className='flex justify-between items-center text-[#607B96] h-full'>
				<div className='flex items-center'>
					<Link
						className='logo pl-6 min-w-[312px] mmd:min-w-fit mmd:px-3 hover:text-white duration-500 py-[17px] block'
						href='/'>
						dmitriy-isgandarov
					</Link>

					<ul
						className={`nav-menu ${styles.navMenu} sm:text-[#607B96] text-white sm:flex sm:items-center sm:static w-full duration-500 absolute -right-[400%] top-[60px] bg-[#011627]  sm:min-h-fit sm:bg-inherit ssm:group-[.menu-opened]:right-0`}>
						<li>
							<Link
								className='px-8 border mmd:px-5 hover:text-white duration-500 border-border-color block py-[17px]'
								href={"#"}>
								_hello
							</Link>
						</li>
						<li>
							<Link
								className='px-8 border mmd:px-5 hover:text-white duration-500 border-border-color block py-[17px]'
								href={"#"}>
								_about-me
							</Link>
						</li>
						<li>
							<Link
								className='px-8 border mmd:px-5 hover:text-white duration-500 border-border-color block py-[17px]'
								href={"#"}>
								_projects
							</Link>
						</li>
						<li className='sm:hidden'>
							<Link
								className='px-8 border mmd:px-5 hover:text-white duration-500 border-border-color py-[17px] block'
								href={"#"}>
								_contact-me
							</Link>
						</li>
					</ul>
				</div>
				<Link
					className='hidden sm:block px-8 border mmd:px-5 hover:text-white duration-500 border-border-color py-[17px]'
					href={"#"}>
					_contact-me
				</Link>
				<Burger />
			</nav>
		</header>
	);
};
export default Header;
