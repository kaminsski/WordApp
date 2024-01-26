import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { WordContext } from '../providers/WordProvider';
import Cookies from 'js-cookie';


export default function Header() {
  const {user} = useContext(WordContext)
  const logout = () => {
    Cookies.remove('user');

  window.location.href = "/";
  }
  return (
    <>
    
      <Navbar expand="lg" className="bg-transparen ">
      <Container className=''>
        <Link to="/" className='text-white mx-4 text-decoration-none fs-4'>WordApp</Link>
        <Navbar.Toggle className='bg-white' aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex gap-3 text-no-underline">

          <Link className='text-white text-decoration-none' to="/"><i className="mx-1 fa-solid fa-house"></i>Home</Link>
{user ? (
  <>
  <Link className='text-white text-decoration-none' to="/profile"><i className="mx-1 fa-solid fa-user"></i>Profile</Link>
  <Link onClick={logout} className='text-white text-decoration-none' ><i className="mx-1 fa-solid fa-right-from-bracket"></i>Logout</Link>
  </>
) : (
  <>
    <Link className='text-white text-decoration-none' to="/register"><i className="mx-1 fa-solid fa-user-plus"></i>Register</Link>
    <Link className='text-white text-decoration-none' to="/login"><i className="mx-1 fa-solid fa-right-to-bracket"></i>Login</Link>
  </>
)}


           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
