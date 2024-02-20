import MainDropdownButton from '../Dropdowns/MainDropdownButton/MainDropdownButton';
import checkboxData from '@/utils/checkboxData';
import Checkbox from '../global/Checkbox/Checkbox';

const HeroProjects: React.FC = (): JSX.Element => {
	return (
		<section className='h-full'>
			<div className='max-w-[312px] h-full border-r border-border-color'>
				<MainDropdownButton childrenClassName='pl-[22px]' content='projects'>
					{checkboxData.map((item) => (
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
