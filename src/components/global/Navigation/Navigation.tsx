'use client';
import { usePathname } from 'next/navigation';
import Burger from '../Burger/Burger';
import styles from './Navigation.module.scss';
import MyLink from '../MyLink/MyLink';
import navigationData from '@/utils/navigationData';

const Navigation: React.FC = (): JSX.Element => {
	const pathname = usePathname();

	return (
		<nav className='flex justify-between items-center text-[#607B96] h-full'>
			<div className='flex items-center'>
				<MyLink
					className={
						'logo pl-6 min-w-[312px] mmd:min-w-[250px] mmd:px-3 hover:text-white duration-500 py-[17px] block z-20'
					}
					href='/'
					text='dmitriy-isgandarov'
				/>

				<ul
					className={`nav-menu ${styles.navMenu} sm:text-[#607B96] text-white sm:flex sm:items-center sm:static w-full ease-superBezier duration-500 transition-all absolute -right-[400%] top-[60px] bg-[#011627] sm:min-h-fit sm:bg-inherit ssm:group-[.menu-opened]:right-0`}>
					{navigationData.map((navigationItem) => (
						<li className='sm:last:hidden' key={navigationItem.id}>
							<MyLink
								className={`px-8 border mmd:px-5 hover:text-white duration-500 border-border-color block py-[17px] ${
									pathname === navigationItem.href ? 'border-b-primary-button text-white' : ''
								}`}
								href={navigationItem.href}
								text={navigationItem.title}
								ariaLabel={navigationItem.ariaLabel}
							/>
						</li>
					))}
				</ul>
			</div>
			<MyLink
				className={`hidden sm:block px-8 border mmd:px-5 hover:text-white duration-500 border-border-color py-[17px] ${
					pathname === navigationData[3].href ? 'border-b-primary-button text-white' : ''
				}`}
				href={`${navigationData[3].href}`}
				text={navigationData[3].title}
				ariaLabel={navigationData[3].ariaLabel}
			/>
			<Burger />
		</nav>
	);
};
export default Navigation;
