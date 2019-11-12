import React, { Component } from 'react'
import UserItem from './UserItem';

class User extends Component {

    render() {
        const ad=this.props.users;
        return (
            <div style={userStyle}>

                {
                  
                //     this.props.users.map( user =>(
                //   //  <div>{user.id}</div>
                //      <UserItem key={user.id} user={user}/>
                //     ))
                //    console.log(ads)
                
                // this.props.users.forEach(user => {
                //     // <UserItem key={user.id} user={user}/>.
                //     console.log(user);
                // })  
            
                }
            </div>
        )
    }
}

const userStyle={
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap:'1rem'
}

export default User
