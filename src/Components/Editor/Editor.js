import React from 'react';
import fakeData from '../../fakeData/Fake';

const Editor = () => {
    const handleAddActivities = () => {
        fetch('http://localhost:5000/addWork', {
            method: 'POST' ,
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        })

    }
    return (
        <div>
            <button onClick={handleAddActivities}>Add Activity</button>
        </div>
    );
};

export default Editor;