import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import * as St from './style';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Favorites from '../pages/Favorites';
import Contact from '../pages/Contact';

const routes = [
    {
        path: "/",
        page: <Home />
    },
    {
        path: "/cart",
        page: <Cart />
    },
    {
        path: "/favorites",
        page: <Favorites />
    },
    {
        path: "/conatct",
        page: <Contact />
    }
]

const Router = () => {
    return (
        <BrowserRouter history={History}>
            <Switch>
                {
                    routes.map(
                        (route) => {
                            return <Route key={route.page} exact path={route.path}>
                                <section>
                                    <Header />
                                    <St.Body>
                                        <Navigation />
                                        {route.page}
                                    </St.Body>
                                </section>
                            </Route>;
                        }
                    )
                }
            </Switch >
        </BrowserRouter >
    )
}

export default Router;