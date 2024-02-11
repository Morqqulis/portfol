'use client';
import { useActiveState } from '@/utils/utils';

const DropdownItem: React.FC<{ content: string }> = ({ content }: { content: string }): JSX.Element => {
	const [isActive, toggleActive] = useActiveState(false);

	return (
		<button
			className={`dropdown__item group/dropdownItem flex items-center gap-2 pl-[33px] duration-500 hover:text-primary-button-hover ${
				isActive ? 'active' : ''
			}`}
			type='button'
			aria-label='Dropdown item'
			onClick={toggleActive}>
			<svg
				className='fill-[#81A1C1] group-hover/dropdownItem:fill-accent-orange duration-500'
				width='16.221924'
				height='14.599731'
				viewBox='0 0 16.2219 14.5997'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				xmlnsXlink='http://www.w3.org/1999/xlink'>
				<defs />
				<path
					id='Vector'
					d='M0.811035 0L15.4109 0C15.626 0 15.8323 0.0854492 15.9844 0.237549C16.1365 0.389648 16.2219 0.596008 16.2219 0.811096L16.2219 13.7886C16.2219 14.0037 16.1365 14.2101 15.9844 14.3622C15.8323 14.5143 15.626 14.5997 15.4109 14.5997L0.811035 14.5997C0.595947 14.5997 0.389648 14.5143 0.237549 14.3622C0.0854492 14.2101 0 14.0037 0 13.7886L0 0.811096C0 0.596008 0.0854492 0.389648 0.237549 0.237549C0.389648 0.0854492 0.595947 0 0.811035 0ZM4.05542 10.1387L4.05542 6.89429L5.67773 8.51648L7.2998 6.89429L7.2998 10.1387L8.92212 10.1387L8.92212 4.46106L7.2998 4.46106L5.67773 6.08325L4.05542 4.46106L2.43335 4.46106L2.43335 10.1387L4.05542 10.1387ZM12.9775 7.70544L12.9775 4.46106L11.3555 4.46106L11.3555 7.70544L9.73315 7.70544L12.1665 10.1387L14.5996 7.70544L12.9775 7.70544Z'
					fillOpacity='1.000000'
					fillRule='nonzero'
				/>
			</svg>
			{content}
		</button>
	);
};

export default DropdownItem;
