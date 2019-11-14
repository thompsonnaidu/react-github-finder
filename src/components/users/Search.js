import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Search extends Component {
    state={
        text:''
    }

    static propTypes ={
        searchUsers:PropTypes.func.isRequired,
        clearUser:PropTypes.func.isRequired,
        showClear:PropTypes.bool.isRequired,
        setAlert:PropTypes.func.isRequired
    }

    onChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    onSubmit=(event)=>{
        event.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert("Please enter username","light");
        }else{
            this.props.searchUsers(this.state.text);
            this.setState({text:''})
        }
        
    }

    clearUser= (event)=>{
        event.preventDefault();
        this.props.clearUser();
    }



    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" placeholder="Search users..." value={this.state.text} onChange={this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {this.props.showClear && (
                    <button className="btn btn-light btn-block" onClick={this.clearUser}>Clear</button>
                )}
                
            </div>
        )
    }
}
