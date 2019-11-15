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
            </Fragment>
        )
    }
}
