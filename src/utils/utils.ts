import { useState } from 'react';
/**
 * Returns a tuple containing a boolean value and a function to toggle the boolean value.
 *
 * @param {boolean} initialState - Optional initial state for the boolean value
 * @return {[boolean, () => void]} Tuple containing the boolean value and a function to toggle it
 */
export const useActiveState: (initialState: boolean) => [boolean, () => void] = (
	initialState: boolean = false,
): [boolean, () => void] => {
	const [isActive, setIsActive] = useState(initialState);

	/**
	 * A function to toggle the active state.
	 * @return {void}
	 */

	const toggleActiveState: () => void = (): void => {
		setIsActive((prevState) => !prevState);
	};

	return [isActive, toggleActiveState];
};
