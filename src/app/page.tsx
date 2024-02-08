import Image from "next/image";

export default function Home() {
	return (
		<main className='grow'>
			<section className='hero h-full flex items-center justify-center'>
				<h1 className='title flex flex-col text-5xl text-wrap:balance gap-2.5 max-w-[400px] sm:text-6xl'>
					<span className='text-[18px]'>Hi all. I am</span>
					Dmitriy Isgandarov
					<span className='text-[20px] text-[#43D9AD]'>&gt; Front-end Developer</span>
				</h1>
				<div className='snake min-w-[510px] md:block hidden'></div>
			</section>
		</main>
	);
}
