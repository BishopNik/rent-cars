/** @format */

import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loader from 'components/Loader';
import { ListLink, LinkPage } from './SharedLayout.styled';

const SharedLayout = () => {
	const location = useLocation();
	const [curPage, setCurPage] = useState('');

	useEffect(() => {
		setCurPage(location.pathname);
	}, [location.pathname]);

	return (
		<Suspense fallback={<Loader />}>
			<header style={{ paddingTop: '10px' }}>
				<ListLink>
					{curPage !== '/' && (
						<LinkPage>
							<Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
								Home
							</Link>
						</LinkPage>
					)}
					{curPage !== '/catalog' && (
						<LinkPage>
							<Link
								to={'/catalog'}
								style={{ textDecoration: 'none', color: 'inherit' }}
							>
								Catalog
							</Link>
						</LinkPage>
					)}
					{curPage !== '/favorites' && (
						<LinkPage>
							<Link
								to={'/favorites'}
								style={{ textDecoration: 'none', color: 'inherit' }}
							>
								Favorites
							</Link>
						</LinkPage>
					)}
				</ListLink>
			</header>
			<Outlet />
		</Suspense>
	);
};

export default SharedLayout;
