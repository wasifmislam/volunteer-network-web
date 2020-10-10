import { Button, Card } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import SeeEvents from './SeeEvents/SeeEvents';

const Events = () => {
    const [eventRegistration, setEventRegistration] = useState([])
    console.log(eventRegistration)

    useEffect(()=>{
        fetch('http://localhost:5000/enrolledEvents')
        .then(res => res.json())
        .then(data => setEventRegistration(data))
    }, [])

    return (
        <div>
            <Card>
               
    {/* <h1>{loggedInUser.name}</h1> */}
                    <h4>events</h4>
                    
                     {/* <Button onClick ="deleteItem('$props_volType')">Delete</Button> */}
                     {
                         eventRegistration.map(events => <SeeEvents events={events}></SeeEvents> )
                     }
                
                </Card>
        </div>
    );
};

export default Events;