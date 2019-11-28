import React,{useContext}from 'react'

import AlertContext from '../../context/alert/alertContext'
const Alert = () => {
    const alertContext=useContext(AlertContext);
    
    let alert= alertContext;
    if(alert.alert!=null){
        alert=alert.alert
    }else{
        alert=null;
    }
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle"/>{alert.msg}
            </div>
        )
       )
}


export default Alert;