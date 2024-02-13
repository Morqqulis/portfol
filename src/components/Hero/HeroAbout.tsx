import DropdownButton from '../Dropdowns/DropdownButton/DropdownButton';
import DropdownItem from '../Dropdowns/DropdownItem/DropdownItem';
import MainDropdownButton from '../Dropdowns/MainDropdownButton/MainDropdownButton';
import PageActions from '../PageActions/PageActions';
import MyLink from '../global/MyLink/MyLink';

const HeroAbout: React.FC = (): JSX.Element => {
	return (
		<section className='h-full flex'>
			<PageActions />
			<div className='border border-border-color border-t-0 text-secondary-grey ml-[75px] '>
				<MainDropdownButton content='personal-info'>
					<DropdownButton content='Bio' folderColor='#E99287'>
						<DropdownItem content='Test1' />
						<DropdownItem content='test2' />
						<DropdownItem content='test4' />
					</DropdownButton>
					<DropdownButton content='interests' folderColor='#43D9AD'>
						<DropdownItem content='highschool' />
					</DropdownButton>
					<DropdownButton content='education' folderColor='#3A49A4'>
						<DropdownItem content='high school' />
						<DropdownItem content='university' />
					</DropdownButton>
				</MainDropdownButton>
				<MainDropdownButton childrenClassName='pl-[14px]' content='contacts'>
					<MyLink
						className='flex items-center gap-2 group/emailLink'
						href={'mailto:morqqulis@gmail.com'}
						ariaLabel='email link'
						text='morqqulis@gmail.com'>
						<svg
							className='fill-secondary-grey -order-1 group-hover/emailLink:fill-accent-green duration-300'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							xmlnsXlink='http://www.w3.org/1999/xlink'>
							<defs>
								<clipPath id='clip72_1478'>
									<rect id='Frame' width='24' height='24' fill='white' fillOpacity='0' />
								</clipPath>
							</defs>
							<rect id='Frame' width='24' height='24' fillOpacity='0' fill='white' />
							<g clipPath='url(#clip72_1478)'>
								<path
									id='Vector'
									d='M3 3L21 3C21.2651 3 21.5195 3.10536 21.707 3.29289C21.8945 3.48043 22 3.73478 22 4L22 20C22 20.2652 21.8945 20.5196 21.707 20.7071C21.5195 20.8946 21.2651 21 21 21L3 21C2.73486 21 2.48047 20.8946 2.29297 20.7071C2.10547 20.5196 2 20.2652 2 20L2 4C2 3.73478 2.10547 3.48043 2.29297 3.29289C2.48047 3.10536 2.73486 3 3 3ZM12.0601 11.683L5.64795 6.238L4.35303 7.762L12.073 14.317L19.6541 7.757L18.3459 6.244L12.061 11.683L12.0601 11.683Z'
									fillOpacity='1.000000'
									fillRule='nonzero'
								/>
							</g>
						</svg>
					</MyLink>
					<MyLink
						className='flex items-center gap-2 group/telLink'
						href={'tel:+994558295885'}
						text='+994558295885'
						ariaLabel='email link'>
						<svg
							className='fill-secondary-grey order-[-1] group-hover/telLink:fill-accent-green duration-300'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							xmlnsXlink='http://www.w3.org/1999/xlink'>
							<defs>
								<clipPath id='clip72_1481'>
									<rect id='Frame' width='24' height='24' fill='white' fillOpacity='0' />
								</clipPath>
							</defs>
							<rect id='Frame' width='24' height='24' fillOpacity='0' />
							<g clipPath='url(#clip72_1481)'>
								<path
									id='Vector'
									d='M21 16.42L21 19.956C21 20.2092 20.9043 20.453 20.7317 20.6382C20.5591 20.8234 20.3225 20.9363 20.0701 20.954C19.6331 20.984 19.2759 21 19 21C10.1631 21 3 13.837 3 5C3 4.724 3.01489 4.367 3.0459 3.93C3.06372 3.67744 3.17651 3.44101 3.36182 3.26841C3.54712 3.09581 3.79077 2.99989 4.04395 3L7.58008 3C7.7041 2.99988 7.82373 3.04586 7.91577 3.12902C8.00781 3.21218 8.06567 3.32658 8.07788 3.45C8.10107 3.68 8.12207 3.863 8.14209 4.002C8.34082 5.38892 8.74805 6.73783 9.3501 8.003C9.44507 8.203 9.38306 8.442 9.20288 8.57L7.04492 10.112C8.3645 13.1865 10.8145 15.6365 13.8889 16.956L15.429 14.802C15.4919 14.714 15.5837 14.6509 15.6885 14.6237C15.7932 14.5964 15.9041 14.6068 16.002 14.653C17.2671 15.2539 18.6155 15.6601 20.002 15.858C20.1411 15.878 20.324 15.9 20.552 15.922C20.6753 15.9346 20.7893 15.9926 20.8723 16.0846C20.9553 16.1766 21.0012 16.2961 21.001 16.42L21 16.42Z'
									fillOpacity='1.000000'
									fillRule='nonzero'
								/>
							</g>
						</svg>
					</MyLink>
				</MainDropdownButton>
			</div>
		</section>
	);
};

export default HeroAbout;
