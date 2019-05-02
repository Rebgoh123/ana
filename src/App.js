import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

import promise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createLogger } from 'redux-logger'
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";

import reducers from './reducers';
import Home from './components/home/index';
import NavBar from './components/app/header';

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(promise,loggerMiddleware)(createStore);

library.add(faPlay)

const THEME = createMuiTheme({
    typography: {
        "fontFamily": "\"Maven Pro\", sans-serif",
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    }

});


function App() {
  return (
<MuiThemeProvider theme={THEME}>
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                <Switch>
                    <Route path="/" component={Home}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
</MuiThemeProvider>
  );
}

export default App;
//
