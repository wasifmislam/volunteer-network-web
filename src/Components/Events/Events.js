import { Button, Card } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import SeeEvents from './SeeEvents/SeeEvents';

const Events = () => {
    const [eventRegistration, setEventRegistration] = useState([])
    const[loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(eventRegistration)

    useEffect(()=>{
        fetch('http://localhost:5000/enrolledEvents?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setEventRegistration(data))
    }, [])

    return (
        <div className = "row">
            
               
    
                    
                    
                     
                     {
                         eventRegistration.map(events => <SeeEvents events={events}></SeeEvents> )
                     }
                
                
        </div>
    );
};

export default Events;