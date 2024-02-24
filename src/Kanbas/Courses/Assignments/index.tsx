import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { RxDragHandleDots2 } from "react-icons/rx";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { LuClipboardEdit } from "react-icons/lu";
import { IoIosAdd } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import "../Modules/index.css";
import "./index.css";

function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId
    );

    return (
        <>
            <div style={{ marginTop: "30px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <input type="text" placeholder="Search for assignment" className="search-input search-input" />
                </div>
                <div>
                    <button type="button" className="canvas-button">
                        <IoIosAdd />
                        Group
                    </button>
                    <button type="button" className="canvas-button" style={{ backgroundColor: "rgb(242, 86, 86)" }}>
                        <IoIosAdd />
                        Assignment
                    </button>
                    <button type="button" className="canvas-button">
                        <BsThreeDotsVertical />
                    </button>
                </div>
            </div>
            <hr/>

            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div>
                        <RxDragHandleDots2 className="ms-2" />
                        <span className="bold-text">ASSIGNMENTS</span>
                        <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaPlusCircle className="ms-2" />
                            <FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                </li>
                {assignmentList.map((assignment) => (
                    <li className="list-group-item">
                        <RxDragHandleDots2 className="ms-2" />
                        <span>&nbsp;</span>
                        <LuClipboardEdit className="s-2" style={{ color: "green" }} />
                        <span>&nbsp;</span>
                        <Link
                            className="ms-2"
                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        >
                            {assignment.title}
                        </Link>
                        <span className="subtext">
                        </span>
                        <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaEllipsisV className="ms-2" />
                        </span>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Assignments;
