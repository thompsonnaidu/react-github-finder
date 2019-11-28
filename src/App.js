import React,{Component, Fragment,useState} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import User from './components/users/User';
import UserDetails from './components/users/UserDetails';
import Search from './components/users/Search';
import About from './components/pages/About';

import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'

const App = () => {
  
  const client_id="a1af30da73995945d0c8";
  const client_secret="93e22c23fd861c5a7672fa735e9c5aab89c2c1a5";
  

 


  
    return (
      <GithubState>
        <AlertState>
        <Router>
        <div className="App">
          <Navbar/>
          <div className="container">
          <Alert/>
          <Switch>
            <Route exact path="/" render={props=>(
              <Fragment>
                  <Search />
                  <User/>
                </Fragment>
      )}>

            </Route>
            <Route exact path="/about" component={About}/>

            

            <Route exact path="/user/:login" component={UserDetails}/>

            
          </Switch>
          
          </div>
        </div>
        </Router>
        </AlertState>
      </GithubState>
    );
  
  
}

export default App;
