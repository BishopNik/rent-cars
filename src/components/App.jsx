/** @format */

import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';

const HomePage = lazy(() => import('pages/HomePage'));
const CatalogPage = lazy(() => import('pages/CatalogPage'));
const FavoritePage = lazy(() => import('pages/FavoritePage'));
const UnknownPage = lazy(() => import('pages/UnknownPage'));

function App() {
	return (
		<Routes>
			<Route path='/' element={<SharedLayout />}>
				<Route index element={<HomePage />} />
				<Route path='/catalog' element={<CatalogPage />} />
				<Route path='/favorites' element={<FavoritePage />} />
				<Route path='*' element={<UnknownPage />} />
			</Route>
		</Routes>
	);
}

export default App;
