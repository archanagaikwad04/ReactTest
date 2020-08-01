import React from 'react';
import { connect } from 'react-redux';
import  { useState } from "react";
import { searchUser } from '../actions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

const Search = () => {
  const [inputval, setInputVal] = useState("");
  
    return (
     <div class="row searchform">
        <div class="col-sm-3 col-md-6 col-lg-4">
            <Form>
              <Form.Group controlId="formBasicEmail" className="searchForm" >
                <InputGroup>
                  <Form.Control
                    type="text" name="input"  
                    placeholder="Enter your search"
                  />
                </InputGroup>
              </Form.Group>
            </Form>
        </div>
      </div>
   );
 };
 const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = dispatch => ({
  searchUser: props => {
    dispatch(searchUser(props));
  }
 });
 export default Search;

  

