import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Product from './view/Product';
import Home from './view/Home'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/product' component={Product} />
            </Switch>
        </BrowserRouter>
    )

};