import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Learner.css'; // includes styles below
import Footer2 from "../../components/Footer2";
import HNavbar from "../../components/HNavbar";

const sports = ['All', 'Workout', 'Volleyball', 'Karate'];

function Coachers() {
  const [selectedSport, setSelectedSport] = useState('All');
  const [coaches, setCoaches] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let url = 'http://localhost/eAthlete/backend/api/get_coaches.php';
    if (selectedSport !== 'All') {
      url += `?sport=${selectedSport.toLowerCase()}`;
    }

    axios.get(url)
      .then(res => {
        if (Array.isArray(res.data)) {
          setCoaches(res.data);
          setError(null);
        } else {
          setCoaches([]);
          setError(res.data.error || "Unknown error occurred.");
        }
      })
      .catch(err => {
        setCoaches([]);
        setError("Server error. Please try again later.");
        console.error("Axios error:", err);
      });
  }, [selectedSport]);

  return (
    <div>
      <HNavbar />

        <div className="section coach-hero">
            <div className="container-fluid coach-frame1">
                <div className="row regframe">
                    <div className="col-sm-12 coach-herocol">
                        <h1 className="coachHtext1" style={{textAlign:"center"}}>Welcome to Your Coaching Hub</h1>
                        <h2 className="coachHtext2">Choose your <span className="coachredtext">coach</span></h2>
                    </div>
                </div>
            </div>
        </div>

      <div className="gallery-wrapper">
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
          {selectedSport === 'All' ? 'All Coaches' : `${selectedSport} Coaches`}
        </h2>

        <div className="filter-buttons">
          {sports.map((sport) => (
            <button
              key={sport}
              onClick={() => setSelectedSport(sport)}
              className={selectedSport === sport ? 'active' : ''}
            >
              {sport}
            </button>
          ))}
        </div>

        <div className="section  coach-sec">
          {error ? (
            <p className="error-msg">{error}</p>
          ) : coaches.length === 0 ? (
            <p style={{ textAlign: 'center', marginTop: '2rem' }}>
              No coaches found for {selectedSport}
            </p>
          ) : (
            <div className="container card-grid mt-4">
                <div className="row g-4">
                    {coaches.map((coach) => (
                    <div key={coach.CoachID} className="col-md-6 col-lg-6">
                        <div className="card h-100 p-3 shadow-sm bg-light">
                            <div className="row g-0">
                                {/* Left Side */}
                                <div className="col-12 col-md-4 d-flex flex-column align-items-center text-center">
                                    <h6 className="text-danger fw-bold mb-2">
                                        {coach.Sport?.toUpperCase()} COACH
                                    </h6>
                                    <div className="position-relative w-100">
                                        <img
                                        src={coach.image_url || "/default-coach.png"}
                                        alt={`${coach.FirstName} ${coach.LastName}`}
                                        className="img-fluid rounded"
                                        />
                                        {/* SELECT Button on image */}
                                        <button
                                        className="btn btn-danger position-absolute"
                                        style={{
                                            bottom: "10px",
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            fontWeight: "bold",
                                        }}
                                        >
                                        SELECT
                                        </button>
                                    </div>
                                    <h5 className="mt-3 fw-bold text-dark">
                                        {coach.FirstName.toUpperCase()} {coach.LastName.toUpperCase()}
                                    </h5>
                                </div>

                                {/* Right Side */}
                                <div className="col-12 col-md-7 mt-3 mt-md-0 ps-md-3">
                                    <p className='coachDetails'><span className='cardHeadText'>EXPERIENCE:</span>: {coach.YearsOfExperience} YEARS</p>
                                    <p className='coachDetails'><span className='cardHeadText'>LOCATION:</span> {coach.Location}</p>
                                    <p className='coachDetails'><span className='cardHeadText'>ACHIEVEMENTS:</span> {coach.Achievements}</p>
                                    <p className='coachDetails'><span className='cardHeadText'>QUALIFICATION:</span> {coach.Qualification}</p>
                                    <p className='coachDetails'><span className='cardHeadText'>CONTACT NO:</span> {coach.Phone}</p>
                                    <p className='coachDetails'><span className='cardHeadText'>EMAIL:</span> {coach.Email}</p>
                                </div>

                                <div className="coach-select-wrapper mobile-only">
                                    <button
                                        className="btn btn-danger mobile-btn position-absolute"
                                        style={{
                                            bottom: "10px",
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            fontWeight: "bold",
                                        }}
                                        >
                                        SELECT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

          )}
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Coachers;
