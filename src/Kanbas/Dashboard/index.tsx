import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";


type Course = {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image: string;
};

function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; })
  {
  return (
    <div className="p-4" >
      <h1>Dashboard</h1>
      <h5>Course</h5>
      <div className="d-flex" style={{ marginRight: "20px" }}>
        <input value={course.name} className="form-control" style={{ marginRight: "10px" }}
              onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
        <input value={course.number} className="form-control" style={{ marginRight: "10px" }}
              onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
        <input value={course.startDate} className="form-control" style={{ marginRight: "10px" }} type="date"
              onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
        <input value={course.endDate} className="form-control" style={{ marginRight: "10px" }} type="date"
              onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
        <button className="btn btn-light" style={{ marginRight: "10px" }} onClick={addNewCourse}>Add</button>
        <button className="btn btn-light" style={{ marginRight: "10px" }} onClick={updateCourse} >Update</button>
      </div>
      <hr/>
      <h2>Published Courses ({courses.length})</h2>
      <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course: Course) => (
            <div key={course._id} className="col" style={{ width: 400 }}>
              <div className="card">
                <img
                  src={`./images/${course.image}`}
                  className="card-img-top"
                  style={{ height: 215 }}
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
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="overflow-hidden">{course.name}</div>
                      <div className="d-grid gap-2 d-md-block">
                        <button className="btn btn-secondary" style={{ fontSize: "10px", width: "50px", height: "30px", marginRight: "10px"}}
                          onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}>
                          Edit
                        </button>
                        <button className="btn btn-danger"  style={{ fontSize: "10px", width: "60px", height: "30px", marginRight: "10px"}}
                          onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}>
                          Delete
                        </button>
                      </div>
                    </div>
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
  );}


export default Dashboard;
