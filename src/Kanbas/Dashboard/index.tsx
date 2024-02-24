import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";


type Course = {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image: string;
};

function Dashboard() {
  if (!Array.isArray(courses)) {
    return <div>No courses available</div>;
  }

  return (
    <div className="p-4" style={{ paddingLeft: "100px" }}>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses (9)</h2>
      <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course: Course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img
                  src={`./images/${course.image}`}
                  className="card-img-top"
                  style={{ height: 150 }}
                />
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {course.name}
                  </Link>
                  <p className="card-text">{course.number} <br/>{course.startDate} to {course.endDate}</p>
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="btn btn-primary"
                  >
                    Go
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
