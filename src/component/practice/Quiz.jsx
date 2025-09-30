import { useDispatch, useSelector } from "react-redux"
import { FinalScore,NextQuestion,RestartQuiz } from "./ReducerQuiz";
import { useState,useEffect } from "react";
import { VscDebugRestart } from "react-icons/vsc";
import "./Quizz.css";
export function Quiz()
{   
 
    const dispatch=useDispatch(); 
    const {questions,currentIndex,score} =useSelector((state)=>state.quiz)
    const question= questions[currentIndex];
      const [showResult, setShowResult] = useState(false);
  if (showResult || currentIndex >= questions.length) {
     if(score>=37)
   {
    return(
     <div className="flex flex-col items-center justify-center min-h-screen gap-10 bg-yellow-100  mx-auto max-w-xl max-h-3 box-border rounded-3xl border text-3xl font-bold w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%]">
       <p>Your Final Score: {score}</p>
       <p>Congratulations</p>
      <button  onClick={()=>{dispatch(RestartQuiz()); setShowResult(false);  setTimeLeft(60); }}><VscDebugRestart/></button>
     </div>
    )
    
   }
   else if(score>=30) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-10 bg-yellow-100  mx-auto max-w-xl max-h-3 box-border rounded-3xl border text-3xl font-bold w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%]">
        <p>Your Final Score: {score}</p>
        <p>Satisfied</p>
         <button onClick={()=>{dispatch(RestartQuiz()); setShowResult(false);  setTimeLeft(60); }} ><VscDebugRestart/></button>
      </div>
    )
   }
   else if(score>=20) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-10 bg-yellow-100  mx-auto max-w-xl max-h-3 box-border rounded-3xl border text-3xl font-bold w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%]">
        <p>Your Final Score: {score}</p>
        <p>Need improvment</p>
        <button onClick={()=>{dispatch(RestartQuiz()); setShowResult(false);  setTimeLeft(60); }} ><VscDebugRestart/></button>
      </div>
    )
   }
   else if(score<20)
   {
     return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-10 bg-yellow-100 mx-auto max-w-xl max-h-3 box-border rounded-3xl border text-3xl font-bold w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%]">
        <p>Your Final Score: {score}</p>
        <p>Try Next Time</p>
       <button onClick={()=>{dispatch(RestartQuiz()); setShowResult(false);  setTimeLeft(60); }} ><VscDebugRestart/></button>
      </div>
    )
   }
  }

  const handleAnswer = (value) => {
    dispatch(FinalScore(value));
    if (currentIndex < questions.length - 1) {
      dispatch(NextQuestion());
    } else {
      setShowResult(true);
    }
  };
    return(
      <div className="flex flex-col items-center justify-start min-h-screen gap-16 bg-yellow-100  mx-auto max-w-xl max-h-1 box-border rounded-3xl border w-full sm:w-[80%]">
      <div className=" mt-40 flex flex-col items-center gap-7" >
        <h2 className="text-5xl font-bold">Quizz App</h2>
        <p className="text-3xl">Test Yourself.</p>
      </div>
      <div className="flex flex-col items-center justify-center  gap-9 bg-white px-4 py-16 rounded-xl shadow-xl max-w-96">
            <div className="flex flex-col  items-center justify-center gap-3 text-3xl rounded-lg font-bold px-3 text-center">
                {question.text}
            </div>
            <div className="flex flex-col justify-center gap-3 text-2xl  ">
                {question.option.map((opt,i)=><button className="bg-yellow-100 hover:bg-white px-3 box-border solid rounded-lg border border-black" onClick={()=>handleAnswer(opt.value)} key={i}>{opt.text}</button>)}
            </div>
           {/* <button onClick={()=>setShowResult(true)} className="flex items-center bg-blue-500 px-4 py-3 text-white hover:bg-blue-400">Submitt</button> */}
        </div>
      
      </div>
        
       
    )
}