import React, { Component } from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


class SideBar extends Component {
    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="group-links">
                            <Link to="/student">Student</Link>
                            <Link to="/admin">Admin</Link>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;