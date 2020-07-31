import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import  axios from 'axios';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

function UserList() {
        
    const [getUsers, setUsers] = useState([]);
    
    useEffect(() => {
        axios.get("https://api.github.com/users")
            .then(result => 
             setUsers(result.data)
            );
    }, []);
   
    return (
        <div className="App"> 
            <ul class="list-group">    
            { 
                getUsers.map(user => (
                    <Row className="justify-content-md-center">
                        <Col md="auto" className="App"> 
                            <li class="list-group-item d-flex justify-content-between ">
                                <div class=" userimage-parent align-items-center">
                                    <img src={user.avatar_url}   className="rounded-circle" alt="User Profile" width="60" height="60"/>
                                    <a class=""  >
                                        {user.login} 
                                    </a>
                                </div>
                                <div class="align-items-right">
                                    <button type="button" class="btn btn-link btn-sm">Delete</button>
                                <lable> </lable>
                                    <button type="button" class="btn btn-link btn-sm">Edit</button>
                                </div>
                            </li>
                        </Col>
                    </Row> 
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