import React from 'react'
import Navbar from "../../components/NavbarManager";
import Footer2 from '../../components/Footer2';
import StoreTable from '../../components/AdminComponents/StoreTable';
import "../../css/Admin.css"
import { Link } from 'react-router-dom';

function AdminStore() {

  
  

  return (
    
    <div>
    <Navbar/>

        <div className='AMPBody'>

        <br/><br/>

        <h2 className="ASTopic">Listing</h2>
        <StoreTable/>

        </div>
        <br /><br />
        <div className='btnGroup'>
          <button className="btnL"><Link to="/AdminPanelUrl">Back To Admin Panel</Link></button>
        </div> 
        <br/><br/><br/><br/><br/><br/><br/><br/>

    <Footer2/>
    </div>
    
 );
}



export default AdminStore;