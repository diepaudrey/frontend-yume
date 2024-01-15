import Axios from 'axios'
import config from '../config'

const QuizService = {

  getDate : function getDate(){
    const  currentDate = new Date();
    const month = currentDate.getMonth() +1;
    const monthFormatted = month < 10 ? '0' + month : month;
    const day = currentDate.getDate()
    const year = currentDate.getFullYear()
    const today = year + '/' + monthFormatted + '/' + day
    return today;
  },

  getLastLogin : async function getLastLogin(setDate){
    try{
      const response = await Axios.get(`${config.apiUrl}/last_login`, 
      {headers:{
        "x-access-token": sessionStorage.getItem('token')
      }})

        const date = response.data[0].last_login
        setDate(date)
    } catch(error){
        console.error("Failed to post quiz taken:", error);
        throw error;
    }

  },

  getQuiz : async function getQuiz(setQuiz){
    try{
      const token = sessionStorage.getItem('token')
      const response = await Axios.get("http://localhost:3001/quiz",  
      { headers : {
        'x-access-token' : token
      }})
      setQuiz(response.data);
    }catch(error) {
      console.error("Error fetching quiz question:", error);
      throw error;
    };
  },


  getQuizById : async function getQuizById(setQuiz, id){
    const token = sessionStorage.getItem("token");
    const response = await Axios.get(`http://localhost:3001/quiz_by_id/${id}`, 
    {
      headers : {
      'x-access-token': token
    }});
    if(response.status !== 200) {
      throw new Error(`Failed to post quiz taken: ${response.status}`)
      
    }
    else{
      setQuiz(response.data);
    }
  },

  getDailyQuiz : async function getDailyQuiz(setQuiz){
    const token = sessionStorage.getItem("token");
    const response = await Axios.get(`http://localhost:3001/daily_quiz/`, 
    {
      headers : {
      'x-access-token': token
    }});
    if(response.status !== 200) {
      throw new Error(`Failed to post quiz taken: ${response.status}`)
      
    }
    else{
      this.isQuizAnswered(response.data[0].quiz_id).then((result) => 
      {
        if(!result){
          setQuiz(response.data);
        }
        else{
          setQuiz('')
        }
      });
      
    }
  },

  postQuizAnswers : async function postAnswers(userAnswers){
    const token = sessionStorage.getItem('token');
    const answersArray = Object.values(userAnswers)
    const idQuiz = answersArray[0].id_quiz;

    this.postTookQuiz(idQuiz);

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
    
  },

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

  isQuizAnswered : async function getQuizById(id){
    const token = sessionStorage.getItem("token");
    const response = await Axios.get(`http://localhost:3001/is_quiz_answered/${id}`, 
    {
      headers : {
      'x-access-token': token
    }});
    if(response.status !== 200) {
      throw new Error(`Failed to post quiz taken: ${response.status}`)
      
    }
    else{
      //return true or false
      return response.data.isAnswered
    }
  },

  fetchQuizAnswers : async function fetchQuizAnswers(setQuizAnswers){
    try {
        const token = sessionStorage.getItem('token');
        const response = await Axios.get('http://localhost:3001/quiz_answers', 
        {
            headers: {
                'x-access-token': token
            }
        });
        if(response.status !== 200){
            throw new Error('Failed to fetch quiz answers');
        }
        const data = await response.data;
        setQuizAnswers(data)
        console.log("Quiz answers : ", data)
    }
    catch(err){
        console.error('Error API request : ',err);
        throw err;
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