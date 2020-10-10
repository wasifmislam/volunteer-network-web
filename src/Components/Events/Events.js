import { Button, Card } from '@material-ui/core';
import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Events = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <Card>
               
    <h1>{loggedInUser.name}</h1>
                    <h4>evebts</h4>
                    
                     {/* <Button onClick ="deleteItem('$props_volType')">Delete</Button> */}
                
                </Card>
        </div>
    );
};

export default Events;