import React, { Component, Fragment} from 'react'
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner'
import {Link} from 'react-router-dom'
export default class UserDetails extends Component {

    static propTypes={
        loading:PropTypes.bool.isRequired,
        user:PropTypes.object.isRequired,
        getUser:PropTypes.func.isRequired,
    }
    componentDidMount(){
        this.props.getUser(this.props.match.params.login)
    }

    render() {
        const {loading}=this.props;
        console.log("user details",this.props.user," this is the url ",this.props.loading)
        const {
            avatar_url,
            bio,
            blog,
            company,
            email,
            followers,
            following,
            hireable,
            html_url,
            id,
            location,
            login,
            name,
            public_gists,
            public_repos
            }=this.props.user

            if (loading) return <Spinner/>

        return (
            
            <Fragment>
                <Link to="/" className="btn btn-light">Back to Search</Link>
                Hireable : {''}
                {hireable ? <i className="fas fa-check text-success"/>:<i className="fas fa-times-circle text-danger"/>}
            
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} className="round-img" alt="avatar_url" style={{width:'120px'}}/>
                        <h1 className="">{name}</h1>
                        {location && <p>Location: {location}</p>}
                    </div>
                    <div className="all-center">
                        { bio && <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>

                        }
                        <a href={html_url} className="btn btn-dark my-1">
                            Visit Github Profile
                        </a>
                        <ul>
                        {login && <Fragment>
                                <li>
                                    <strong>Username: </strong>{login}   
                                </li>
                        </Fragment>}

                        {company && <Fragment>
                                <li>
                                    <strong>Company: </strong>{company}   
                                </li>
                        </Fragment>}

                        {blog && <Fragment>
                                <li>
                                    <strong>Blog: </strong>{blog}   
                                </li>
                        </Fragment>}

                        </ul>
                    </div>
                </div>
                <div className="card text-card">
                        <div className='badge badge-primary'> Followers: {followers}</div>
                        <div className='badge badge-success'>Following: {following}</div>
                        <div className='badge badge-default'>Public Repos: {public_repos}</div>
                        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
                </div>
            </Fragment>
        )
    }
}
