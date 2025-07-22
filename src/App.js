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
import CoachHomePage from "./pages/CoachModule/CoachHome";
import AddLessons from './pages/CoachModule/lessons/AddLessons';
import UserProfiles from './pages/CoachModule/userprofiles/UserProfiles';
import CreatePlan from './pages/CoachModule/userprofiles/createplan/CreatePlan';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import LessonListPage from "./pages/Learner/LessonListPage";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/GuestHome" replace />} />
          <Route path="/GuestHome" element={<GHome />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/Term" element={<Term />} />

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
            path="/LessonListPage"
            element={isLoggedIn ? <LessonListPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/Cover"
            element={isLoggedIn ? <LessonListPage /> : <Navigate to="/login" />}
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
