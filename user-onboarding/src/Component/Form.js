import React from 'react';

const Form = (props) => {
    const {change, submit} = props;
    const {name, email, password, ToS,} = props.values;

    const onChange = (evt) => {
        const {name,value,checked,type} = evt.target
        const newValue = type === 'checkbox' ? checked : value;
        change (name, newValue);
    }

    const onSubmit = (evt) => {
        evt.preventDefualt();
        submit();
    }

    return (
        <div>
        <h1>Form</h1>
        <form onSubmit={onSubmit}>
            <label>Name:
                <input
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                />
            </label>
            <label>Email:
            <input
                type="text"
                name="email"
                value={email}
                onChange={onChange}
                />
            </label>
            <label>Password
            <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                />
            </label>
            <label>Terms of Service
            <input
                type="checkbox"
                name="ToS"
                checked={ToS}
                onChange={onChange}
                />
            </label>
            <input type="submit" value="Create Form" />
        </form>
        </div>
    )
}


export default Form;