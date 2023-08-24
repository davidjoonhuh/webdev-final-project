// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
// const NavigationSidebar = () => {
//     const { pathname } = useLocation();
//     const { currentUser } = useSelector((state) => state.user);
//     console.log(currentUser);
//     const [ignore, youboxd, active] = pathname.split("/");
//     const links = ["search", "explore", "notifications", "messages", "bookmarks", "lists", "more"];

//     return (
//         <div className="list-group">
//             <li className="list-group-item list-group-item-action"> Youboxd </li>
//             {links.map((link, index) =>
//                 <Link to={`/youboxd/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
//                     {link}
//                 </Link>
//             )}
//             {!currentUser && <Link className={`list-group-item text-capitalize ${active === "login" ? "active" : ""}`} to="/youboxd/login">   Login   </Link>}
//             {!currentUser && <Link className={`list-group-item text-capitalize ${active === "register" ? "active" : ""}`} to="/youboxd/register">Register</Link>}
//             {currentUser && <Link className={`list-group-item text-capitalize ${active === "profile" ? "active" : ""}`} to="/youboxd/profile"> Profile </Link>}
//         </div>
//     );
// }

// export default NavigationSidebar;

import {Link, useLocation} from "react-router-dom";
import {AiOutlineHome} from "react-icons/ai";
import {useSelector} from "react-redux";
import {HiOutlineHashtag} from "react-icons/hi"
import {IoIosNotificationsOutline} from "react-icons/io";
import {BsEnvelope, BsBookmark, BsCardList} from "react-icons/bs"
import {CiCircleMore} from "react-icons/ci";
import {BiLogIn, BiSolidRegistered} from "react-icons/bi";
import {ImProfile} from "react-icons/im";
import "./index.css"

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const active = pathname.replace("/youboxd/", "");
  const {currentUser} = useSelector((state) => state.user);
  // const [ignore, youboxd, active] = pathname.split("/");
  console.log(currentUser);

  return (
      <div className="list-group  wd-margin-top-left-right">
        <Link to={"/youboxd/home"}
              className={`list-group-item ${active === "home" ? "active"
                  : ""}`}>
          <div className="d-flex align-items-center">
            <AiOutlineHome/> <label
              className="d-none d-xl-flex wd-fill-width wd-padding-left-side">Youboxd</label>
          </div>
        </Link>

        <Link to={"/youboxd/explore"}
              className={`list-group-item w ${active === "explore" ? "active"
                  : ""}`}>
          <div className="d-flex align-items-center">
            <HiOutlineHashtag/> <label
              className="d-none d-xl-flex wd-fill-width wd-padding-left-side">Explore</label>
          </div>
        </Link>
        <Link to={"/youboxd/notifications"}
              className={`list-group-item ${active === "notifications"
                  ? "active" : ""}`}>
          <div className="d-flex align-items-center">
            <IoIosNotificationsOutline/> <label
              className="d-none d-xl-flex wd-fill-width wd-padding-left-side">Notifications</label>
          </div>
        </Link>
        <Link to={"/youboxd/messages"}
              className={`list-group-item ${active === "messages" ? "active"
                  : ""}`}>
          <div className="d-flex align-items-center">
            <BsEnvelope/> <label
              className="d-none d-xl-flex wd-fill-width wd-padding-left-side">Messages</label>
          </div>
        </Link>
        <Link to={"/youboxd/bookmarks"}
              className={`list-group-item ${active === "bookmarks" ? "active"
                  : ""}`}>
          <div className="d-flex align-items-center">
            <BsBookmark/> <label
              className="d-none d-xl-flex wd-fill-width wd-padding-left-side">Bookmarks</label>
          </div>
        </Link>
        <Link to={"/youboxd/lists"}
              className={`list-group-item ${active === "lists" ? "active"
                  : ""}`}>
          <div className="d-flex align-items-center">
            <BsCardList/> <label
              className="d-none d-xl-flex wd-fill-width wd-padding-left-side">Lists</label>
          </div>
        </Link>

        <Link to={"/youboxd/more"}
              className={`list-group-item ${active === "more" ? "active"
                  : ""}`}>
          <div className="d-flex align-items-center">
            <CiCircleMore/> <label
              className="d-none d-xl-flex wd-fill-width wd-padding-left-side">More</label>
          </div>
        </Link>

        {!currentUser && <Link to={"/youboxd/login"}
                               className={`list-group-item ${active === "login"
                                   ? "active" : ""}`}>
          <div className="d-flex align-items-center">
            <BiLogIn/> <label
              className="d-none d-xl-flex wd-fill-width wd-padding-left-side">Login</label>
          </div>
        </Link>}

        {!currentUser && <Link to={"/youboxd/register"}
                               className={`list-group-item ${active
                               === "register" ? "active" : ""}`}>
          <div className="d-flex align-items-center">
            <BiSolidRegistered/> <label
              className="d-none d-xl-flex wd-fill-width wd-padding-left-side">Register</label>
          </div>
        </Link>}

        {currentUser && currentUser.role === "Administrator" ? (
            <Link to={"/youboxd/admin"} className={`list-group-item ${active === "admin" ? "active" : ""}`}>
              <div className="d-flex align-items-center">
                <ImProfile /> <label className="d-none d-xl-flex wd-fill-width wd-padding-left-side">Admin</label>
              </div>
            </Link>
        ) : (
            <Link to={"/youboxd/profile"} className={`list-group-item ${active === "profile" ? "active" : ""}`}>
              <div className="d-flex align-items-center">
                <ImProfile /> <label className="d-none d-xl-flex wd-fill-width wd-padding-left-side">Profile</label>
              </div>
            </Link>
        )}
      </div>
  );
};

export default NavigationSidebar;
