
import fire from "./../fire";
import Login from './Login';
import React,  { useEffect, useState }  from 'react';
import {useHistory} from 'react-router-dom';
const Start = () => {
    let history = useHistory();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [emailError,setEmailError] = useState('');
  const [passwordError,setPasswordError] = useState('');

  const clearInputs = () => {
    setEmail('');
    setPassword('');
   };
   const clearErrors = () =>{
     setEmailError('')
     setPasswordError('');
   };
   const handleLogin = () =>{
     
    clearErrors();
    history.push("/Home");
         if(email === 'Admin@gmail.com'){
          if(password==="12345"){
           
          }else{
           setPasswordError('Incorrect Admin Password')
          }   
         }else{
         setEmailError('Incorrect Admin Username')
         }

      };
  
     
        useEffect(() => {
        }, []); // <-- should error and offer autofix to [props.name]
      



  return (
    <div className="App">
    <Login  email ={email}
     password = {password}
     setEmail = {setEmail}
     setPassword = {setPassword}
     handleLogin = {handleLogin}
     emailError = {emailError} 
     passwordError = {passwordError}  />
    </div>
  );
};

export default Start;
