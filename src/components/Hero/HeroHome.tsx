import Image from 'next/image';
import HeroHomeTitle from './HeroHomeTitle';
import Script from 'next/script';
import MyGist from '../MyGist/MyGist';
import Slider from '../Slider/Slider';

const HeroHome: React.FC = () => {
	return (
		<section className='h-full flex flex-col items-center justify-center relative'>
			<div className='flex items-center'>
				<div className=''>
					<HeroHomeTitle />
				</div>
			<Slider>
				
			</Slider>
				{/* <MyGist
					className=''
					fileName='useActiveState.ts'
					gistUrl='Morqqulis/5d8fb5375a57a73a477202f71804641e'
				/> */}

				{/* <MyGist
					className=''
					fileName='useLocalStorage.ts'
					gistUrl='Morqqulis/0a8e14e197154ee04c81744fca4492f7'
				/> */}
			</div>
		</section>
	);
};
export default HeroHome;
