import React from "react";

export default class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (

            <div className="page page-dashboard flex flex-row">
                <div id="notifications" className="flex flex-col flex-grow-6">
                    <h1>Notifications</h1>
                </div>
                <div id="news-content" className="flex flex-col">
                </div>
            </div>

        );
    }
}