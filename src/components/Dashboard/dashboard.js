import React, { Component } from "react";
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    ChangeComponent = (ev) => {
        ev.preventDefault();

    }
    render() {

        return (
            <div className="container-fuid">
                <div className="container">
                    <div className="row">
                       Dashboard
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard; 