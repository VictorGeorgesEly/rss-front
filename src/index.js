import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import Layout from "./components/Layout";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import {backUrl} from "./config";
import axios from 'axios';

axios.defaults.baseURL = backUrl;

const App = () => (
    <Router>
        <Switch>
            <Redirect path="/" exact to="/connexion" />
            <Route path="/connexion" component={Login} />
            {/* <AuthenticatedRoute roles={['ROLE_USER', 'ROLE_ADMIN']} path="/" component={Layout} /> */}
            <Route path="/" component={Layout} />
            {/* TODO Ajout d'un composant modifiable selon la position du systeme !*/}
            <Route path="*" component={NotFound} />
        </Switch>
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
