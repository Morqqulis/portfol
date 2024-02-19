import { useState, useEffect } from 'react';

const useLocalStorage = <T>(key: string, initialValue: T): [T, (value: T) => void] => {
	const [value, setValue] = useState<T>(() => {
		const storedValue = localStorage.getItem(key);
		return storedValue ? JSON.parse(storedValue) : initialValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};

export default useLocalStorage;

/**
 * Custom hook to store and retrieve data from local storage
 * @param key - the key under which the value will be stored in local storage
 * @param initialValue - the initial value to be used if no value is found in local storage
 * @returns a tuple containing the stored value and a function to update the stored value
 * @example
 * const [username, setUsername] = useLocalStorage('username', '');
 *
 * <div>
 *     <p>Username: {username}</p>
 *     <button onClick={() => setUsername('John')}>Set Username</button>
 * </div>
 */