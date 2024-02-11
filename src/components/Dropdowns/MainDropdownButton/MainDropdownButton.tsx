import { IMainDropdownButton } from '@/interfaces/interfaces';
const MainDropdownButton: React.FC<IMainDropdownButton> = ({ content, children }: IMainDropdownButton): JSX.Element => {
	return (
		<div>
			<button
				className='dropwdown__heading flex items-center gap-3 pl-[15px] pr-[80px] border-b border-t border-border-color py-3 w-full'
				type='button'
				aria-label='Main Dropdown button'>
				<svg
					className='fill-white -rotate-90'
					width='8.500000'
					height='6.000000'
					viewBox='0 0 8.5 6'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					xmlnsXlink='http://www.w3.org/1999/xlink'>
					<defs />
					<path id='Vector' d='M4.25 6L0 0L8.5 0L4.25 6Z' fillOpacity='1.000000' fillRule='nonzero' />
				</svg>
				{content}
			</button>
			<div className='py-2.5 grid gap-3'>{children}</div>
		</div>
	);
};

export default MainDropdownButton;
