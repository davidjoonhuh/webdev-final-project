import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
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
      </div>
  );
}

export default NavigationSidebar;