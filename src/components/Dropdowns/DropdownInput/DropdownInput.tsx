import { IDropdownInput } from '@/interfaces/interfaces';
import Image from 'next/image';
import './DropdownInput.scss';
const DropdownInput: React.FC<{ content: IDropdownInput[] }> = ({
	content,
}: {
	content: IDropdownInput[];
}): JSX.Element => {
	return (
		<div className='pl-[22px] grid gap-4'>
			{content.map(
				(item: IDropdownInput): JSX.Element => (
					<label className='flex items-center gap-3 cursor-pointer' htmlFor={item.id} key={item.id}>
						<span className='order-2'>{item.label}</span>
						<Image className='order-1' src={item.iconPath} alt={item.alt} width={24} height={24} />
						<input
							className='dropdown-checkbox appearance-none grid place-content-center rounded-sm text-secondary-grey border border-secondary-grey w-5 h-5 order-0 cursor-pointer before:w-[0.65em] before:h-[0.65em] transition-transform checked:bg-secondary-grey checked:before:scale-100 outline-none hover:outline-4 hover:outline-[#1e3448] hover:outline before:scale-0 before:bg-white origin-bottom-left'
							id={item.id}
							type='checkbox'
							aria-label='Checkbox'
							name={item.name}
						/>
					</label>
				),
			)}
		</div>
	);
};

export default DropdownInput;
