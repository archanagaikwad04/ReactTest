import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "./actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import FlipMove from 'react-flip-move';
import './Users.css';
//import "./sass/app.scss";

function UserSearch(){
  const users = [
    { name: 'chris' },
    { name: 'nick' }
  ];;
  const listItems = users.map(item =>
 {
    return <div className="list" key={item.key}>
      <p>
        <input type="text" id={item.key} value={item.value} onChange={(e)=>{
              users.setUpdate(e.target.value,item.key)}}/>
              {item.value}
              <span>
                Delete
              </span>
      </p>
    </div>})
  return <div>
      <FlipMove duration={300} easing="ease-in-out">
      {listItems}
      </FlipMove>
  
  </div>;
}
export default UserSearch;