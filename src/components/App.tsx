/**
 * Application component
 **/

import React, {
    Component,
    ComponentType,
} from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
} from 'react-router-dom';


class Home extends Component<{}, {}> {
    render() {
        return (
            <h1>Home</h1>
        );
    }
}

class Contact extends Component<{}, {}> {
    render() {
        return (
            <h1>Contact</h1>
        );
    }
}


/*
 * Create list of routes for page.
 */
interface RouteItem {
    path: string; // URL path of route.
    name: string; // Custom name string of route.
    component: ComponentType; // React component object to be rendered for route.
}
const routes: RouteItem[] = [
    { path: '/', name: 'Home', component: Home },
    { path: '/contact', name: 'Contact', component: Contact },
];


interface AppProps {};
interface AppState {};
class App extends Component<AppProps, AppState> {

    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            {routes.map((route: RouteItem, index: number) => (
                                <li key={index}>
                                    <Link to={route.path}>{route.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Switch>
                        {routes.map((route: RouteItem, index: number) => (
                            <Route key={index} path={route.path} component={route.component}/>
                        ))}
                        <Route exact path='/'>
                            <Redirect to={routes[0].path}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
