import {useState} from "react";
import {Link} from "react-router-dom";

export default function NavBar() {
    const [isActive, setIsActive] = useState(false);
    return <nav className={"navbar is-spaced"} role={"navigation"} aria-label={"main navigation"}>
        <div className={"container is-mobile"}>
        <div className={"navbar-brand"}>
            <figure className={"image mr-6 mb-auto is-128x128"}>
                <img id={"nav-logo"} src={"src/assets/nc-news-logo.png"} alt={"NC marketplace logo"}/>
            </figure>
            <a role="button"
               className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
               aria-label="menu"
               aria-expanded="false"
               data-target="main-nav-bar"
               onClick={() => {
                   setIsActive(!isActive);
               }}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id={"main-nav-bar"} className={`navbar-menu is-size-5 ${isActive ? "is-active" : ""}`}>
            <div className={"navbar-start mb-6"}>
                <Link to={"/"}><a className={"navbar-item"}>Home</a></Link>
                <Link to={"/articles"}><a className={"navbar-item"}>Articles</a></Link>
                <Link to={"/users"}><a className={"navbar-item"}>Users</a></Link>
            </div>
            <div className="navbar-end mb-6">
                <div className="navbar-item has-dropdown is-hoverable is-right">
                    <a className={"navbar-link mr-3 mb-auto"}>Username</a>
                    <div className="navbar-dropdown is-danger">
                        <a className="navbar-item">
                            Switch User
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </nav>
}