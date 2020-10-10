import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SeeEvents = (props) => {
    const{name, email, date, description, task} = props.events
    return (
        <div className ="col-md-6">
            <Col>
            <Card style={{ width: '30rem', height:'15rem' , backgroundColor: 'tomaten'}}>
            <Card.Body>
            <Card.Title><h3>Voluntary Work: {task}</h3> </Card.Title>
            <Card.Title><h5>Name: {name}</h5> </Card.Title>
            <Card.Title><p>Email: {email}</p> </Card.Title>
            <Card.Title><p>Date: {date}</p> </Card.Title>
            {/* <h3>{name}</h3>
            <h4>{email}</h4>
            <h5>{date}</h5>
            <h6>{description}</h6>
            <h6>{task}</h6> */}
            </Card.Body>
            </Card>
            </Col>
        </div>
    );
};

export default SeeEvents;