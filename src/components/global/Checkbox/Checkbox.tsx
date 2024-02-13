import { ICheckbox } from '@/interfaces/interfaces';
import Image from 'next/image';
import style from './Checkbox.module.scss';
const Checkbox: React.FC<ICheckbox> = ({
	id,
	label,
	iconPath,
	alt,
	name,
	width,
	height,
	inputClassName,
}: ICheckbox): JSX.Element => {
	return (
		<label className='flex items-center gap-3 cursor-pointer' htmlFor={String(id) || ''} key={id || name || label}>
			{label && <span className='order-2'>{label}</span>}
			{iconPath && (
				<Image
					className='order-1'
					src={iconPath}
					alt={alt || 'checkbox'}
					width={width || 25}
					height={height || 25}
				/>
			)}
			<input
				className={`dropdown-checkbox ${inputClassName} ${style.checkbox} dropdown-checkbox appearance-none grid place-content-center rounded-sm text-secondary-grey border border-secondary-grey w-5 h-5 order-0 cursor-pointer before:w-[0.65em] before:h-[0.65em] transition-transform checked:bg-secondary-grey checked:before:scale-100 outline-none hover:outline-4 hover:outline-[#1e3448] hover:outline before:scale-0 before:bg-white origin-bottom-left`}
				id={String(id) || ''}
				type='checkbox'
				aria-label={label ? `Checkbox for ${label}` : 'Checkbox'}
				name={name}
			/>
		</label>
	);
};

export default Checkbox;
