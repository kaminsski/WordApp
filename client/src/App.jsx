import {Route, Routes} from "react-router-dom"
import Home from "../pages/Home.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Profile from "../pages/Profile.jsx";
import Game from "../pages/Game.jsx";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/register" element={<Register></Register>} ></Route>
        <Route path="/profile" element={<Profile></Profile>} ></Route>
        <Route path="/game" element={<Game></Game>} ></Route>


      </Routes>
         
    </>
  )
}

export default App
