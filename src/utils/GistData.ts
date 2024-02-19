interface IGistData {
	fileName: string;
	gistUrl: `${string}/${string}`;
	id: number;
}

const gistData: IGistData[] = [
	{
		id: 1,
		fileName: 'useActiveState.ts',
		gistUrl: 'Morqqulis/5d8fb5375a57a73a477202f71804641e',
	},
	{
		id: 2,
		fileName: 'useLocalStorage.ts',
		gistUrl: 'Morqqulis/0a8e14e197154ee04c81744fca4492f7',
	},
	{
		id: 3,
		fileName: 'githubCommands.js',
		gistUrl: 'Morqqulis/8d86c10e649770cc41ce44822d26439b',
	},
];

export default gistData;
