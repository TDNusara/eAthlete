import React from 'react'

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

        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/>

    <Footer2/>
    </div>
    
 );
}



export default AdminStore;