import MainDropdownButton from '../Dropdowns/MainDropdownButton/MainDropdownButton';
import DropdownInput from '../Dropdowns/DropdownInput/DropdownInput';
import { projectInputsContent } from '@/utils/siteContent';
import Checkbox from '../global/Checkbox/Checkbox';
import { ICheckbox } from '@/interfaces/interfaces';

/**
 * Renders the HeroProjects component.
 *
 * @return {JSX.Element} The JSX element for the HeroProjects component.
 */
const HeroProjects: React.FC = (): JSX.Element => {
	return (
		<section className='h-full'>
			<div className='max-w-[312px] h-full border-r border-border-color'>
				<MainDropdownButton childrenClassName='pl-[22px]' content='projects'>
					{projectInputsContent.map((item: ICheckbox) => (
						<Checkbox
							key={item.id}
							id={item.id}
							label={item.label}
							iconPath={item.iconPath}
							alt={item.alt}
							name={item.name}
						/>
					))}
				</MainDropdownButton>
			</div>
		</section>
	);
};

export default HeroProjects;
