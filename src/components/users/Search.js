import React,{useState} from 'react'
import PropTypes from 'prop-types'

const Search= ({ searchUsers,setAlert,clearUser,showClear})=> {

    const [text,setText]=useState('');
    

    const onChange=(event)=>{
        setText(event.target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        if(text === ''){
            setAlert("Please enter username","light");
        }else{
            searchUsers(text);
            setText('');
        }
        
    }

    const clearUsers= (event)=>{
        event.preventDefault();
        clearUser();
    }



    
        return (
            <div>
                <form className="form" onSubmit={onSubmit}>
                    <input type="text" name="text" placeholder="Search users..." value={text} onChange={onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {showClear && (
                    <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
                )}
                
            </div>
        )
    
}

Search.propTypes ={
    searchUsers:PropTypes.func.isRequired,
    clearUser:PropTypes.func.isRequired,
    showClear:PropTypes.bool.isRequired,
    setAlert:PropTypes.func.isRequired
}

export default Search
