import React, {Component, lazy, Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoadingComponent from './common/LoadingComponent';

const GameStart = lazy(() => import('./views/GameStart'));
const Login = lazy(() => import('./views/Login'));

function LazyComponent(Component) {
    return props => (
        <Suspense fallback={<LoadingComponent/>}>
            <Component {...props} />
        </Suspense>
    )
}

class App extends Component {
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route path="/gamestart" component={LazyComponent(GameStart)}/>
                    <Route path="/login" component={LazyComponent(Login)}/>
                    <Route path="/" component={LazyComponent(GameStart)}/>
                </Switch>
            </BrowserRouter>

            // {/*<div className="App">*/}
            // {/*  <header className="App-header">*/}
            // {/*    <img src={logo} className="App-logo" alt="logo" />*/}
            // {/*    <p>*/}
            // {/*      Edit <code>src/App.js</code> and save to reload.*/}
            // {/*    </p>*/}
            // {/*    <a*/}
            // {/*      className="App-link"*/}
            // {/*      href="https://reactjs.org"*/}
            // {/*      target="_blank"*/}
            // {/*      rel="noopener noreferrer"*/}
            // {/*    >*/}
            // {/*      Learn React*/}
            // {/*    </a>*/}
            // {/*  </header>*/}
            // {/*</div>*/}
        );

    }
}


export default App;