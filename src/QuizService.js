import Axios from 'axios'

const QuizService = {

  getQuizQuestion : async function getQuestion(){
    try{
      const response = await Axios.get("http://localhost:3001/quiz_question")
      const question = response.data[0].question_text;
      console.log("Côté Service : ", question)
      return question;
    }catch(error) {
      console.error("Error fetching quiz question:", error);
      throw error;
    };
  },

  getQuizAnswers : async function getAnswers(){
    try{
      const response = await Axios.get("http://localhost:3001/quiz_answers")
      const answers = response.data;
      console.log("API : ", answers)
      return answers;
    }catch(error) {
      console.error("Error fetching quiz answers:", error);
      throw error;
    };
  },

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