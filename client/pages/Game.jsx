import React, { useContext, useEffect, useState } from 'react'
import { WordContext } from '../providers/WordProvider'

export default function Game() {
    const [start, setStart] = useState(false)

    const [eng, setEng] = useState("")
    const [tr, setTr] = useState("")
    const [sentence, setSentence] = useState("")

    const [gameWords, setGameWords] = useState(null)
    const [lastWord, setLastWord] = useState(null)



    const {user} = useContext(WordContext)

    useEffect(() => {
        // gameWords state'i güncellendiğinde çalışacak kodlar buraya gelecek
        if (gameWords) {
          if(gameWords.words.length === 0){
            return (window.location.href="/")
        }
    
          const randomIndex = Math.floor(Math.random() * gameWords.words.length);
          const randomElement = gameWords.words[randomIndex];
          setLastWord(randomElement)
          setEng(randomElement.english)
          setSentence(randomElement.sentence)

        }
      }, [gameWords]); // gameWords state'i değiştiğinde useEffect'in tekrar çalışmasını sağla
    
      const handleStart = async () => {
        setStart(true);
    
        const response = await fetch(`https://word-app-seven.vercel.app/api/word/user/${user && user._id}`);
        const responseData = await response.json();
    
        setGameWords(responseData);
      }

      const submitHandle = () =>{
        

        if(tr !== lastWord.turkish){
            console.log("hata");
        }else{
            setGameWords((prevGameWords) => {
                const updatedWords = prevGameWords.words.filter(word => word._id !== lastWord._id);
                return {
                  ...prevGameWords,
                  words: updatedWords
                };
              });
              
              // Yeni bir kelime seçme (isteğe bağlı)
              const randomIndex = Math.floor(Math.random() * (gameWords.words.length - 1));
              const randomElement = gameWords.words[randomIndex];
              setLastWord(randomElement);
          
              // Diğer state'leri sıfırlama (isteğe bağlı)
              setTr("");
            }
            console.log("başarı");
        
      }
  return (
    <>
    <div className="gameContainer container mt-5">
      <div className="bg-white bg-opacity-75 p-3">
      {start ? (
            <>
            <div className='d-flex flex-column gap-2'>
              <p className='mb-0'>English</p><input className='w-50'  type="text" value={eng} readOnly/>
              <p className='mb-0'>Turkish</p><input className='w-50' type="text" value={tr} onChange={(e)=>{setTr(e.target.value)}}/>
              <p className='mb-0'>Sentence</p><input value={sentence} type="text" readOnly/>
                <button onClick={submitHandle} className='btn btn-success d-block mt-3 w-50 mx-auto'>Submit</button>
                </div>

            </>
          ) : (
            <div className="startContainer d-flex align-items-center flex-column p-5">
              <h2>Let's start !</h2>
              <button className='btn btn-success' onClick={handleStart}>Start</button>
            </div>
          )}
        
       
      </div>
      </div>
    </>
  )
}
