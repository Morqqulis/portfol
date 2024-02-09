import HeroHome from "@/components/Hero/HeroHome";
import { NextPage } from "next";

const Home: NextPage = (): JSX.Element => {
	return (
		<main className='grow'>
			<HeroHome />
		</main>
	);
};
export default Home;
