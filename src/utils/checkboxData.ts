export interface ICheckboxData {
	id: string | number;
	label?: string;
	iconPath?: string;
	width?: number;
	height?: number;
	alt?: string;
	inputClassName?: string;
	name?: string;
}

const checkboxData: ICheckboxData[] = [
	{
		label: 'React',
		name: 'react',
		iconPath: '/checkboxIcons/react.svg',
		alt: 'Technology Icon',
		id: '1',
	},
	{
		label: 'Next',
		name: 'Next',
		iconPath: '/checkboxIcons/next2.svg',
		alt: 'Technology Icon',
		id: '1.1',
	},
	{
		label: 'HTML',
		name: 'html',
		iconPath: '/checkboxIcons/html.svg',
		alt: 'Technology Icon',
		id: '2',
	},
	{
		label: 'CSS',
		name: 'css',
		iconPath: '/checkboxIcons/css.svg',
		alt: 'Technology Icon',
		id: '3',
	},
	{
		label: 'Vue',
		name: 'vue',
		iconPath: '/checkboxIcons/vue.svg',
		alt: 'Technology Icon',
		id: '4',
	},
	{
		label: 'Angular',
		name: 'angular',
		iconPath: '/checkboxIcons/angular.svg',
		alt: 'Technology Icon',
		id: '5',
	},
	{
		label: 'Gatsby',
		name: 'projectName',
		iconPath: '/checkboxIcons/gatsby.svg',
		alt: 'Technology Icon',
		id: '6',
	},
	{
		label: 'Flutter',
		name: 'projectName',
		iconPath: '/checkboxIcons/flutter.svg',
		alt: 'Technology Icon',
		id: ' 7',
	},
];
export default checkboxData;
