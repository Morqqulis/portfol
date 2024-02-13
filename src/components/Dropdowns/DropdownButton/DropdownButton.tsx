'use client';
import { useActiveState } from '@/utils/utils';
/**
 * Renders a dropdown button component with the given content and folder color.
 *
 * @param {string} content - The content to display on the button
 * @param {string} folderColor - The color of the folder icon
 * @param {React.ReactNode} children - The child components to be displayed in the dropdown
 * @return {JSX.Element} The rendered dropdown button component
 */

const DropdownButton: React.FC<{
	content: string;
	folderColor: string;
	children: React.ReactNode;
}> = ({
	content,
	folderColor,
	children,
}: {
	content: string;
	folderColor: string;
	children: React.ReactNode;
}): JSX.Element => {
	const [isActive, setIsActive] = useActiveState(false);

	return (
		<div className={` pl-[15px] hover:text-white duration-300 overflow-hidden`}>
			<button
				className='flex items-center gap-2.5 w-full'
				type='button'
				aria-label='Dropdown button'
				onClick={setIsActive}>
				<svg
					className={`transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`}
					width='7.778076'
					height='12.728027'
					viewBox='0 0 7.77808 12.728'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					xmlnsXlink='http://www.w3.org/1999/xlink'>
					<defs />
					<path
						id='Vector'
						d='M4.94995 6.36401L0 1.414L1.41406 0L7.77808 6.36401L1.41406 12.728L0 11.314L4.94995 6.36401Z'
						fill='#607B96'
						fillOpacity='1.000000'
						fillRule='nonzero'
					/>
				</svg>
				<svg
					width='14.444336'
					height='13.000000'
					viewBox='0 0 14.4443 13'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					xmlnsXlink='http://www.w3.org/1999/xlink'>
					<defs />
					<path
						id='Vector'
						d='M14.4443 3.61108L14.4443 12.2778C14.4443 12.4693 14.3684 12.653 14.2329 12.7885C14.0974 12.9239 13.9138 13 13.7222 13L0.722168 13C0.530762 13 0.346924 12.9239 0.211426 12.7885C0.0761719 12.653 0 12.4693 0 12.2778L0 2.88892L13.7222 2.88892C13.9138 2.88892 14.0974 2.96497 14.2329 3.1004C14.3684 3.23584 14.4443 3.41956 14.4443 3.61108ZM7.52124 1.44446L0 1.44446L0 0.722229C0 0.530701 0.0761719 0.346985 0.211426 0.211548C0.346924 0.0761108 0.530762 0 0.722168 0L6.07666 0L7.52124 1.44446Z'
						fillOpacity='1.000000'
						fillRule='nonzero'
						fill={folderColor}
					/>
				</svg>
				{content}
			</button>
			<div
				className={` transition-all duration-300 h-0 overflow-hidden scale-0 ${
					isActive ? 'h-auto gap-2 grid pt-2.5 scale-100' : ''
				} `}>
				{children}
			</div>
		</div>
	);
};

export default DropdownButton;
