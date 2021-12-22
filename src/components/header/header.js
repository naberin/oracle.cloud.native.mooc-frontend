import {Link} from "react-router-dom";
import navigation_list from "./navigation.json";

const component = function (props) {
    let title = props.title;

    let links = navigation_list.map(link => {
        return (
            <li className="link" key={link.name}>
                <Link to={link.path} title={link.name}>
                    <i className={link.icon}/>
                </Link>
            </li>
        )
    })

    return (
        <header className={"app-header flex flex-row flex-justify-space-between"}>
            <div className={"left"}>
                <div className="title">{title}</div>
            </div>
            <ul className={"right flex flex-row"}>
                {links}
            </ul>

        </header>
    )
};

export default component;