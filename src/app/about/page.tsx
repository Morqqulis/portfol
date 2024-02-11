import HeroAbout from '@/components/Hero/HeroAbout';
import { NextPage } from 'next';

const About: NextPage = (): JSX.Element => {
	return (
		<main className='grow'>
			<HeroAbout />
		</main>
	);
};
export default About;
