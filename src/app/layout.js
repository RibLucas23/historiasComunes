import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Historias Comunes',
	description: 'Historias Comunes',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<Head>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<body className={inter.className}>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
