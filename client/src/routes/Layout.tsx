
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useAuthContext } from '../context/auth';

import { ErrorPage, Loading } from '../components';
import { Header } from '../components';
import {routes, authRoutes} from './index';
import { LandingPage, LoginPage } from '../pages';

export const Layout = () => {
    
	const { isAuth, loading } = useAuthContext()
	const [auth, setAuth] = useState<any>(undefined)
	const [isLoading, setIsLoading] = useState<any>(true)

	useEffect(()=> {
		setAuth(isAuth)
		setIsLoading(loading)
	})
    
	return (
        <BrowserRouter>
            <Header />
            {isLoading 
                ? <Loading />
                :
            <Routes>                
                {auth === undefined ? <Route path='/' element={<LoginPage />} /> : <Route path='/' element={<LandingPage />}/>}
                {routes.map(({ path, element }, key) => (<Route path={path} element={element} key={key} />))}							
                {auth ? authRoutes.map(({ path, element }, key) => (<Route path={path} element={element} key={key} />)) : <Route path='/' element={<LoginPage />} />}								
                <Route path='*' element={<ErrorPage />} />
                
            </Routes>
            }
        </BrowserRouter>
    );
};

export default Layout;
