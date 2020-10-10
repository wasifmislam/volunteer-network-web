import React from 'react';

const SeeEvents = (props) => {
    const{name, email, date, description, task} = props.events
    return (
        <div>
            <h3>{name}</h3>
    <h4>{email}</h4>
    <h5>{date}</h5>
    <h6>{description}</h6>
    <h6>{task}</h6>
        </div>
    );
};

export default SeeEvents;