import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import  axios from 'axios';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import '../Users.css';
import { useParams } from "react-router-dom";
function UserProfile() {

    const { name } = useParams();
    const [getUsers, setUsers] = useState([]);
    
    useEffect(() => {
        axios.get(url)
            .then(result => 
             setUsers(result.data)
            );
    }, []);
   
    return (
        <div className="userlist"> 
            
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