// SnakeInfo.tsx

const SnakeInfo: React.FC = (): JSX.Element => {
	return (
		<div className='relative'>
			<div className='px-2.5 py-3.5 bg-[rgba(1,_20,_35,_0.19)] text-sm rounded-lg mb-5'>
				<div className='mb-4'>
					<p className='snake-text flex items-center gap-2.5'>&#47;&#47; use keyboard</p>
					<p className='snake-text flex items-center gap-2.5'>&#47;&#47; arrows to play</p>
				</div>
				<div className='grid gap-1'>
					<div className='flex justify-center'>
						<svg
							className=''
							width='51'
							height='30'
							viewBox='0 0 51 30'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<rect
								x='1.46094'
								y='1.46356'
								width='48.0787'
								height='27.6912'
								rx='7.5'
								fill='#010C15'
								stroke='#1E2D3D'
							/>
							<path d='M25.5 12.3091L29.75 18.3091H21.25L25.5 12.3091Z' fill='white' />
						</svg>
					</div>
					<div className='flex gap-1 justify-center'>
						{[...Array(3)].map((_, index) => (
							<svg
								key={index}
								className=''
								width='51'
								height='30'
								viewBox='0 0 51 30'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<rect
									x='1.46094'
									y='1.46356'
									width='48.0787'
									height='27.6912'
									rx='7.5'
									fill='#010C15'
									stroke='#1E2D3D'
								/>
								<path d='M25.5 12.3091L29.75 18.3091H21.25L25.5 12.3091Z' fill='white' />
							</svg>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SnakeInfo;
