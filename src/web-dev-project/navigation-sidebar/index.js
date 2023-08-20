import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const { currentUser } = useSelector((state) => state.user);
    console.log(currentUser);
    const [ignore, youboxd, active] = pathname.split("/");
    const links = ["search", "explore", "notifications", "messages", "bookmarks", "lists", "more"];

    return (
        <div className="list-group">
            <li className="list-group-item list-group-item-action"> Youboxd </li>
            {links.map((link, index) =>
                <Link to={`/youboxd/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
                    {link}
                </Link>
            )}
            {!currentUser && <Link className={`list-group-item text-capitalize ${active === "login" ? "active" : ""}`} to="/youboxd/login">   Login   </Link>}
            {!currentUser && <Link className={`list-group-item text-capitalize ${active === "register" ? "active" : ""}`} to="/youboxd/register">Register</Link>}
            {currentUser && <Link className={`list-group-item text-capitalize ${active === "profile" ? "active" : ""}`} to="/youboxd/profile"> Profile </Link>}
        </div>
    );
}

export default NavigationSidebar;