import React from "react";
import { Link } from 'react-router-dom';


function StoreTable(props){

    const storeLS = [
  { SellerId: "S001", SellerName: "C.Ronaldo", ItemName: "Water Bottle", Price: "$ 45.00"},
  { SellerId: "S002", SellerName: "Bruce Lee", ItemName: "water Bottle", Price: "$ 45.00"},
  { SellerId: "S003", SellerName: "David Lee", ItemName: "Watch",Price:"$ 41.00"},
  { SellerId: "S004", SellerName: "Emily Davis", ItemName:"Water Bottle",Price:"$ 45.00"}, 
  { SellerId: "S001", SellerName: "C.Ronaldo", ItemName: "Watch", Price: "$ 41.00"},
  { SellerId: "S001", SellerName: "C.Ronaldo", ItemName: "Water Bottle", Price: "$ 45.00"},
  { SellerId: "S001", SellerName: "C.Ronaldo", ItemName: "Watch", Price: "$ 41.00"},

];

    return(

        <>
        
        
        <table className='AAtable'>
           <tr>
            <th>SellerID</th>
            <th>Seller Name</th>
            <th>Item Name</th>
            <th>Price</th>
            <th colSpan="3"></th>
            </tr>

            {storeLS.map((storeL)=>(
                <tr>
                <td>{storeL.SellerId}</td>
                <td>{storeL.SellerName}</td>
                <td>{storeL.ItemName}</td>
                <td>{storeL.Price}</td>
                <td><Link to="/AdminProfileCTable">View Listing</Link></td>
                <td><Link to="/AdminProfileCTable" className="link-red">Delete Listing</Link></td>

                </tr>





            )
        
        
        
        
        
        
        
        )}

            
        </table>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </>

    
    )



}
export default StoreTable;