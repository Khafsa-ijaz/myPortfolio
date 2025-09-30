import { configureStore, createSlice } from "@reduxjs/toolkit";

export const ReducerQuiz =createSlice({

     name: "quiz",
    initialState:{
   questions: [
  {
    text: "What does CPU stand for?",
    option: [
      { text: "Central Processing Unit", value: 2 },
      { text: "Central Program Utility", value: 0 },
      { text: "Control Process Unit", value: 0 }
    ]
  },
  {
    text: "Which of the following is NOT an operating system?",
    option: [
      { text: "Linux", value: 0 },
      { text: "Windows", value: 0 },
      { text: "Oracle", value: 2 }
    ]
  },
  {
    text: "What does RAM stand for?",
    option: [
      { text: "Random Access Memory", value: 2 },
      { text: "Read Access Memory", value: 0 },
      { text: "Run Active Memory", value: 0 }
    ]
  },
  {
    text: "Which company developed Java?",
    option: [
      { text: "Microsoft", value: 0 },
      { text: "Sun Microsystems", value: 2 },
      { text: "Apple", value: 0 }
    ]
  },
  {
    text: "Which language is primarily used for web styling?",
    option: [
      { text: "CSS", value: 2 },
      { text: "HTML", value: 0 },
      { text: "Python", value: 0 }
    ]
  },
  {
    text: "Which of these is a NoSQL database?",
    option: [
      { text: "MongoDB", value: 2 },
      { text: "MySQL", value: 0 },
      { text: "PostgreSQL", value: 0 }
    ]
  },
  {
    text: "In networking, what does LAN stand for?",
    option: [
      { text: "Large Area Network", value: 0 },
      { text: "Local Area Network", value: 2 },
      { text: "Logical Access Node", value: 0 }
    ]
  },
  {
    text: "Which protocol is used for secure browsing?",
    option: [
      { text: "HTTP", value: 0 },
      { text: "HTTPS", value: 2 },
      { text: "FTP", value: 0 }
    ]
  },
  {
    text: "React is maintained by which company?",
    option: [
      { text: "Google", value: 0 },
      { text: "Facebook (Meta)", value: 2 },
      { text: "Microsoft", value: 0 }
    ]
  },
  {
    text: "Which of these is a version control system?",
    option: [
      { text: "Git", value: 2 },
      { text: "Linux", value: 0 },
      { text: "Apache", value: 0 }
    ]
  },
  {
    text: "What does API stand for?",
    option: [
      { text: "Application Programming Interface", value: 2 },
      { text: "Advanced Program Input", value: 0 },
      { text: "Application Process Integration", value: 0 }
    ]
  },
  {
    text: "Which tag is used to create a hyperlink in HTML?",
    option: [
      { text: "<link>", value: 0 },
      { text: "<a>", value: 2 },
      { text: "<href>", value: 0 }
    ]
  },
  {
    text: "Which of these is a backend programming language?",
    option: [
      { text: "Python", value: 2 },
      { text: "CSS", value: 0 },
      { text: "HTML", value: 0 }
    ]
  },
  {
    text: "Which of these is not a programming language?",
    option: [
      { text: "C++", value: 0 },
      { text: "JavaScript", value: 0 },
      { text: "Photoshop", value: 2 }
    ]
  },
  {
    text: "Which company developed the Windows OS?",
    option: [
      { text: "Microsoft", value: 2 },
      { text: "Apple", value: 0 },
      { text: "IBM", value: 0 }
    ]
  },
  {
    text: "Which of these is used for database queries?",
    option: [
      { text: "SQL", value: 2 },
      { text: "CSS", value: 0 },
      { text: "HTML", value: 0 }
    ]
  },
  {
    text: "Which HTML element is used to display an image?",
    option: [
      { text: "<img>", value: 2 },
      { text: "<image>", value: 0 },
      { text: "<pic>", value: 0 }
    ]
  },
  {
    text: "Which of these is a cloud computing platform?",
    option: [
      { text: "AWS", value: 2 },
      { text: "Oracle DB", value: 0 },
      { text: "Windows 10", value: 0 }
    ]
  },
  {
    text: "Which of these is a frontend framework?",
    option: [
      { text: "React", value: 2 },
      { text: "Node.js", value: 0 },
      { text: "Django", value: 0 }
    ]
  },
  {
    text: "What does IP stand for in networking?",
    option: [
      { text: "Internet Protocol", value: 2 },
      { text: "Internal Process", value: 0 },
      { text: "Interface Program", value: 0 }
    ]
  }
],

    currentIndex: 0,
    score:0
},
reducers:{
    FinalScore(state,action)
    {
     state.score += Number(action.payload);

    },
    NextQuestion(state)
    {
        if(state.currentIndex < state.questions.length-1)
        {
         state.currentIndex +=1;
        }
    },
      RestartQuiz(state) {
    state.currentIndex = 0;
    state.score = 0;
  }

}
        
},
   
)
export const {FinalScore,NextQuestion,RestartQuiz}=ReducerQuiz.actions;