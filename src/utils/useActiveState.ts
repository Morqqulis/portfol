import { useState } from 'react';

export const useActiveState: (initialState: boolean) => [boolean, () => void] = (
	initialState: boolean = false,
): [boolean, () => void] => {
	const [isActive, setIsActive] = useState(initialState);
	const toggleActiveState: () => void = (): void => {
		setIsActive((prevState) => !prevState);
	};

	return [isActive, toggleActiveState];
};

/**
 * Returns a tuple containing a boolean value and a function to toggle the boolean value.
 * @param {boolean} initialState - Optional initial state for the boolean value
 * @return {[boolean, () => void]} Tuple containing the boolean value and a function to toggle it
 * @example
 * const [isActive, toggleActiveState] = useActiveState(false);
 *
 * <div className={isActive ? 'active' : ''}>Active State</div>
 * 	<button onClick={toggleActiveState}>Toggle Active State</button>
 * </div>
 */
