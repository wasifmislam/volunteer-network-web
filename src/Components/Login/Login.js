import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App'
import { Container, Form, Card } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import { useHistory, useLocation } from 'react-router-dom';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
         
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from);
         
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });

    }
    return (
        // <div>
        //     <h1>This is Login</h1>
        //     <button onClick={handleGoogleSignIn}>Google Sign in</button>
        // </div>
        <Container  style={{textAlign:'center'}} component="main" maxWidth="xs">
            
           {/* <div style={{textAlign:'center'}}> */}
            
                <Form >
                    <br></br>
                    <h4>Login With</h4>
                    <br/><br/>
                        <GoogleButton onClick={handleGoogleSignIn} variant="primary" type="submit"> </GoogleButton>
                </Form>
                
            {/* </div> */}
        </Container>
       
    );
};

export default Login;