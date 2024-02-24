import React, { useState } from "react";
import { modules } from "../../Database";
import "./index.css"
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { useParams } from "react-router";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

interface Module {
    _id: string;
    name: string;
    description: string;
    course: string;
    lessons?: Lesson[];
}

interface Lesson {
    _id: string;
    name: string;
    description: string;
    module: string;
}

interface CollapsedModules {
    [moduleId: string]: boolean;
}

function ModuleList() {
    const { courseId } = useParams<{ courseId: string }>();
    const modulesList: Module[] = modules.filter((module) => module.course === courseId);
    const [collapsedModules, setCollapsedModules] = useState<CollapsedModules>({});

    const toggleModule = (moduleId: string) => {
        setCollapsedModules(prevState => ({
            ...prevState,
            [moduleId]: !prevState[moduleId]
        }));
    };

    return (
        <div className="module-list-container">
            <div style={{ marginTop: "30px" }}>
                <button type="button" className="canvas-button">Collapse All</button>
                <button type="button" className="canvas-button">View Progress</button>
                <select id="publish-button" className="canvas-button">
                    <option selected value="Publish">Publish All</option>
                    <option value="filler1">Filler 1</option>
                    <option value="filler 2">Filler 2</option>
                    <option value="Filler 3">Filler 3</option>
                </select>
                <button type="button" className="canvas-button" style={{ backgroundColor: "rgb(242, 86, 86)" }}>
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
                    {modulesList.map((module, index) => (
                        <li key={index} className="module-list-item">
                            <div className="list-group-item canvas-button" onClick={() => toggleModule(module._id)}>
                                <FaEllipsisV className="me-2" />
                                <span className="module-name">{module.name} <IoIosArrowDown /></span>
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" />
                                    <FaPlusCircle className="ms-2" />
                                    <FaEllipsisV className="ms-2" />
                                </span>
                            </div>
                            <ul className={`list-group ${collapsedModules[module._id] ? 'collapsed' : ''}`}>
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
