import React, { Component } from 'react'

export default class Search extends Component {
    state={
        text:''
    }

    onChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    onSubmit=(event)=>{
        event.preventDefault();
        
        this.props.searchUsers(this.state.text);
        this.setState({text:''})
    }
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" placeholder="Search users..." value={this.state.text} onChange={this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}
