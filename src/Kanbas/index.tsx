import KanbasNavigation from "./Navigation/KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });

  const addNewCourse = () => {
    // check if the course with the same _id already exists
    const isExisting = courses.some(c => c._id === course._id);

    // if the course already exists, don't add it again because you should only
    // be able to either edit or delete
    if (isExisting) {
      setCourse({
        _id: "0",
        name: "Cannot add while editing a course",
        number: "Please choose again or enter new course",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
     });

        return;
    }

    // If the course doesn't exist, add it to the courses array
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);

    setCourse({
      _id: "0",
      name: "New Course was successfully added!",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
   });
};


  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => {
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      );
  
        
    setCourse({
        _id: "0",
        name: "Enter New Course",
        number: "Enter New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
    });
};


  return (
    <Provider store={store}>
      <div className="d-flex">
      <KanbasNavigation />
      <div className="content-column">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={
            <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>} />
          <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
        </Routes>
      </div>
    </div>
    </Provider>
    
  );
}

export default Kanbas;
