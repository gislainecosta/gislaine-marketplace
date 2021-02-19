import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import * as St from './style';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Home from '../pages/Home';
import Cart from '../pages/Cart';

const routes = [
    {
        path: "/",
        page: <Home />
    },
    {
        path: "/cart",
        page: <Cart />
    }
]

const Router = () => {
    return (
        <BrowserRouter history={History}>
            <section>
                <Header />
                <St.Body>
                    <Navigation />
                    <Switch>
                        {
                            routes.map(
                                (route) => <Route key={route.page} exact path={route.path} >
                                    {route.page}
                                </Route>
                            )
                        }
                    </Switch >
                </St.Body>
            </section>
        </BrowserRouter >
    )
}

export default Router;