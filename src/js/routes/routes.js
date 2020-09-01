import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from 'basePath/views/component/notFound';
import Explore from 'basePath/views/component/sections/explore';
import ErrorBoundary from 'basePath/views/component/common/ErrorBoundary';

const routes = (
    <Router basename="/" >
        <ErrorBoundary>
            <Switch>
                <Route exact path="/" render={props => <Explore {...props} />}/>
                <Route path="*" component={NotFound} />
            </Switch>
        </ErrorBoundary>
    </Router>
);

function Routes() {
    return routes;
}

export default Routes;
