import Axios from 'axios'

const QuizService = {

  getQuiz : async function getQuiz(){
    try{
      const response = await Axios.get("http://localhost:3001/quiz")
      const quiz = response.data;
      return quiz;
    }catch(error) {
      console.error("Error fetching quiz question:", error);
      throw error;
    };
  },

  postQuizAnswer : async function postAnswer(userInfo){
    const token = localStorage.getItem('token');
    const response = await Axios.post("http://localhost:3001/user_question_answer", {
      id_user : userInfo.id_user,
      id_quiz : userInfo.id_quiz,
      id_question : userInfo.id_question,
      id_answer : userInfo.id_answer,
    },{
      headers: {
      'x-access-token': token
      },
    }
    );
    if(response.status !== 200) {
      throw new Error(`Failed to post answer: ${response.status}`);
    }
    else{
      console.log("Answer posted !");
    }
  },


  // getQuestionAnswers : async function getAnswers(questionId){
  //   try{
  //     const response = await Axios.get("http://localhost:3001/question_answers")
  //     const answers = response.data;
  //     console.log("API : ", answers)
  //     return answers;
  //   }catch(error) {
  //     console.error("Error fetching quiz answers:", error);
  //     throw error;
  //   };
  // },

  // getQuizAnswers : async function getAnswers(){
  //   try{
  //     const response = await Axios.get("http://localhost:3001/quiz_answers")
  //     const answers = response.data;
  //     console.log("API : ", answers)
  //     return answers;
  //   }catch(error) {
  //     console.error("Error fetching quiz answers:", error);
  //     throw error;
  //   };
  // },

  reloadPageDaily : function reloadPageDaily(){
    const now = new Date();
    const midnight = new Date(); 
    midnight.setHours(24, 0, 0, 0); 
  
    const timeUntilMidnight = midnight - now;
  
    setTimeout(() => {
      window.location.reload(true); 
    }, timeUntilMidnight);
  
  },

  reloadPage5mins : function reloadPage5mins(){
    setTimeout(() => {
      window.location.reload(true); 
    }, 300000);
  
  }

}

export default QuizService