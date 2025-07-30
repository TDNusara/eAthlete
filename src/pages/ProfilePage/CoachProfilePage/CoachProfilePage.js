import React, { useState } from "react";
import "./CoachProfilePage.css";
import NavbarManager from "../../../components/NavbarManager";
import Footer from "../../../components/Footer";
import LessonCard from "../../CoachModule/lessons/lessonscomponents/LessonCard";
import ProfilePhoto from "../../CoachModule/userprofiles/createplan/createplanimages/profilephoto.jpg";

function CoachProfilePage() {
    const [lessons] = useState([
        {
            title: "Defensive Techniques",
            videolink: "https://www.youtube.com/embed/dQw4w9WagXcQ",
            description: "Learn proper stance and reaction timing for defensive play.",
        },
        {
            title: "Serving Mastery",
            videolink: "https://www.youtube.com/embed/4stmd-ClpJxA",
            description: "Improve your serve consistency and power with proven drills.",
        },{
            title: "Attacking Techniques",
            videolink: "https://www.youtube.com/embed/dQw4w9WcsgXcQ",
            description: "Improve your Attack consistency and power with proven drills.",
        },
        {
            title: "Recieving Mastery",
            videolink: "https://www.youtube.com/embed/3tscmd-ClpJxA",
            description: "Learn proper stance and reaction timing for Recieve play.",
        },
    ]);

    return (
        <div className="FullPage">

            <NavbarManager />

            <div className="profileTop">
                <div className="profileInfo">
                    <div className="profilePhoto">
                        <img src={ProfilePhoto} alt="Cristiano Ronaldo" />
                        
                    </div>
                    <div className="profileData">
                        <h1>Chinthaka Malinga</h1>
                        <h5>BIO</h5>
                        <p>I am a passionate volleyball coach. committed to building confident, high performing and disciplined teams. dedication to the sport and deep understanding of player growth make him a trusted leader in the volleyball coaching field.</p>
                        <div className="profileDataShow">
                            <p>YOUR SPORT : <b>Volleyball</b></p>
                            <p>QUALIFICATION : <b>National Level Coach</b></p>
                            <p>EXPERIENCE : <b>10 Years</b></p>
                            <p>DOB : <b>1989-09-11</b></p>
                            <p>LOCATION : <b>Kandy</b></p>
                            <p>EMAIL : <b>chinthakamalinga@gmail.com</b></p>
                            <p>PHONE NUMBER : <b>+94-771551745</b></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lessonSection">
                <h3>My Lessons</h3>
                {lessons.map((lesson, index) => (
                    <LessonCard
                        key={index}
                        lessonNo={String(index + 1).padStart(2, '0')}
                        title={lesson.title}
                        videolink={lesson.videolink}
                        description={lesson.description}
                    />
                ))}
            </div>

            <Footer />
            
        </div>
    );
}

export default CoachProfilePage;