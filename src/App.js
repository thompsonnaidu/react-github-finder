import React,{Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Search from './components/users/Search';
import axios from 'axios'
class App extends Component {
  
  state={
    users:[],
    loading:false
  }
  async componentDidMount(){
    this.setState({loading:true});
    
    let endpointUrl=`https://api.github.com/users?client_id=a1af30da73995945d0c8&client_secret=93e22c23fd861c5a7672fa735e9c5aab89c2c1a5`;
    console.log(endpointUrl);
    //console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    const res=await axios.get(endpointUrl);
    this.setState({loading:false,users:res.data});
    
  }

  searchUser=(text)=>{
    console.log("search user with the value as ",text);
  }
  render(){
    
    return (
      <div className="App">
        <Navbar/>
        <div className="container">
         <Search searchUsers={this.searchUser}/>
         <User loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
  
}

export default App;
