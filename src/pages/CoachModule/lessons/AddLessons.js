import React, { useState } from "react";
import "./AddLessons.css";
import Footer from "../../../components/Footer";
import HNavbar from "../../../components/HNavbar";
import PageTop from "../coachcomponents/PageTop";
import AddButton from "./lessonscomponents/AddButton";
import LessonCard from "./lessonscomponents/LessonCard";

function AddLessons() {
    const [lessons, setLessons] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({ title: "", description: "" });

    const togglePopup = () => setShowPopup(!showPopup);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.title && formData.description) {
            setLessons([...lessons, { ...formData }]);
            setFormData({ title: "", description: "" });
            setShowPopup(false);
        }
    };

    return (
        <div>
            <HNavbar />
            <div className="PageMiddle">
                <div className="MiddleAddLesson">
                    <PageTop title="SPORT NAME" topic="Lessons" />
                </div>

                <AddButton onClick={togglePopup} />

                {showPopup && (
                    <div className="popup-overlay">
                        <div className="popup-content">
                            <div className="popup-contentBox">

                                <span className="close-btn" onClick={togglePopup}>
                                    &times;
                                </span>
                                <h2>Add New Lesson</h2>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Lesson Title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="popup-textField"
                                        required
                                    />
                                    <textarea
                                        name="description"
                                        placeholder="Description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        className="popup-textField"
                                        required
                                    />
                                    <input
                                        type="link"
                                        name="videolink"
                                        placeholder="Video Link"
                                        value={formData.videolink}
                                        onChange={handleChange}
                                        className="popup-textField"
                                        required
                                    />
                                    <button type="submit" className="popup-submit">Add Lesson</button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}

                {lessons.map((lesson, index) => (
                    <LessonCard
                        key={index}
                        lessonNo={String(index + 1).padStart(2, '0')}
                        title={lesson.title}
                        videolink={lesson.videolink}
                        description={lesson.description}
                    />
                ))}
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AddLessons;
