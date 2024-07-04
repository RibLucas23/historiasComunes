import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Historias Comunes',
	description: 'Historias Comunes',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
