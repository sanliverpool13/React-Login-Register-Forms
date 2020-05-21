import React from 'react';
import './App.css';
import { Login, Register } from './components/index';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';


const App = () => {
    
    return (
        <>
          <Router>
            <Switch>
                <Route exact path={["/","/login"]}>
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
            </Switch>
        </Router> 
        </>
    );
}

export default App;