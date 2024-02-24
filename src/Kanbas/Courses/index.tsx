import { useEffect, useState } from "react";
import { useLocation, useParams, Routes, Route, Navigate } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { MdKeyboardArrowRight } from "react-icons/md";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import { courses } from "../../Kanbas/Database";
import "./index.css";

function Courses() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);

    const [currentRoute, setCurrentRoute] = useState("Home");


    const location = useLocation();


    useEffect(() => {
        const pathSegments = location.pathname.split("/");
        const lastSegment = pathSegments[pathSegments.length - 1];
        setCurrentRoute(lastSegment || "Home");
    }, [location]);

    return (
        <div className="course-wrapper">
            <div className="course-bar">
                <HiMiniBars3 />
                <span className="course-name">{course?.name}</span>
                <MdKeyboardArrowRight />
                <span className="course-name" style={{ color: "black" }}>{currentRoute}</span> {/* Update course name dynamically */}
            </div>
            <hr className="horizontal-bar2"/>
            <div className="content-wrapper">
                <CourseNavigation />
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{ left: "250px", top: "50px" }} >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home/>} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Piazza" element={<a href="https://piazza.com"></a>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                        <Route path="Grades" element={<h1>Grades</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Courses;
