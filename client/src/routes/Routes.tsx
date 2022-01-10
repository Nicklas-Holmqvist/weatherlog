
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useAuthContext } from '../context/auth';

import { NoPage } from '../components/';
import { Footer, Header } from '../components';
import {routes, authRoutes} from '../routes';
import { LandingPage, LoginPage } from '../pages';

export const NoLog = () => {
    
	const { isAuth } = useAuthContext()
	const [auth, setAuth] = useState<any>(undefined)

	useEffect(()=> {
		setAuth(isAuth)
	})
    
	return (
        <BrowserRouter>
            <Header />
            <Routes>
                {auth === undefined ? <Route path='/' element={<LoginPage />} /> : <Route path='/' element={<LandingPage />}	/>}
                {routes.map(({ path, element }, key) => (<Route path={path} element={element} key={key} />))}							
                {auth ? authRoutes.map(({ path, element }, key) => (<Route path={path} element={element} key={key} />)) : <Route path='/' element={<LoginPage />} />}								
                <Route path='*' element={<NoPage />} />
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    );
};

export default NoLog;
