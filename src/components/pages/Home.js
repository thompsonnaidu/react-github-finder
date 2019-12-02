import React,{Fragment} from 'react';
import Search from '../../components/users/Search';
import User from '../../components/users/User'
const Home = ()=>{
    return (
        <Fragment>
            <Search />
            <User/>
        </Fragment>
    )
}

export default Home