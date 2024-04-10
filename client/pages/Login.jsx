import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  const[username,setUsername]=useState("")
  const[password,setPassword]=useState("")

  const[usernameError,setUsernameError] = useState(null)
  const[passwordError,setPasswordError] = useState(null)

  const loginHandle =async (e) =>{
    e.preventDefault()
    const loginUser = {
      username,
      password
    }
    try {
      const response = await fetch("https://word-app-seven.vercel.app/api/user/login",{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginUser)
      })

      if(response.ok){
        const responseData = await response.json()
        document.cookie= `user=${JSON.stringify(responseData)};  expires=${new Date(Date.now() + 86400e3).toUTCString()}; path=/`
        return (window.location.href = "/");

      }else{
        const responseData = await response.json()
        if(responseData.message.includes("User")){
          setUsernameError(responseData.message)

        }
        if(responseData.message.includes("Password")){
          console.log("pass");
          setPasswordError(responseData.message)

        }

      }
    } catch (error) {
      
    }
  }
  return (
    <div className="row justify-content-center mt-5">
        <div className="col-10 col-lg-6">
    <Form onSubmit={loginHandle} className='bg-white p-3 bg-opacity-75'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='fw-bold'>Username</Form.Label>
        <Form.Control value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder="Enter username" />
       {usernameError &&
        <Form.Text className="bg-warning p-1 rounded-4">
          {usernameError}
        </Form.Text>}
       
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='fw-bold'>Password</Form.Label>
        <Form.Control  value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" />
        {passwordError &&
        <Form.Text className="bg-warning p-1 rounded-4">
          {passwordError}
        </Form.Text>}
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    </div>
    </div>
  );
}

export default Login;
