import navigation_list from "./navigation.json";
import {Link, useLocation} from "react-router-dom";

const component = function Component() {

    // get current location
    let location = useLocation();

    // helper function for determining whether a link is active
    // and should have the active className
    let currentLink = path => {
        return path === location.pathname ? "active": "";
    }


    // map through the navigation list JSON
    // and create Links with the fixed json
    let links = navigation_list.map(link => {
        return (
            <li className={"link " + currentLink(link.path)} key={link.name}>
                <Link to={link.path} title={link.name}>
                    <i className={link.icon}/>
                </Link>
            </li>
        )
    })

    return (
        <div className="app-sidebar">
            <ul className="">
                {links}
            </ul>
        </div>
    )
}

export default component;