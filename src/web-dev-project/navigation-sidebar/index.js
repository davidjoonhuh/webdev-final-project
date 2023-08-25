import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { useSelector } from "react-redux";
import { HiOutlineHashtag } from "react-icons/hi"
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsEnvelope, BsBookmark, BsCardList } from "react-icons/bs"
import { CiCircleMore } from "react-icons/ci";
import { BiLogIn, BiSolidRegistered } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import "./index.css"

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const active = pathname.replace("/youboxd/", "");
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="list-group  wd-margin-top-left-right">
      <Link to={"/youboxd/home"}
        className={`list-group-item ${active === "home" ? "active"
          : ""}`}>
        <div className="d-flex align-items-center">
          <AiOutlineHome /> <label
            className="d-none d-xl-flex wd-fill-width wd-padding-left-side">Youboxd</label>
        </div>
      </Link>

      <Link to={"/youboxd/search"}
        className={`list-group-item w ${active === "explore" ? "active"
          : ""}`}>
        <div className="d-flex align-items-center">
          <HiOutlineHashtag /> <label
            className="d-none d-xl-flex wd-fill-width wd-padding-left-side">Search</label>
        </div>
      </Link>

      {!currentUser && <Link to={"/youboxd/login"}
        className={`list-group-item ${active === "login"
          ? "active" : ""}`}>
        <div className="d-flex align-items-center">
          <BiLogIn /> <label
            className="d-none d-xl-flex wd-fill-width wd-padding-left-side">Login</label>
        </div>
      </Link>}

      {!currentUser && <Link to={"/youboxd/register"}
        className={`list-group-item ${active
          === "register" ? "active" : ""}`}>
        <div className="d-flex align-items-center">
          <BiSolidRegistered /> <label
            className="d-none d-xl-flex wd-fill-width wd-padding-left-side">Register</label>
        </div>
      </Link>}

      {currentUser && currentUser.role === "Administrator" &&
        <Link to={"/youboxd/admin"} className={`list-group-item ${active === "admin" ? "active" : ""}`}>
          <div className="d-flex align-items-center">
            <ImProfile /> <label className="d-none d-xl-flex wd-fill-width wd-padding-left-side">Admin</label>
          </div>
        </Link>
      }

      {currentUser && currentUser.role !== "Administrator" &&
        <Link to={"/youboxd/profile"} className={`list-group-item ${active === "profile" ? "active" : ""}`}>
          <div className="d-flex align-items-center">
            <ImProfile /> <label className="d-none d-xl-flex wd-fill-width wd-padding-left-side">Profile</label>
          </div>
        </Link>
        }

    </div>
  );
};

export default NavigationSidebar;