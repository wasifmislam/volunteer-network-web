import React, { useState } from 'react';
import fakeData from '../../fakeData/Fake'
import Task from '../Task/Task';
const Home = () => {
    const first20 = fakeData.slice(0,20);
    const [works, setWorks] = useState(first20)
    return (
        <div className = "row">
            {
                works.map(work => <Task key={work.volType} task={work}></Task>)
            }
        </div>
    );
};

export default Home;