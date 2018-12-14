import React, { Component } from "react";
import { Select, Input } from "../Input/input"

class StudentManagment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            identity:"",
            identityValue:""
        }
    }

    Submit = (ev) => {
        ev.preventDefault();
        const { identity, identityValue } = this.state;
        



    }

    render() {
        console.log(this.props);

        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="student-form-wrapper">
                        <form action="" method="post">
                            <Select
                                label="Select Identity"
                                name="identity"
                                id="identity"
                                options={[
                                    { name: "CNIC", value: "cnic" },
                                    { name: "Number", value: "phoneNumber" },
                                    { name: "Roll Number", value: "rollNumber" },
                                    { name: "Email", value: "email" },

                                ]}
                                onChange={(ev) => this.setState({ [ev.target.name]: ev.target.value })}
                            />

                            <Input
                                label="Value"
                                type="text"
                                name="identityValue"
                                id="identityValue"
                                onChange={(ev) => this.setState({ [ev.target.name]: ev.target.value })}
                            />

                                <button type="submit">Search</button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentManagment;