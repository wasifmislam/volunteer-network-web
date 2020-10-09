import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Registration.css';

const Registraion = () => {



  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const onSubmit = data => console.log('fom submitted',data);
  const {volType} = useParams();
    return (
        <div >
            <form className='reg-form' onSubmit = { handleSubmit(onSubmit) } >
      < input name = "name"  defaultValue={loggedInUser.name}  ref = { register({ required: true }) } placeholder="Full Name" />
      { errors.name && <span className='error'>Full Name is required</span> }

      < input name = "email"  defaultValue={loggedInUser.email}  ref = { register({ required: true }) } placeholder="Email"  />
      { errors.email && <span className='error'>Email is required</span> }

      < input name = "date" ref = { register({ required: true }) } placeholder="Date"  />
     

      < input name = "description" ref = { register({ required: true }) } placeholder="Description"  />
      

      < input name = "task"  defaultValue={volType} ref = { register({ required: true }) } placeholder="Task"  />
      
      <br/>
      
      <Button  type="submit">Registration</Button>
           
           
           
     </form >
        </div>
    );

    }
export default Registraion;

//<Link to='/events'>   <Button >Go to</Button> </Link>