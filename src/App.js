import React, { useState } from 'react';
import './App.css';
import GHome from "./pages/GuestHome";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Term from "./pages/TermConditions";
import LHome from "./pages/Learner/LearnerHome";
import Coachers from "./pages/Learner/Coachers";
import CoachSelect from "./pages/Learner/SelectCoach";
import CoachHomePage from "./pages/CoachModule/CoachHome";
import AddLessons from './pages/CoachModule/lessons/AddLessons';
import UserProfiles from './pages/CoachModule/userprofiles/UserProfiles';
import CreatePlan from './pages/CoachModule/userprofiles/createplan/CreatePlan';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import CoachProfilePage from './pages/ProfilePage/CoachProfilePage/CoachProfilePage';
import SellerProfilePage from './pages/ProfilePage/SellerProfilePage/SellerProfilePage';
import LearnerSchedule from "./pages/Learner/LearnerSchedule";
import KarateLessonMenu from "./pages/Learner/KarateLessonMenu";
import LessonView from "./pages/Learner/LessonView";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import AdminPanelImported from "./pages/Admin/AdminPanel";
import AdminStoreImported from "./pages/Admin/AdminStore";
import AdminArticleImported from "./pages/Admin/AdminArticle";
import AManageProfilesImported from "./pages/Admin/AManageProfiles";

import UCreateAccImported from "./pages/CreateAcc/UCreateAcc";
import CKarateCreateAccImported from "./pages/CreateAcc/CKarateCreateAcc";
import CVolleyballCreateAccImported from "./pages/CreateAcc/CVolleyballCreateAcc";
import CWorkoutCreateAccImported from "./pages/CreateAcc/CWorkoutCreateAcc";
import CSportCategory from "./pages/LoginCategory/CSportCategory";
import LSportCategory from "./pages/LoginCategory/LSportCategory";
import UCategory from "./pages/LoginCategory/UCategory";
import SCreateAccImported from './pages/CreateAcc/SCreateAcc';
import AdminPanelCardImported from "./components/AdminComponents/AdminPanelCard";
import AdminArticleTableImported from "./components/AdminComponents/ArticleTable";
import AdminProfileTableImported from "./components/AdminComponents/ProfileTable";
import AdminStoreTableImported from "./components/AdminComponents/StoreTable";
import AAddUsers from './pages/Admin/AAddUsers';
import SportCardImported from "./components/LoginComponents/SportCard1";
import UserCardImported1 from "./components/LoginComponents/UserCard1";
import TextFieldImported from './components/LoginComponents/TextField';
import UKarateCreateAccImported from './pages/CreateAcc/UKarateCreateAcc';
import AwaitingApproval from './pages/CreateAcc/AwaitingApproval';
import RegSuccess from './pages/CreateAcc/RegSuccess';

import Store from "./pages/Store/Store";
import SellerHome from "./pages/Store/Seller/SellerHome";
import AddAdvertisementPage from "./pages/Store/Seller//AddAdvertisement";
import MyAdvertisementsPage from "./pages/Store/Seller/MyAdvertisements";
import Articles from "./pages/Article/Articles";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

   const [ads, setAds] = useState([
    { id: 1, name: 'GYM SHIRT', description: 'New Arrivals Baggy Type Sports Wear', sizes: 'XL, L, M, S, XS', price: '45.00', imageUrl: 'https://placehold.co/600x400/eee/222?text=GYM+SHIRT' },
    { id: 2, name: 'GYM SHIRT', description: 'New Arrivals Baggy Type Sports Wear', sizes: 'XL, L, M, S, XS', price: '45.00', imageUrl: 'https://placehold.co/600x400/eee/222?text=GYM+SHIRT' },
    { id: 3, name: 'GYM SHIRT', description: 'New Arrivals Baggy Type Sports Wear', sizes: 'XL, L, M, S, XS', price: '45.00', imageUrl: 'https://placehold.co/600x400/eee/222?text=GYM+SHIRT' },
    { id: 4, name: 'GYM SHIRT', description: 'New Arrivals Baggy Type Sports Wear', sizes: 'XL, L, M, S, XS', price: '45.00', imageUrl: 'https://placehold.co/600x400/eee/222?text=GYM+SHIRT' },
    { id: 5, name: 'EXTRA SHIRT', description: 'This one is extra.', sizes: 'L, M', price: '50.00', imageUrl: 'https://placehold.co/600x400/eee/222?text=EXTRA' },
  ]);

  const handleAddAd = (newAd) => {
    setAds((prevAds) => [newAd, ...prevAds]);
  };

  const handleDeleteAd = (adIdToDelete) => {
    if (window.confirm("Are you sure you want to delete this listing?")) {
      setAds((prevAds) => prevAds.filter((ad) => ad.id !== adIdToDelete));
    }
  };


  const handleLogin = () => setIsLoggedIn(true);
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/GuestHome" replace />} />
          <Route path="/GuestHome" element={<GHome />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/Term" element={<Term />} />
          <Route path="/AwaitingApproval" element={<AwaitingApproval />} />
          <Route path="/CoachSelect" element={<CoachSelect /> }/>
          <Route path="/RegSuccess" element={<RegSuccess /> }/>

          {/* Protected Routes */}
          <Route
            path="/LearnerHome"
            element={isLoggedIn ? <LHome /> : <Navigate to="/login" />}
          />
          <Route
            path="/CoachHomePage"
            element={isLoggedIn ? <CoachHomePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/AddLessons"
            element={isLoggedIn ? <AddLessons /> : <Navigate to="/login" />}
          />

          <Route
            path="/UserProfiles"
            element={isLoggedIn ? <UserProfiles /> : <Navigate to="/login" />}
          />
          <Route
            path="/CreatePlan"
            element={isLoggedIn ? <CreatePlan /> : <Navigate to="/login" />}
          />
          <Route
            path="/ProfilePage"
            element={isLoggedIn ? <ProfilePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/CoachProfilePage"
            element={isLoggedIn ? <CoachProfilePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/SellerProfilePage"
            element={isLoggedIn ? <SellerProfilePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/About"
            element={isLoggedIn ? <About /> : <Navigate to="/login" />}
          />
          <Route
            path="/Contact"
            element={isLoggedIn ? <Contact /> : <Navigate to="/login" />}
          />
          <Route
            path="/Coachers"
            element={isLoggedIn ? <Coachers /> : <Navigate to="/login" />}
          />
          
          <Route
            path="/LearnerSchedule"
            element={isLoggedIn ? <LearnerSchedule /> : <Navigate to="/login" />}
          />
          <Route
            path="/KarateLessonMenu"
            element={isLoggedIn ? <KarateLessonMenu /> : <Navigate to="/login" />}
          />
          <Route
            path="/LessonView"
            element={isLoggedIn ? <LessonView /> : <Navigate to="/login" />}
          />
          <Route
            path="/Coachers/karate"
            element={isLoggedIn ? <Coachers filterSport="karate" /> : <Navigate to="/login" />}
          />
          <Route
            path="/Coachers/volleyball"
            element={isLoggedIn ? <Coachers filterSport="volleyball" /> : <Navigate to="/login" />}
          />
          <Route
            path="/Coachers/workout"
            element={isLoggedIn ? <Coachers filterSport="workout" /> : <Navigate to="/login" />}
          />

          <Route
            path="/Store"
            element={isLoggedIn ? <Store /> : <Navigate to="/login" />}
          />
          <Route
            path="/SellerHome"
            element={isLoggedIn ? <SellerHome /> : <Navigate to="/login" />}
          />
          <Route
            path="/MyAdvertisements"
            element={<MyAdvertisementsPage ads={ads} onDeleteAd={handleDeleteAd} />}
          />
          <Route
            path="/AddAdvertisement"
            element={<AddAdvertisementPage onAddAd={handleAddAd} />}
          />
          <Route
            path="/Articles"
            element={isLoggedIn ? <Articles /> : <Navigate to="/login" />}
          />
          <Route
            path="/AddUsers"
            element={isLoggedIn ? <AAddUsers /> : <Navigate to="/login" />}
          />
          
          

          {/* Rout try by Vindya-start */}
        
          <Route path="/UserCreateAcc" element={<UCreateAccImported />} />
          <Route path="/CoachKCreateACC" element={<CKarateCreateAccImported />} />
          <Route path="/CoachVCreateACC" element={<CVolleyballCreateAccImported />} />
          <Route path="/CoachWCreateAcc" element={<CWorkoutCreateAccImported />} />
          <Route path="/CoachSportCategoryLogin" element={<CSportCategory />} />
          <Route path="/LearnerSportCategoryLogin" element={<LSportCategory />} />


          <Route path="/UserCategoryLogin" element={<UCategory />} />
          <Route path="/SellerCreateAcc" element={<SCreateAccImported />} />
         
          <Route path="/SportCard" element={<SportCardImported />} />
          <Route path="/UserCard1" element={<UserCardImported1 />} />
          <Route path="/TextField" element={< TextFieldImported/>} />
          <Route path="/KarateCreateAcc" element={< UKarateCreateAccImported/>} />


          {/* Rout try by Vindya-end */}

          {/* Route by Vindya-start */}

          <Route 
            path="/AdminPanelUrl" 
            element={isLoggedIn ? <AdminPanelImported /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/AdminStore" 
            element={isLoggedIn ? <AdminStoreImported /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/AdminArticle" 
            element={isLoggedIn ? <AdminArticleImported /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/AManageProfiles" 
            element={isLoggedIn ? <AManageProfilesImported /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/AdminProfileTable" 
            element={isLoggedIn ? <AdminProfileTableImported /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/AdminStoreTable" 
            element={isLoggedIn ? <AdminStoreTableImported /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/AdminPanelCard" 
            element={isLoggedIn ? <AdminPanelCardImported /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/AdminArticleTable" 
            element={isLoggedIn ? <AdminArticleTableImported /> : <Navigate to="/login" />} 
          />

          {/* Route by Vindya-end */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
