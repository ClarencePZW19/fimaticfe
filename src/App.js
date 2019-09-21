import React, {Component, lazy, Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoadingComponent from './common/LoadingComponent';

const GameStart = lazy(() => import('./views/GameStart'));
const Login = lazy(() => import('./views/Login'));
const GameEnd = lazy(() => import('./views/GameEnd'));
const Overview = lazy(() => import('./views/Overview'));
const ChooseAllocation = lazy(() => import('./views/PortfolioAllocation'));
const Register = lazy(()=> import('./views/Register'));

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
                    <Route path="/gameend" component={LazyComponent(GameEnd)}/>
                    <Route path="/login" component={LazyComponent(Login)}/>
                    <Route path="/overview" component={LazyComponent(Overview)}/>
                    <Route path="/chooseallocation" component={LazyComponent(ChooseAllocation)}/>
                    <Route path="/register" component={LazyComponent(Register)}/>
                    <Route path="/" component={LazyComponent(Login)}/>
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
