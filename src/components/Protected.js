import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'
import AddBlog from './AddBlog'

export default function Protected({isLogin,Children}) {
 
    if(!isLogin){        
                              
        return <Navigate to="/" replace/>                 
    }
    return Children;

}
