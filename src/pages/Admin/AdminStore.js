import React from 'react'
import { Link } from 'react-router-dom';
import Footer2 from "../../components/Footer2";
import Navbar from "../../components/NavbarManager";

import StoreTable from '../../components/AdminComponents/StoreTable';

function AdminStore() {

  
  

  return (
    
    <div>
    <Navbar/>

        <div className='AMPBody'>

        <br/><br/>

        <h2 className="ASTopic">Listing</h2>
        <StoreTable/>
         <div className='btnGroup'>
                  <button className="btnL"><Link to="/AdminPanelUrl">Back To Admin Panel</Link></button>
         </div>

        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/>

    <Footer2/>
    </div>
    
 );
}



export default AdminStore;