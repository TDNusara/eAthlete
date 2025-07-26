import React from "react";
import { Link } from 'react-router-dom';

function AddUserTable(props) {
  return (
    <>
      <table class='AAtable'>
        <tr>
          <th>User ID</th>
          <th>Name</th>
          <th>{props.heading}</th>
          <th colSpan="2"></th>
        </tr>

        {props.profiles.map((profile) => {
            return (
              <tr key={profile.userId}>
                <td>{profile.userId}</td>
                <td>{profile.name}</td>
                <td>{profile[props.heading]}</td>
                <td><button class ="btnA">Accept</button></td>
                <td><button class="btnA">Remove</button></td>
              </tr>
            );
          })}


      </table>
          
    </>

  )
}
export default AddUserTable;