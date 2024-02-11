import DropdownButton from './DropdownButton/DropdownButton';
import DropdownItem from './DropdownItem/DropdownItem';
import MainDropdownButton from './MainDropdownButton/MainDropdownButton';

const Dropdown: React.FC = (): JSX.Element => {
	return (
		<div className='border border-border-color border-t-0 text-secondary-grey ml-[75px]'>
			<MainDropdownButton content='personal-info'>
				<DropdownButton content='Bio' folderColor='red'>
					<DropdownItem content='Test1' />
					<DropdownItem content='test2' />
					<DropdownItem content='test4' />
				</DropdownButton>
				<DropdownButton content='education' folderColor='blue'>
					<DropdownItem content='highschool' />
				</DropdownButton>
				<DropdownButton content='interests' folderColor='green'>
					<DropdownItem content='university' />
				</DropdownButton>
				<DropdownItem content='high school' />
				<DropdownItem content='university' />
			</MainDropdownButton>
		</div>
	);
};

export default Dropdown;
