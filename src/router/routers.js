import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import routes from './router.config';

const Routers = () => (
    <BrowserRouter>
        <Switch>
            {
                routes.map((item, index) => (
                    <Route key={index} path={item.path} exact={true} component={item.component} />
                ))
            }
            <Redirect exact from='/' to='/login' />
        </Switch>
    </BrowserRouter>
)

export default Routers;