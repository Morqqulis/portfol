interface INavigationData {
	title: string;
	id: string;
	href: '/' | '/about' | '/projects' | '/contact';
	ariaLabel: string;
}

const navigationData: INavigationData[] = [
	{
		title: '_home',
		id: 'home',
		href: '/',
		ariaLabel: 'Navigation link',
	},
	{
		title: '_about',
		id: 'about',
		href: '/about',
		ariaLabel: 'Navigation link',
	},
	{
		title: '_projects',
		id: 'projects',
		href: '/projects',
		ariaLabel: 'Navigation link',
	},
	{
		title: '_contact-me',
		id: 'contact',
		href: '/contact',
		ariaLabel: 'Navigation link',
	},
];

export default navigationData;
