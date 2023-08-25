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
            {currentUser && currentUser.role != "Administrator" && <Link className={`list-group-item text-capitalize ${active === "profile" ? "active" : ""}`} to="/youboxd/profile"> Profile </Link>}
            {currentUser && currentUser.role === "Administrator" && <Link className={`list-group-item text-capitalize ${active === "admin" ? "active" : ""}`} to="/youboxd/admin"> Profile </Link>}
        </div>
    );
}

export default NavigationSidebar;
