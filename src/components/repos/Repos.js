import React from 'react';
import ReposItem from './ReposItem'
import PropTypes from 'prop-types';
const Repos = ({repos}) => {
    console.log("this is ",repos);
    return repos.map( repo => <ReposItem repo= {repo} key = {repo.id}/>)
}

Repos.propTypes={
    repos: PropTypes.array.isRequired,

}
export default Repos