import React, { useState } from "react";
import db from "../../Database";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { useParams } from "react-router";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setShow,
} from "./reducer";
import { KanbasState } from "../../store";

interface CollapsedModules {
    [moduleId: string]: boolean;
}

function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>  state.modulesReducer.module);
    const showAddModule = useSelector((state: KanbasState) =>  state.modulesReducer.show);
    const dispatch = useDispatch();


    const [collapsedModules, setCollapsedModules] = useState<CollapsedModules>({});
    const toggleModule = (moduleId: string) => {
        setCollapsedModules((prevState) => ({
            ...prevState,
            [moduleId]: !prevState[moduleId],
        }));
    };


    return (
        <div className="module-list-container">
            {showAddModule && (
                <div style={{ display: "flex", marginBottom: "10px" }}>
                    <div style={{ marginRight: "10px" }}>
                        <input
                            value={module.name}
                            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                            className="form-control"
                            placeholder="Module Name"
                            aria-label="Module Name"
                        />
                    </div>
                    <div>
                        <textarea
                            style={{ marginRight: "10px", width: "500px", height: "50px"}}
                            value={module.description}
                            onChange={(e) =>  dispatch(setModule({ ...module, description: e.target.value }))}
                            className="form-control"
                            rows={3}
                            placeholder="Module Description"
                            aria-label="Module Description"
                        ></textarea>
                    </div>
                    <button
                        className="btn btn-success" style={{marginLeft :"10px", width: "70px", height: "40px"}}
                        onClick={() => dispatch(addModule({ ...module, course: courseId }))}
                    >
                        Add
                    </button>
                    <button className="btn btn-primary btn-sm" style={{marginLeft :"10px", width: "70px", height: "40px"}}
                    onClick={() => dispatch(updateModule(module))}>
                        Update
                    </button>
                </div>
            )}

            <div style={{ marginTop: "30px" }}>
                <button type="button" className="canvas-button">
                    Collapse All
                </button>
                <button type="button" className="canvas-button">
                    View Progress
                </button>
                <select id="publish-button" className="canvas-button">
                    <option selected value="Publish">
                        Publish All
                    </option>
                    <option value="filler1">Filler 1</option>
                    <option value="filler 2">Filler 2</option>
                    <option value="Filler 3">Filler 3</option>
                </select>
                <button
                    type="button"
                    className="canvas-button"
                    style={{ backgroundColor: "rgb(242, 86, 86)" }}
                    onClick={() => dispatch(setShow(!showAddModule))} 
                >
                    <IoIosAdd />
                    Module
                </button>
                <button type="button" className="canvas-button">
                    <BsThreeDotsVertical />
                </button>
            </div>
            <hr className="horizontal-bar" />

            <div className="module-list-scrollable">
                <ul className="list-group wd-modules">
                    {moduleList
                        .filter((module) => module.course === courseId)
                        .map((module, index) => (
                            <li key={index} className="module-list-item">
                                <div
                                    className="list-group-item canvas-button"
                                >
                                    <FaEllipsisV className="me-2"
                                     />
                                    <span className="module-name">
                                        {module.name} <IoIosArrowDown onClick={() => toggleModule(module._id)} />
                                    </span>
                                    <span className="float-end">
                                        <FaCheckCircle className="text-success" />
                                        <FaPlusCircle className="ms-2" />
                                        <FaEllipsisV className="ms-2" />
                                    </span>
                                    <button className="float-end"
                                        style={{
                                            backgroundColor: "rgb(242, 86, 86)", borderRadius: "5px", border: "none", fontSize: "15px"
                                            , marginRight: "10px", marginTop: "5px"
                                        }}
                                        onClick={() => {dispatch(deleteModule(module));}}>
                                        Delete
                                    </button>

                                    <button className="float-end"
                                        style={{
                                            backgroundColor: "", borderRadius: "5px", border: "none", fontSize: "15px"
                                            , marginRight: "10px", marginTop: "5px"
                                        }}
                                        onClick={() => {dispatch(setShow(!showAddModule));
                                                        dispatch(setModule(module))}}>
                                        Edit
                                    </button>

                                    <div className="description-section" style={{marginLeft: "27px", fontSize:"15px"}}>
                                        Description: {module.description}
                                    </div>
                                </div>

                                <ul //className="list-group"
                                    className={`list-group ${collapsedModules[module._id] ? "collapsed" : ""}`}
                                    onClick={() => {toggleModule(module._id)}}
                                >
                                    {module.lessons?.map((lesson, lessonIndex) => (
                                        <li className="list-group-item" key={lessonIndex}>
                                            <FaEllipsisV className="me-2" />
                                            {lesson.name}
                                            <span className="float-end">
                                                <FaCheckCircle className="text-success" />
                                                <FaEllipsisV className="ms-2" />
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default ModuleList;
