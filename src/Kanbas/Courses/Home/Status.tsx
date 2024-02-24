import React from 'react';
import "./index.css"
import { FaFileExport, FaUpload, FaBell, FaCalendar} from "react-icons/fa6";
import { FiTarget } from "react-icons/fi";
import { BsBarChartFill } from "react-icons/bs";
import { HiSpeakerphone } from "react-icons/hi";
import { MdAnalytics } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { FaRegCheckSquare } from "react-icons/fa";

function Status() {
    return (
        <div className="flex-grow-0 me-2 d-none d-lg-block container d-flex justify-content-center align-items-center" style={{ width: '260px' }}>
            <h4>Course Status</h4>
            <button type="button" className="canvas-button2">
                <i className="fa-solid fa-circle-half-stroke"></i> Unpublish
            </button>
            <button type="button" className="canvas-button2" style={{ backgroundColor: 'rgb(122, 199, 122)' }}>
                <i className="fa-solid fa-circle-check"></i> Published
            </button>

            <button type="button" className="canvas-button3"> <FaFileExport />  Import Existing Content</button>
            <button type="button" className="canvas-button3"><FaUpload /> Import Fromt Commons</button>
            <button type="button" className="canvas-button3"> <FiTarget /> Choose Home Page</button>
            <button type="button" className="canvas-button3"> <BsBarChartFill /> View Course Stream</button>
            <button type="button" className="canvas-button3"> <HiSpeakerphone /> New Announcement</button>
            <button type="button" className="canvas-button3"> <MdAnalytics /> New Analytics</button>
            <button type="button" className="canvas-button3"><FaBell /> View Course Notification</button>

            <p />
            <h4>To Do</h4>
            <hr></hr>
            <h4>Calendar</h4>
            <div className="lecture">
                        <h6><FaRegCheckSquare/> A2: CSS + BOOSTRAP <RxCross1 className="float-end" style={{color: "black"}}/></h6>
                        <p>100 Points January 23rd at 11:59pm</p>
                    </div>
            <hr></hr>
            <ul className="list-unstyled">
                <li>
                    <div className="lecture">
                        <h6><FaCalendar/> Lecture <RxCross1 className="float-end" style={{color: "black"}}/></h6>
                        <p>CS4550.12631.202410</p>
                        <p>Sept 7 at 11:45am</p>
                    </div>
                </li>
                <li>
                    <div className="lecture">
                        <h6> <FaCalendar/>Lecture  <RxCross1 className="float-end" style={{color: "black"}}/></h6>
                        <p>CS4550.12631.202410</p>
                        <p>Sept 15 at 11:45am</p>
                    </div>
                </li>
                <li>
                    <div className="lecture">
                        <h6> <FaCalendar/> Lecture <RxCross1 className="float-end" style={{color: "black"}}/></h6>
                        <p>CS4550.12631.202410</p>
                        <p>Sept 22 at 11:45am</p>
                    </div>
                </li>
                <li>
                    <div className="lecture">
                        <h6> <FaCalendar/> Lecture <RxCross1 className="float-end" style={{color: "black"}}/> </h6>
                        <p>CS4550.12631.202410</p>
                        <p>Sept 29 at 11:45am</p>
                    </div>
                </li>
            </ul>
        </div>

    );
}


export default Status;

