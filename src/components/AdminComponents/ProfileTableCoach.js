import React from "react";
import { Link } from 'react-router-dom';



function ProfileTableCoach(props) {

    const cprofiles = [
    {
      id:1,
      userId: "user123",
      name: "Introduction to React",
      sport: "2023.05.15"
    },
    {
      id:2,
      userId: "user456",
      name: "Advanced CSS Techniques",
      sport: "2023.06.22"
    },
    {
      id: 3,
      userId: "user789",
      name: "JavaScript Best Practices",
      sport: "2023.07.10"
    },
    // Add more articles as needed
  ];

    return (

        <>
            <br /><br /><br />
            <table class='AProfileCoachtable'>
                <tr>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Sport</th>
                    <th colSpan="2"></th>
                </tr>

                {cprofiles.map((cprofile) =>(

                    <tr>
                    <td>{cprofile.userId}</td>
                    <td>{cprofile.name}</td>
                    <td>{cprofile.sport}</td>
                    <td><Link to="/AdminProfileCTable">View Profiles</Link></td>
                    <td><Link to="/AdminProfileCTable" className="link-red">Deactivate</Link></td>
                </tr>

                ))}


            </table>
        </>







    )
}
export default ProfileTableCoach;