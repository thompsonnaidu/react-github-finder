import React,{useState, useContext} from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'
const Search= ()=> {

    const githubContext=useContext(GithubContext);
    const alertContext=useContext(AlertContext);
    const [text,setText]=useState('');
    

    const onChange=(event)=>{
        setText(event.target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        if(text === ''){
            alertContext.setAlert("Please enter username","light");
        }else{
            githubContext.searchUser(text);
            setText('');
        }
        
    }




    
        return (
            <div>
                <form className="form" onSubmit={onSubmit}>
                    <input type="text" name="text" placeholder="Search users..." value={text} onChange={onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {githubContext.users.length > 0 && (
                    <button className="btn btn-light btn-block" onClick={githubContext.clearUser}>Clear</button>
                )}
                
            </div>
        )
    
}


export default Search
