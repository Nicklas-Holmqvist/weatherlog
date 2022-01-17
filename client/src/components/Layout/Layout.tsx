
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useAuthContext } from '../../context/auth';

import { Loading } from '../Loading/'
import { ErrorPage } from '..';
import { Header } from '..';
import {routes, authRoutes} from '../../routes/index';
import { LandingPage, LoginPage } from '../../pages';

export const Layout = () => {
    
	const { isAuth, loading } = useAuthContext()
	const [isLoading, setIsLoading] = useState<any>(true)

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(()=> {
		setIsLoading(loading)
	})
    
	return (
        <BrowserRouter>
            <Header />
            {isLoading 
                ? <Loading />
                :
            <Routes>                
                {!isAuth ? <Route path='/' element={<LoginPage />} /> : <Route path='/' element={<LandingPage />}/>}
                {routes.map(({ path, element }, key) => (<Route path={path} element={element} key={key} />))}							
                {isAuth ? authRoutes.map(({ path, element }, key) => (<Route path={path} element={element} key={key} />)) : <Route path='/' element={<LoginPage />} />}								
                <Route path='*' element={<ErrorPage />} />                
            </Routes>
            }
        </BrowserRouter>
    );
};

export default Layout;
