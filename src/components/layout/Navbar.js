import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Navbar =({icon,title})=> {

        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={icon}> {title}</i>
                </h1>
                <ul>
                    
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        )
    }
//react use defaultprops to save the default value for props 
Navbar.defaultProps={
    title:"Github Finder",
    icon:"fab fa-github"
 };

 //mention the type of prop.. like title is string
 Navbar.propTypes={
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
 };
export default Navbar