import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Task = (props) => {
    const{title,image, volType, color} = props.task;

    return (
        <div className ="col-md-3">
            
        <Col>
          
           <Card style={{ width: '18rem', height:'28rem', backgroundColor:`${color}`}}>
              <Link to={`/registration/${volType}`}>
                 <Card.Img className="img-fluid"    style={{ width:'18rem'}}  src={image} />
              </Link>
                 <Card.Body>
                    <Card.Title><h4>{title}</h4> </Card.Title>
                 </Card.Body>
           </Card>
          
        </Col>
       
   </div>
    );
};

export default Task;