import React,{Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import axios from 'axios'
class App extends Component {
  
  state={
    user:[],
    loading:false
  }
  async componentDidMount(){
    this.setState({loading:true});
    const res=await axios.get('https://api.github.com/users')
    this.setState({loading:false,users:res.data});
    res.data.map((datas)=>{console.log(datas)})
    this.state.users.map((da)=>{console.log(da)})
  }

  render(){
    
    return (
      <div className="App">
        <Navbar/>
        <div className="container">
          {console.log("app.sj",typeof this.state.users)}
          <User loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
  
}

export default App;
