import React from "react";

class Component extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: ""
        }
    }

    updateSearch = (target) => {
        this.setState({
            searchValue: target.value
        })
    }

    clearSearch = () => {
        this.setState({
            searchValue: ""
        });
    }

    render() {
        let displayClear = this.state.searchValue.length === 0 ? "hidden" : "";
        return (
            <div className="app-search flex flex-row">
                <div className="icon"><i className="fas fa-search"/></div>
                <input id="app-header-search"
                       type="text"
                       placeholder={"Search"}
                       value={this.state.searchValue}
                       onChange={e => { this.updateSearch(e.target)}}
                />
                <div className={"btn icon close " + displayClear} onClick={()=>this.clearSearch()}><i className="fas fa-times"/></div>
            </div>
        )
    }
}

export default Component;