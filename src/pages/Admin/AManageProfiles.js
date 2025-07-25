import React from 'react'
import Navbar from "../../components/NavbarManager";
import Footer from '../../components/Footer';
import ProfileTable from '../../components/AdminComponents/ProfileTable';

function AManageProfiles() {
  
const profilesC = [
  { userId: "C001", name: "Michael Johnson", Sport: "Workout" },
  { userId: "C002", name: "Sarah Williams", Sport: "Volleyball" },
  { userId: "C003", name: "David Lee", Sport: "Workout" },
  { userId: "C004", name: "Emily Davis", Sport: "Volleyball" },
];

const profilesL = [
  { userId: "L001", name: "Amanda Clark", Sport: "Workout" },
  { userId: "L002", name: "Brian Adams", Sport: "Volleyball" },
  { userId: "L003", name: "Natalie Scott", Sport: "Workout" },
  { userId: "L004", name: "Daniel Martinez", Sport: "Volleyball" },
  { userId: "L005", name: "Samantha White", Sport: "Workout" },
  { userId: "L006", name: "Ethan Moore", Sport: "Volleyball" },
  { userId: "L007", name: "Olivia Taylor", Sport: "Workout" }
];


const profilesS = [
  { userId: "S001", name: "Logan Reed", BusinessId: "PV0001" },
  { userId: "S002", name: "Chloe Bennett", BusinessId: "PV0002" },
  { userId: "S003", name: "Liam Harris", BusinessId: "PV0003" },
  { userId: "S004", name: "Sophia Turner", BusinessId: "PV0004" }
];


  return (
    <div>
    <Navbar/>

    <div className='AMPBody'>
      <br /><br />
        <h2 className='AMPTopic'> Coaches</h2>
        <ProfileTable heading="Sport" profiles={profilesC} paragraph="Coaches"/>
        
        <br /><br />


        <h2 className='AMPTopic'> Learners</h2>
        <ProfileTable heading="Sport" profiles={profilesL} />
        

        <br /><br />

        <h2 className='AMPTopic'> Sellers</h2>
        <ProfileTable heading="BusinessId" profiles={profilesS} paragraph="Sellers"/>
        <br /><br />

        <br /><br /><br /><br /><br /><br /><br /><br />
</div>

      <Footer />

    </div>
 );
}



export default AManageProfiles;