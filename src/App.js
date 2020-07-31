import React, { Component } from 'react';
import UserList from './components/UserList';
import Search from './components/Search';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import axios from 'axios';

function App(){
  

  return (
    <Container>
      <Search/>
      <UserList/>
    </Container>
  );
}


export default App;