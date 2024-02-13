import Image from 'next/image';
import HeroHomeTitle from './HeroHomeTitle';
import Script from 'next/script';
import MyGist from '../MyGist/MyGist';

const HeroHome: React.FC = () => {
	return (
		<section className='h-full flex flex-col items-center justify-center relative'>
			<div className='flex items-center'>
				<div className=''>
					<HeroHomeTitle />
				</div>
				<div className=''>
					<MyGist
						className='overflow-auto h-[182px]'
						fileName='utils.ts'
						gistUrl='Morqqulis/5d8fb5375a57a73a477202f71804641e'
					/>
					{/* <Image
						className='blur-[174px]'
						src={'/Hero/Home/green-bg.png'}
						alt={'Hero background gradient image'}
						width={780}
						height={742}
					/>
					<Image
						className='blur-[174px]'
						src={'/Hero/Home/blue-bg.png'}
						alt={'Hero background gradient image'}
						width={780}
						height={742}
					/> */}
				</div>
			</div>
		</section>
	);
};
export default HeroHome;
