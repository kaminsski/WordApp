import React, { useContext, useEffect, useState } from "react";
import { WordContext } from "../providers/WordProvider";
import Pagination from "../components/Pagination";
import PaginationBar from "../components/PaginationBar";

export default function Profile() {
  const [words, setwords] = useState([]);
  const [page, setPage] = useState(1);
  const [up, setUp] = useState(false);

  const [totalPages, setTotalPages] = useState(1);

  const [eng, setEng] = useState("");
  const [tr, setTr] = useState("");
  const [sentence, setSentence] = useState("");

  const { user } = useContext(WordContext);
  const getAllWord = async () => {
    const response = await fetch(
      `https://word-app-seven.vercel.app/api/word/user/${user && user._id}`
    );
    const responseData = await response.json();
    setwords(responseData);

    const initialTotalPages = Math.ceil(responseData.words.length / 2);
    setTotalPages(initialTotalPages);
  };
  useEffect(() => {
    getAllWord();
  }, [user, up]);
  const submitHandle = async (e) => {
    e.preventDefault();
    const newWord = {
      english: eng,
      turkish: tr,
      sentence,
      userId: user._id,
    };
    try {
      const response = await fetch("https://word-app-seven.vercel.app/api/word/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWord),
      });
      if (response.ok) {
        const responseData = await response.json();
        setwords((prevWords) => [...prevWords.words, responseData.word]);
        setEng("");
        setTr("");
        setSentence("");
        setUp(!up);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePage = (num) => {
    setPage(num);
  };

  return (
    <>
      <div className="bg-white bg-opacity-75 p-3 m-2 text-center col-10 col-md-6 mx-auto rounded-2">
        <div className="infoItem mb-3">
          <h3 className="fs-3">Username</h3>
          <p className="bg-white">{user && user.username}</p>
        </div>
        <div className="infoItem ">
          <h3 className="fs-4">Email</h3>
          <p className="bg-white">{user && user.email}</p>
        </div>
      </div>

      <div className="formContianer col-10 col-md-6 mx-auto">
        <form
          onSubmit={submitHandle}
          className="bg-white bg-opacity-75 d-flex flex-column align-items-center p-3"
        >
          <div className="wordContainer gap-2 d-md-flex d-block my-2">
            <input
              className="d-md-block d-block my-2 my-md-0"
              value={eng}
              onChange={(e) => {
                setEng(e.target.value);
              }}
              placeholder="English"
              type="text"
            />
            <input
              value={tr}
              onChange={(e) => {
                setTr(e.target.value);
              }}
              placeholder="Turkish"
              type="text"
            />
          </div>
          <div className="sentence">
            <input
              style={{ width: "250px" }}
              value={sentence}
              onChange={(e) => {
                setSentence(e.target.value);
              }}
              placeholder="Sentece"
              type="text"
            />
          </div>
          <button className="btn btn-success mt-2" type="submit">
            Add
          </button>
        </form>
      </div>

      <Pagination
        words={words.words}
        page={page}
        getAllWord={getAllWord}
      ></Pagination>
      <PaginationBar
        handlePage={handlePage}
        totalPages={totalPages}
      ></PaginationBar>
    </>
  );
}
