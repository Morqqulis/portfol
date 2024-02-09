"use client";
// SnakeGame.tsx
import { useState, useEffect, useCallback } from "react";
import SnakeBox from "./SnakeBox";
import SnakeControls from "./SnakeControls";
import SnakeInfo from "./SnakeInfo";
import SnakeFood from "./SnakeFood";

const SnakeGame: React.FC = (): JSX.Element => {
	const [snake, setSnake] = useState([{ x: 5, y: 5 }]);
	const [direction, setDirection] = useState("up");
	const [food, setFood] = useState({ x: 10, y: 10 });
	const [gameStarted, setGameStarted] = useState(false);
	const [gameOver, setGameOver] = useState(false);
	const [foodEaten, setFoodEaten] = useState(0);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			const newDirection = event.key.replace("Arrow", "").toLowerCase();
			if (["up", "down", "left", "right"].includes(newDirection)) {
				if (
					(newDirection === "up" && direction !== "down") ||
					(newDirection === "down" && direction !== "up") ||
					(newDirection === "left" && direction !== "right") ||
					(newDirection === "right" && direction !== "left")
				) {
					setDirection(newDirection);
				}
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [direction]);

	const startGame = () => {
		setSnake([{ x: 5, y: 5 }]);
		setDirection("up");
		setFood({ x: 10, y: 10 });
		setGameStarted(true);
		setGameOver(false);
		setFoodEaten(0);
	};

	const generateFoodPosition = useCallback(() => {
		let newPosition: { x: number; y: number };
		do {
			newPosition = {
				x: Math.floor(Math.random() * 24),
				y: Math.floor(Math.random() * 41),
			};
		} while (snake.some((segment) => segment.x === newPosition.x && segment.y === newPosition.y));
		return newPosition;
	}, [snake]);

	useEffect(() => {
		if (!gameStarted) return;

		const interval = setInterval(() => {
			setSnake((snake) => {
				const moveHead = (head: { x: number; y: number }) => {
					switch (direction) {
						case "up":
							return { x: head.x, y: head.y - 1 };
						case "down":
							return { x: head.x, y: head.y + 1 };
						case "left":
							return { x: head.x - 1, y: head.y };
						case "right":
							return { x: head.x + 1, y: head.y };
						default:
							return head;
					}
				};

				const newHead = moveHead(snake[0]);

				if (
					newHead.x < 0 ||
					newHead.x >= 24 ||
					newHead.y < 0 ||
					newHead.y >= 41 ||
					snake.some((segment, index) => index !== 0 && segment.x === newHead.x && segment.y === newHead.y)
				) {
					setGameOver(true);
					setGameStarted(false);
					return snake;
				}

				if (newHead.x === food.x && newHead.y === food.y) {
					setFood(generateFoodPosition);
					setFoodEaten((foodEaten) => foodEaten + 1);
					return [newHead, ...snake];
				}

				return [newHead, ...snake.slice(0, -1)];
			});
		}, 100);

		return () => clearInterval(interval);
	}, [direction, food, gameStarted, generateFoodPosition]);

	useEffect(() => {
		if (foodEaten === 10) {
			setGameOver(true);
			setGameStarted(false);
		}
	}, [foodEaten]);

	const handleFoodIconClass = (index: number) => {
		return index < foodEaten ? "opacity-20" : "";
	};

	return (
		<div className='snake-game p-8 pl-[30px] h-[475px] gap-6 hidden mid:flex'>
			<SnakeBox
				gameStarted={gameStarted}
				gameOver={gameOver}
				startGame={startGame}
				setGameStarted={setGameStarted}
			/>
			<SnakeInfo />
			<SnakeFood foodEaten={foodEaten} handleFoodIconClass={handleFoodIconClass} />
			<button
				className='px-3.5 py-2.5 border border-white rounded-lg absolute bottom-0 right-0 hover:scale-110 duration-500 hover:text-[#FEA55F] hover:border-[#FEA55F]'
				type='button'
				aria-label='skip'
				onClick={startGame}>
				{gameOver ? "start again" : "skip"}
			</button>
		</div>
	);
};

export default SnakeGame;
