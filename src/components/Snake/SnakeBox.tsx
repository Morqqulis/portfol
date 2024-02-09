// SnakeBox.tsx
import React from "react";

interface Props {
	gameStarted: boolean;
	gameOver: boolean;
	startGame: () => void;
	setGameStarted: (value: boolean) => void;
}

const SnakeBox: React.FC<Props> = ({ gameStarted, gameOver, startGame, setGameStarted }): JSX.Element => {
	return (
		<div className='min-w-[240px] h-full w-full relative snake-box'>
			<div className='play-snake'>
				<svg
					className='snakeFood absolute top-[53px] left-[88px]'
					width='22'
					height='22'
					viewBox='0 0 22 22'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<circle opacity='0.1' cx='10.827' cy='10.9636' r='10.3456' fill='#43D9AD' />
					<circle opacity='0.2' cx='10.827' cy='10.9636' r='7.34558' fill='#43D9AD' />
					<circle cx='10.8271' cy='10.9636' r='4' fill='#43D9AD' />
				</svg>
				<svg
					className='snake absolute left-[94px] top-[91px]'
					width='61'
					height='162'
					viewBox='0 0 61 162'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M4.82715 4.07938V79.0794H56.8271V157.691'
						stroke='#43D9AD'
						strokeWidth='8'
						strokeLinecap='round'
					/>
				</svg>
				{gameStarted ? (
					<button
						className='bg-[#FEA55F] text-[#01080E] text-sm px-3.5 py-2.5 rounded-lg font-medium absolute left-1/2 -translate-x-1/2 bottom-[55px] hover:bg-[#b5713e] hover:scale-110 active:scale-50 duration-500 whitespace-nowrap'
						type='button'
						aria-label='start game'
						onClick={() => setGameStarted(false)}>
						stop game
					</button>
				) : (
					<button
						className='bg-[#FEA55F] text-[#01080E] text-sm px-3.5 py-2.5 rounded-lg font-medium absolute left-1/2 -translate-x-1/2 bottom-[55px] hover:bg-[#b5713e] hover:scale-110 active:scale-50 duration-500 whitespace-nowrap'
						type='button'
						aria-label='start game'
						onClick={startGame}>
						start game
					</button>
				)}
			</div>
		</div>
	);
};

export default SnakeBox;
