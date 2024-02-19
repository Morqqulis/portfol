'use client';
import { IMainDropdownButton } from '@/interfaces/interfaces';
import { useActiveState } from '@/utils/useActiveState';
const MainDropdownButton: React.FC<IMainDropdownButton> = ({
	content,
	children,
	childrenClassName,
}: IMainDropdownButton): JSX.Element => {
	const [isActive, setIsActive] = useActiveState(true);

	return (
		<div>
			<button
				className={`dropwdown__heading ${
					isActive ? 'text-white' : ''
				} hover:text-white transition-all duration-300 flex items-center gap-3 pl-[15px] pr-[76px] border-b border-t border-border-color py-3 w-full`}
				type='button'
				aria-label='Main Dropdown button'
				onClick={setIsActive}>
				<svg
					className={`fill-white -rotate-90 transition-all duration-300  ${isActive ? 'rotate-0' : ''}`}
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
			<div
				className={`${
					childrenClassName ? childrenClassName : ''
				} transition-all duration-300 h-0 overflow-hidden ${isActive ? 'h-auto pt-4 pb-6 grid gap-3' : ''} `}>
				{children}
			</div>
		</div>
	);
};

export default MainDropdownButton;
