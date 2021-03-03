import React, { Component } from 'react';

// Screen Imports
import Home from './screens/Home';
import Make from './screens/Make';
import Manage from './screens/Manage';
import Design from './screens/Design';
import Steam from './screens/Steam';
import About from './screens/About';
import Admin from './screens/Admin';

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
                                    <Route path="/admin" component={Admin} />
                                </Switch>
                            </div>
                    </Router>
                </div>
            
        );
    }
}

export default App;