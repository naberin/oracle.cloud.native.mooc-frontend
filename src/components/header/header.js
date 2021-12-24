import {Link} from "react-router-dom";
import navigation_list from "./navigation.json";
import Search from "../search/search";

const component = function (props) {
    let title = props.title;

    let links = navigation_list.map(link => {
        return (
            <Link to={link.path} title={link.name} className="link" key={link.name}>
                <i className={link.icon}/>
            </Link>
        )
    })

    return (
        <header className={"app-header flex flex-row flex-justify-space-between"}>
            <div className={"left"}>
                <div className="app-title-container"><Link to="/" className="title">{title}</Link></div>
            </div>
            <div className={"right flex flex-row"}>
                <Search/>
                {links}
            </div>

        </header>
    )
};

export default component;