import React from "react";
import { Link } from 'react-router-dom';

function ProfileTable(props) {
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
                <td><Link to="/AdminProfileCTable">View Profiles</Link></td>
                <td><Link to="/AdminProfileCTable" className="link-red">Deactivate</Link></td>
              </tr>
            );
          })}


      </table>
          <p>These are the whole{props.paragraph}</p>
    </>

  )
}
export default ProfileTable;