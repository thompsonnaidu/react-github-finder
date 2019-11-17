import React,{Component, Fragment,useState} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import User from './components/users/User';
import UserDetails from './components/users/UserDetails';
import Search from './components/users/Search';
import About from './components/pages/About';
import axios from 'axios'

const App = () => {
  
  const [users,setUsers] =useState([]);
  const [repos,setRepos] =useState([]);
  const [user,setUser] =useState({});
  const [loading,setLoading] =useState(false);
  const [alert,setAlerts] =useState(null);
  const client_id="a1af30da73995945d0c8";
  const client_secret="93e22c23fd861c5a7672fa735e9c5aab89c2c1a5";
  

 // async componentDidMount(){
  //   this.setState({loading:true});
    
  //   let endpointUrl=`https://api.github.com/users?client_id=${this.client_id}&client_secret=${this.client_secret}`;
  //   console.log(endpointUrl);
  //   //console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
  //   const res=await axios.get(endpointUrl);
  //   this.setState({loading:false,users:res.data});
    
  // }

  // add the user to state
  const searchUser=async (text)=>{
    
    setLoading(true)
    
    let endpointUrl=`https://api.github.com/search/users?q=${text}&client_id=${client_id}&client_secret=${client_secret}`;
    const res=await axios.get(endpointUrl);
    setLoading(false)
    setUsers(res.data.items)
    

  }


  //get github user repo  
  const getUserRepos= async(username)=>{
    console.log("search user with the value as ",username);
    setLoading(true)
    
    let endpointUrl=`https://api.github.com/users/${username}/repos?per_page=8&sort=created:asc&client_id=${client_id}&client_secret=${client_secret}`;
    const res=await axios.get(endpointUrl);
    // console.log(`endpoint: ${endpointUrl} response ${res.data}`)
    setRepos(res.data);
    setLoading(false)
  }

  //get github user details
  const getUser= async(username)=>{
    console.log("search user with the value as ",username);
    setLoading(true)
    
    let endpointUrl=`https://api.github.com/users/${username}?client_id=${client_id}&client_secret=${client_secret}`;
    const res=await axios.get(endpointUrl);
    console.log(`endpoint: ${endpointUrl} response ${res.data}`)
    setLoading(true)
    setUser(res.data);
  }
  //clear the user from state
  const clearUser=()=>{
    setLoading(false)
    setUsers([])
  }

  //displayAlert
  const setAlert=(msg,type)=>{
    setAlerts({msg:msg,type:type})
    setTimeout(()=> setAlerts(null),5000)
  }
  
    return (
      <Router>
      <div className="App">
        <Navbar/>
        <div className="container">
         <Alert alert={alert}/>
         <Switch>
           <Route exact path="/" render={props=>(
             <Fragment>
                <Search searchUsers={searchUser} clearUser={clearUser} showClear={users.length>0?true:false} setAlert={setAlert}/>
                <User loading={loading} users={users}/>
              </Fragment>
    )}>

           </Route>
           <Route exact path="/about" component={About}/>

           

           <Route exact path="/user/:login" render={ props=>(
             <Fragment>
               <UserDetails {...props } getUser={getUser} getUserRepos={getUserRepos} user={user} loading={loading} repos={repos}/>
             </Fragment>
           )}/>

           
         </Switch>
        
        </div>
      </div>
      </Router>

    );
  
  
}

export default App;
