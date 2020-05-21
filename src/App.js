import React from 'react';
import './App.css';
import { Login, Register, Dashboard } from './components/index';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';


const App = () => {
    
    return (
        <>
          <Router>
            <Switch>
                <Route exact path={["/","/login"]}>
                    <Login/>
                </Route>
                <Route exact path="/register">
                    <Register/>
                </Route>
                <Route exact path="/dashboard">
                    <Dashboard/>
                </Route>
            </Switch>
        </Router> 
        </>
    );
}

export default App;