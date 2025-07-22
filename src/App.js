import React, { useState } from 'react';
import './App.css';
import './css/Admin.css'
import './css/LoginRegistration.css'

/*import SNavbar from "./components/SNavbar";
import HNavbar from "./components/HNavbar";*/
import GHome from "./pages/GuestHome";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Term from "./pages/TermConditions";
import LHome from "./pages/Learner/LearnerHome";
import Coachers from "./pages/Learner/Coachers";
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
import SportCardImported from "./components/LoginComponents/SportCard";
import UserCardImported1 from "./components/LoginComponents/UserCard1";
import TextFieldImported from './components/LoginComponents/TextField';
import UKarateCreateAccImported from './pages/CreateAcc/UKarateCreateAcc';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  return (
    <Router>
      <div>
        {/*
        {isLoggedIn ? <HNavbar onLogout={handleLogout} /> : <SNavbar />}
        <Routes>
          <Route path="/" element={<Navigate to="/GuestHome" replace />} />
          <Route path="/GuestHome" element={<GHome />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          {isLoggedIn ? (
            <>
              <Route path="/LearnerHome" element={<LHome />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
              <Route path="/Term" element={<Term />} />
            </>
          ) : (
            <>
              <Route path="/LearnerHome" element={<Navigate to="/login" />} />
              <Route path="/About" element={<Navigate to="/login" />} />
              <Route path="/Contact" element={<Navigate to="/login" />} />
              <Route path="/PrivacyPolicy" element={<Navigate to="/PrivacyPolicy" />} />
              <Route path="/Term" element={<Navigate to="/Term" />} />
            </>
          )}
        </Routes>
        */}
        <Routes>
          <Route path="/" element={<Navigate to="/GuestHome" replace />} />
          <Route path="/GuestHome" element={<GHome />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/Term" element={<Term />} />


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

          <Route path="/AdminPanelUrl" element={<AdminPanelImported />} />

          <Route path="/AdminStore" element={<AdminStoreImported />} />
          <Route path="/AdminArticle" element={<AdminArticleImported />} />
          <Route path="/AManageProfiles" element={<AManageProfilesImported />} />

          <Route path="/AdminProfileTable" element={<AdminProfileTableImported />} />
          <Route path="/AdminStoreTable" element={<AdminStoreTableImported />} />
          <Route path="/AdminPanelCard" element={<AdminPanelCardImported />} />
          <Route path="/AdminArticleTable" element={<AdminArticleTableImported />} />          

          {/* Route by Vindya-end */}




          {/* Protected Routes */}
          <Route
            path="/LearnerHome"
            element={isLoggedIn ? <LHome /> : <Navigate to="/login" />}
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
