import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaClock, FaSignOutAlt} from "react-icons/fa";
import { IoMailUnreadSharp } from "react-icons/io5";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoIosHelpCircle } from "react-icons/io";
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",  icon: <IoMailUnreadSharp className="fs-2"/> },
    { label: "History",  icon: <FaClock className="fs-2" /> },
    { label: "Studio",  icon: <MdOutlineOndemandVideo className="fs-2" /> },
    { label: "Commons",  icon: <FaSignOutAlt className="fs-2" /> },
    { label: "Help",  icon: <IoIosHelpCircle className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
        <li><a href="http://northeastern.edu">
            <img src="../../images/neu.png" alt="Northeastern University Logo"/>  
        </a></li>
         {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}>
            <span className={link.label === "Account" ? "account-icon" : "fs-2"} style={{color: (link.label === "Account" && pathname.includes(link.label)) ? "red" : (pathname.includes(link.label) ? "red" : "white")}}>
              {link.icon}
            </span>
            {link.label}  
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;
