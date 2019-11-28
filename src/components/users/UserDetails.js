import React, { Fragment,useEffect,useContext} from 'react'
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner'
import {Link} from 'react-router-dom'
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

 const UserDetails = ({match}) => {
    const githubContext=useContext(GithubContext);

    const {user,loading,repos}= githubContext;
    useEffect(()=>{
        githubContext.getUser(match.params.login);
        githubContext.getUserRepos(match.params.login)
        //eslint-disable-next-line
    },[])
    
       
        const {
            avatar_url,
            bio,
            blog,
            company,
            followers,
            following,
            hireable,
            html_url,
            location,
            login,
            name,
            public_gists,
            public_repos
            }=user

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
                        <a href={html_url} target="_blank" className="btn btn-dark my-1">
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
                        <div className='badge badge-success'> Followers: {followers}</div>
                        <div className='badge badge-primary'>Following: {following}</div>
                        <div className='badge badge-default'>Public Repos: {public_repos}</div>
                        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
                </div>

                <Repos repos={repos}/>
            </Fragment>
        )
}



export default UserDetails