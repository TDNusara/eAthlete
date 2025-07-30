

import { Link } from 'react-router-dom';
import AddUserTable  from '../../components/AdminComponents/AddUserTable';
import Navbar from "../../components/NavbarManager";
import Footer2 from '../../components/Footer2';

function AAddUsers() {


    const profilesC = [
  { userId: "C001", name: "Michael Johnson", Sport: "Workout" },
  { userId: "C002", name: "Sarah Williams", Sport: "Volleyball" },
  { userId: "C003", name: "David Lee", Sport: "Workout" },
  { userId: "C004", name: "Emily Davis", Sport: "Volleyball" },
];
    const profilesS = [
  { userId: "S001", name: "Logan Reed", BusinessId: "PV0001" },
  { userId: "S002", name: "Chloe Bennett", BusinessId: "PV0002" },
  { userId: "S003", name: "Liam Harris", BusinessId: "PV0003" },
  { userId: "S004", name: "Sophia Turner", BusinessId: "PV0004" }
];

    return(

         <div>
          <Navbar/>
          <div className='AMPBody'>
        
      <br /><br />
        <h2 className='AMPTopic'> Coaches</h2>
        <AddUserTable heading="Sport" profiles={profilesC} />
        
        <br /><br />

        
        <h2 className='AMPTopic'> Sellers</h2>
        <AddUserTable heading="BusinessId" profiles={profilesS} />
        <br /><br />
       <div className='btnGroup'>
          <button className="btnL"><Link to="/AdminPanelUrl">Back To Admin Panel</Link></button>
        </div>           
        <br /><br /><br /><br /><br /><br /><br /><br />
        
</div>
<Footer2/>
         </div>


        

    )
}
  export default AAddUsers;