import React, { useContext } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
// import { UserContext } from '../../../App';

const SeeEvents = (props) => {
    const{name, email, date, task} = props.events
    // const[loggedInUser, setLoggedInUser] = useContext(UserContext)
    // const {volType} = useParams();
    return (
        <div className ="col-md-6">
            <Col>
            <Card style={{ width: '30rem', height:'15rem' , backgroundColor: 'tomaten'}}>
            <Card.Body>
            <Card.Title><h3>Voluntary Work: {task}</h3> </Card.Title>
            <Card.Title><h5>Name: {name}</h5> </Card.Title>
            <Card.Title><p>Email: {email}</p> </Card.Title>
            <Card.Title><p>Date: {date}</p> </Card.Title>
             {/* <Button onSubmit={deleteItem(`${loggedInUser._volType}`) } type ="submit">Delete</Button> */}
            </Card.Body>
            </Card>
            </Col>
        </div>
    );
   
};

export default SeeEvents;