import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import '../styles/globals.scss';
import Footer from '@/components/global/Footer/Footer';
import Header from '@/components/global/Header/Header';
import Wrapper from '@/components/global/Wrapper/Wrapper';

export const firaCode = Fira_Code({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-fira-code',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className='h-full group' lang='en'>
			<body className={`${firaCode.className} h-full bg-[#010C15]`}>
				<Wrapper>
					<Header />
					{children}
					<Footer />
				</Wrapper>
			</body>
		</html>
	);
}
