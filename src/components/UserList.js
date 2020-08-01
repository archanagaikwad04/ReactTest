import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import  axios from 'axios';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import '../Users.css';

export const url = "https://api.github.com/users";

function UserList() {
        
    const [getUsers, setUsers] = useState([]);
    
    useEffect(() => {
        axios.get(url)
            .then(result => 
             setUsers(result.data)
            );
    }, []);
   
    return (
        <div className="userlist"> 
            <ul class="list-group">    
            { 
                getUsers.map(user => (
                    <li className="list-group-item d-flex justify-content-between ">
                        <div class=" table-list-cell py-3 pr-0 text-center v-align-middle" style={{width: 72 + 'px'}}>
                        <img src={user.avatar_url}   class="avatar avatar-user "  alt="User Profile" width="60" height="60"/>
                        </div>
                        <div class="table-list-cell py-3 v-align-middle css-truncate pl-3" style={{width: 200 + 'px'}}>
                            <a href="" className="css-truncate-target f4" style={{maxWidth: 180 + 'px'}} >
                            {user.login} 
                            </a>
                        </div>
                        <div className="text-center text-gray table-list-cell py-3 v-align-middle f5 text-right" style={{width: 700 + 'px'}}>
                            <button type="button" className="btn btn-sm btn-link ">Delete</button>
                            <button type="button" className="btn btn-sm btn-link ">Edit</button>
                        </div>
                    </li>                   
                 ))
            }      
            </ul>  
        </div>
    );
}
 
const mapStateToProps = (state) => {
    return {
        username:  state.username,
        userProfile: state.userProfile,
        repos: state.repos
 
    }
}
 
export default connect(mapStateToProps)(UserList);