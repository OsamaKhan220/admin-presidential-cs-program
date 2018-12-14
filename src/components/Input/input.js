import React, { Component } from "react";

const Input = (props) => {
    const { type, name, id, onChange, label } = props;

    return (
        <div className="input-container">
            <div className="input-wrapper">
                <label htmlFor={id}>
                    <span className="label">{label}</span>
                    <input type={type} name={name} id={id} onChange={(ev) => onChange(ev)} />
                </label>
            </div>
        </div>
    )
}

const Select = (props) => {
    const { name, id, onChange, label, options } = props;

    return (
        <div className="select-container">
            <div className="select-wrapper">
                <label htmlFor={id}>
                    <span className="label">{label}</span>
                    <select onChange={(ev) => onChange(ev)} name={name} id={id}>
                        <option value="Select">Select</option>
                        {options.map((item, index) => {
                            return <option value={item.value} key={index}>{item.name}</option>
                        })}

                    </select>
                </label>
            </div>
        </div>
    )
}


export { Input, Select };