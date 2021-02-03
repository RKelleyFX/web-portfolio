import React, { Component } from 'react';

// material UI components
//import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Page Imports
import Home from './pages/Home';
import Make from './pages/Make';
import Manage from './pages/Manage';
import Design from './pages/Design';
import Steam from './pages/Steam';
import About from './pages/About';
import LogIn from './pages/LogIn';
import Admin from './pages/Admin';

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
                                    <Route path="/make" component={Make} />
                                    <Route path="/manage" component={Manage} />
                                    <Route path="/design" component={Design} />
                                    <Route path="/steam" component={Steam} />
                                    <Route path="/about" component={About} />
                                    <Route path="/logIn" component={LogIn} />
                                    <Route path="/admin" component={Admin} />
                                </Switch>
                            </div>
                    </Router>
                </div>
            
        );
    }
}

//const theme = createMuiTheme(themeData);

export default App;