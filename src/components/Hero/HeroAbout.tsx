import Dropdown from '../Dropdowns/Dropdown';
import PageActions from '../PageActions/PageActions';

const HeroAbout: React.FC = (): JSX.Element => {
	return (
		<section className='flex'>
			<PageActions />
			<Dropdown />
		</section>
	);
};

export default HeroAbout;
