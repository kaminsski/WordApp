import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { json } from 'react-router-dom';

function Register() {
    const[username,setUsername] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    
    const[usernameError,setUsernameError] = useState(null)
    const[passwordError,setPasswordError] = useState(null)



    const submitHandle = async (e) => {
      e.preventDefault();
      const newUser = {
          username,
          password,
          email
      };
  
      try {
          const response = await fetch("https://word-app-seven.vercel.app/api/user/register", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(newUser),
          });
  
          if (response.ok) {
            const responseData = await response.json(); // Assuming the response is in JSON format
            document.cookie = `user=${JSON.stringify(responseData)}; expires=${new Date(Date.now() + 86400e3).toUTCString()}; path=/`;
            return (window.location.href = "/");
          } else {
              const responseError = await response.json()
              if(responseError.message.includes("Username")){
                setUsernameError(responseError.message)

              }
              if(responseError.message.includes("Password")){
                setPasswordError(responseError.message)

              }
              
              

          }
      } catch (error) {
          
      }
  };
  const userInputHandle = (e) =>{
     if(e.target.value.length >= 3)
      setUsernameError(null)   
  }

  const passwordInputHandle = (e) =>{
    if(e.target.value.length >= 6)
     setPasswordError(null)   
 }
  
  return (
    <div className="row justify-content-center mt-5">
        <div className="col-10 col-lg-6">
    <Form onSubmit={submitHandle} className='bg-white p-3 bg-opacity-75'>
      <Form.Group className="mb-3" controlId="Username">
        <Form.Label className='fw-bolder'>Username</Form.Label>
        <Form.Control value={username} onKeyUp={userInputHandle} onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder="Enter username" />
        {usernameError && 
        <Form.Text className="bg-warning p-1 rounded-4">
        {usernameError && usernameError}
       </Form.Text>}
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="Email">
        <Form.Label className='fw-bolder'>Email address</Form.Label>
        <Form.Control value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="Password">
        <Form.Label className='fw-bolder'>Password</Form.Label>
        <Form.Control onKeyUp={passwordInputHandle} value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" />
        {passwordError && 
        <Form.Text className="bg-warning p-1 rounded-4">
        {passwordError && passwordError}
       </Form.Text>}
        
      </Form.Group>
    
    
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
    </div>
    </div>
  );
}

export default Register;
