// SnakeFood.tsx

interface Props {
	foodEaten: number;
	handleFoodIconClass: (index: number) => string;
}

const SnakeFood: React.FC<Props> = ({ foodEaten, handleFoodIconClass }): JSX.Element => {
	return (
		<div className='pl-2.5 grid gap-2.5'>
			<p className='flex gap-1'>&#47;&#47; food left</p>
			<div className='flex gap-2 flex-wrap max-w-[150px]'>
				{[...Array(10)].map((_, index) => (
					<svg
						className={`${handleFoodIconClass(index)}`}
						key={index}
						width='22'
						height='22'
						viewBox='0 0 22 22'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<circle opacity='0.1' cx='10.827' cy='10.9636' r='10.3456' fill='#43D9AD' />
						<circle opacity='0.2' cx='10.827' cy='10.9636' r='7.34558' fill='#43D9AD' />
						<circle cx='10.8271' cy='10.9636' r='4' fill='#43D9AD' />
					</svg>
				))}
			</div>
		</div>
	);
};

export default SnakeFood;
