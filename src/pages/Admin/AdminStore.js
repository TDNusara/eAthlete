import React from 'react'
import Navbar from "../../components/NavbarManager";
import Footer from '../../components/Footer';
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

    <Footer/>
    </div>
    
 );
}



export default AdminStore;