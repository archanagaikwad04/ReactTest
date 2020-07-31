import React from 'react';
import { connect } from 'react-redux';
import  { useState } from "react";
import { searchUser } from '../actions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



const Search = () => {
  const [inputval, setInputVal] = useState("");
  

    return (
      <Form 
      >
          <Form.Group controlId="formBasicEmail" className="searchForm" >
            <InputGroup>
              <Form.Control
                type="text" name="input"  
                placeholder="Enter an item"
                
              />
              
            </InputGroup>
          </Form.Group>
        </Form>
   );
 };
 const mapStateToProps = (state) => ({
  //article: state.news,
})

const mapDispatchToProps = dispatch => ({
  searchUser: props => {
    dispatch(searchUser(props));
  }
 });
 export default Search;

  

