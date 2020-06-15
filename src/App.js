import React, { Component } from 'react';

// material UI components
//import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Page Imports
import Home from './pages/Home';
import Fabrication from './pages/Fabrication';
import FilmTv from './pages/Film-Tv';
import Management from './pages/Management';
import Volunteer from './pages/Volunteer';
import WebDev from './pages/Web-Dev';

// Routing Imports
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Styling Imports
import "./styles/App.css";



class App extends Component {
    render() {
        return (
            
                <div className='App'>
                    <Router>
                            <div>
                                <Switch>
                                    <Route exact path="/" component={Home} />
                                    <Route path="/fabrication" component={Fabrication} />
                                    <Route path="/film-tv" component={FilmTv} />
                                    <Route path="/management" component={Management} />
                                    <Route path="/volunteer" component={Volunteer} />
                                    <Route path="/web-dev" component={WebDev} />
                                </Switch>
                            </div>
                    </Router>
                </div>
            
        );
    }
}

//const theme = createMuiTheme(themeData);

export default App;