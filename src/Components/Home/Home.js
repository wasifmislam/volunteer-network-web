import React, { useEffect, useState } from 'react';
import Task from '../Task/Task';
const Home = () => {
    
    const [works, setWorks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/works')
        .then(res => res.json())
        .then(data => setWorks(data))

    }, [])
    return (
        <div className = "row">
            {
                works.map(work => <Task key={work.volType} task={work}></Task>)
            }
        </div>
    );
};

export default Home;