'use client';
import Buscador from './components/Buscador';
import Cards from './components/Cards';
import About from './components/About';
import Suscribite from './components/Suscribite';
import { useEffect, useState } from 'react';
import Search from './components/Icons/Search';
import CardsContainer from './components/CardsContainer';
import BannerAlforja from './components/layout/BannerAlforja';

export default function Home() {
	return (
		<main
			className='flex flex-col  items-center px-4 md:px-16 lg:px-32  '
			style={{ backgroundImage: 'url(/bg.png)', backgroundRepeat: 'repeat' }}
		>
			<BannerAlforja />
			<CardsContainer />
			<About />
			<Suscribite />
		</main>
	);
}
