import React, { useContext } from "react";
import { WordContext } from "../providers/WordProvider";
import { Link } from "react-router-dom";

export default function Home() {
  const { user } = useContext(WordContext);

  return (
    <>
      <div className="row justify-content-center mt-3 mx-0">
        <div className="col-10 col-lg-6 bg-light bg-opacity-75 rounded-5 p-4">
          <h1>Engage in Fun and Interactive Word Exercises!</h1>
          <p>
            A fun way to boost your vocabulary! Dive into exercises, expand your
            word knowledge, and gain confidence. Start your word adventure now!
          </p>
          <div className="gameSelectContainer display-md-4 d-flex justify-content-center gap-3">
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="bg-blue-500 p-2 text-sm text-decoration-none bg-white rounded-4 d-flex justify-content-center align-items-center"
                >
                  <i className=" mx-1 fa-regular fa-square-plus text-md"></i><span>Add Word</span>
                </Link>
                <Link
                  to="/game"
                  className="bg-blue-500 p-2 text-sm text-decoration-none bg-white rounded-4  d-flex justify-content-center"
                >
                  <i className="my-auto mx-1 fa-solid fa-gamepad"></i> <span>Word Game</span>
                </Link>
              </>
            ) : (
              <>
              <div className="loginContainer">
                <p className="mb-2">Log in or sign up to get started</p>
                <Link
                  className="text-primary  text-decoration-none mx-3"
                  to="/register"
                >
                  <i className="mx-1 fa-solid fa-user-plus"></i>Register
                </Link>
                <Link
                  className="text-primary  text-decoration-none"
                  to="/login"
                >
                  <i className="mx-1 fa-solid fa-right-to-bracket"></i>Login
                </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
