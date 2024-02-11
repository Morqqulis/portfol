import { useState } from 'react';

export const useActiveState = (initialState: boolean = false): [boolean, () => void] => {
	const [isActive, setActive] = useState(initialState);

	const toggleActive: () => void = (): void => {
		setActive(!isActive);
	};

	return [isActive, toggleActive];
};
