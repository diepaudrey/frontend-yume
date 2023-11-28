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

}

export default QuizService