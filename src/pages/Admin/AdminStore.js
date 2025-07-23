import React from 'react'
import SNavbar from "../../components/SNavbar";
import Footer from '../../components/Footer';
import StoreTable from '../../components/AdminComponents/StoreTable';

function AdminStore() {

  
  

  return (
    
    <div>
    <SNavbar/>

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