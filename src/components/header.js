

const component = function (props) {
    let title = props.title;
    return (
        <header className={"app-header flex flex-row flex-justify-space-between"}>
            <div className={"left"}>
                <div className="title">{title}</div>
            </div>
            <div className={"right"}>

            </div>

        </header>
    )
};

export default component;