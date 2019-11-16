import React,{Component, Fragment} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import User from './components/users/User';
import UserDetails from './components/users/UserDetails';
import Search from './components/users/Search';
import About from './components/pages/About';
import axios from 'axios'

class App extends Component {
  
  client_id="a1af30da73995945d0c8";
  client_secret="93e22c23fd861c5a7672fa735e9c5aab89c2c1a5";
  state={
    users:[],
    repos:[],
    user:{},
    loading:false,
    alert:null
  }

 // async componentDidMount(){
  //   this.setState({loading:true});
    
  //   let endpointUrl=`https://api.github.com/users?client_id=${this.client_id}&client_secret=${this.client_secret}`;
  //   console.log(endpointUrl);
  //   //console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
  //   const res=await axios.get(endpointUrl);
  //   this.setState({loading:false,users:res.data});
    
  // }

  // add the user to state
  searchUser=async (text)=>{
    console.log("search user with the value as ",text);
    this.setState({loading:true});
    
    let endpointUrl=`https://api.github.com/search/users?q=${text}&client_id=${this.client_id}&client_secret=${this.client_secret}`;
    const res=await axios.get(endpointUrl);
    this.setState({loading:false,users:res.data.items});
   

  }


  //get github user repo  
  getUserRepos= async(username)=>{
    console.log("search user with the value as ",username);
    this.setState({loading:true});
    
    let endpointUrl=`https://api.github.com/users/${username}/repos?per_page=8&sort=created:asc&client_id=${this.client_id}&client_secret=${this.client_secret}`;
    const res=await axios.get(endpointUrl);
    console.log(`endpoint: ${endpointUrl} response ${res.data}`)
    this.setState({loading:false,repos:res.data});
  }

  //get github user details
  getUser= async(username)=>{
    console.log("search user with the value as ",username);
    this.setState({loading:true});
    
    let endpointUrl=`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
    const res=await axios.get(endpointUrl);
    console.log(`endpoint: ${endpointUrl} response ${res.data}`)
    this.setState({loading:false,user:res.data});
  }
  //clear the user from state
  clearUser=()=>{
    this.setState({loading:false,users:[]});
  }

  //displayAlert
  setAlert=(msg,type)=>{
    this.setState({alert:{msg:msg,type:type}})
    setTimeout(()=> this.setState({alert :null}),5000)
  }
  render(){
    
    return (
      <Router>
      <div className="App">
        <Navbar/>
        <div className="container">
         <Alert alert={this.state.alert}/>
         <Switch>
           <Route exact path="/" render={props=>(
             <Fragment>
                <Search searchUsers={this.searchUser} clearUser={this.clearUser} showClear={this.state.users.length>0?true:false} setAlert={this.setAlert}/>
                <User loading={this.state.loading} users={this.state.users}/>
              </Fragment>
    )}>

           </Route>
           <Route exact path="/about" component={About}/>

           

           <Route exact path="/user/:login" render={ props=>(
             <Fragment>
               <UserDetails {...props } getUser={this.getUser} getUserRepos={this.getUserRepos} user={this.state.user} loading={this.state.loading} repos={this.state.repos}/>
             </Fragment>
           )}/>

           
         </Switch>
        
        </div>
      </div>
      </Router>

    );
  }
  
}

export default App;
