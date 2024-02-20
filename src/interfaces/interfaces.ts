import { LinkProps } from 'next/link';

export interface IMyLink extends LinkProps {
	text?: string;
	className?: string;
	ariaLabel?: string;
	children?: React.ReactNode;
}

export interface IWrapper {
	children: React.ReactNode;
}

export interface IButton {
	className?: string; // optional class name
	children?: React.ReactNode; // optional children
	text?: string; // optional text
	type: 'button' | 'submit'; // button type
	ariaLabel: string; // ARIA label for accessibility
	buttonStyle?: 'primary' | 'default' | 'ghost'; // optional button style
}

export interface IDropdown {
	primaryDropdownText: string;
	secondaryDropdownText: string | string[];
	secondaryDropdownItems: string | string[];
	secondaryDropdownIconFills: string[];
	primaryyDropdownItems?: string | string[];
}
export interface IMainDropdownButton {
	content: string;
	children: React.ReactNode;
	childrenClassName?: string;
}
export interface IDropdownInput {
	label: string;
	name: string;
	iconPath: string;
	alt: string;
	id: string;
}

export interface ICheckbox {
	id: string | number;
	label?: string;
	iconPath?: string;
	width?: number;
	height?: number;
	alt?: string;
	inputClassName?: string;
	name?: string;
}
