import React, { Component } from 'react';

// Screen Imports
import Home from './screens/Home';
import Make from './screens/Make';
import Manage from './screens/Manage';
import Code from './screens/Code';
import Steam from './screens/Steam';
import About from './screens/About';
import Admin from './screens/Admin';
import OFMSurvey from './screens/OFMKidSurvey.js';

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
                                    <Route path="/code" component={Code} />
                                    <Route path="/learn" component={Steam} />
                                    <Route path="/about" component={About} />
                                    <Route path="/admin" component={Admin} />
                                    <Route path="/survey-OFM" component={OFMSurvey} />
                                </Switch>
                            </div>
                    </Router>
                </div>
            
        );
    }
}

export default App;