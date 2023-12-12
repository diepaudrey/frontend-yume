import Axios from 'axios'

const QuizService = {

  getDate : function getDate(){
    const  currentDate = new Date();
    const month = currentDate.getMonth() +1;
    const day = currentDate.getDate()
    const year = currentDate.getFullYear()
    const today = day + '/' + month  + '/' + year;

    return today;
  },

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

  postQuizAnswers : async function postAnswers(userAnswers){
    const token = sessionStorage.getItem('token');
    const answersArray = Object.values(userAnswers)
    const idQuiz = answersArray[0].id_quiz;


    for(const answer of answersArray){
      const response = await Axios.post("http://localhost:3001/user_question_answer",answer,{
        headers: {
        'x-access-token': token
        },
      });
      if(response.status !== 200) {
        throw new Error(`Failed to post answers: ${response.status}`);
      }
      else{
        console.log("Answer posted !");
      }
    }
    this.postTookQuiz(idQuiz);
  },

  // postQuizAnswers : async function postAnswers(userInfo){
  //   const token = sessionStorage.getItem('token');
  //   const response = await Axios.post("http://localhost:3001/user_question_answer", userInfo,{
  //     headers: {
  //     'x-access-token': token
  //     },
  //   });
  //   if(response.status !== 200) {
  //     throw new Error(`Failed to post answers: ${response.status}`);
  //   }
  //   else{
  //     console.log("Answers posted !");
  //   }
  // },

  postTookQuiz : async function postTookQuiz(id){
    const token = sessionStorage.getItem("token");
    const response = await Axios.post("http://localhost:3001/take_quiz", {
      id_quiz : id,
    },{
      headers : {
      'x-access-token': token
    }});
    if(response.status !== 200) {
      throw new Error(`Failed to post quiz taken: ${response.status}`)
    }
    else{
      console.log("Quiz finished");
    }
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