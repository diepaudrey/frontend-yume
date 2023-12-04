import Axios from 'axios'

const DailyQuestionService = {
    fetchDailyQuestion : async function fetchDailyQuestion(){
        try {
            const response = await fetch('http://localhost:3001/daily_question');
            if(!response.ok){
                throw new Error('Failed to fetch daily question');
            }
            const data = await response.json();
            console.log("front daily question : ", data[0]);
            return data[0].question;
        }
        catch(err){
            console.error('Error API request : ',err);
            return null;
        }
    },

    sendDailyAnswer : function sendDailyAnswer(userAnswer){
        const token = localStorage.getItem('token');
        console.log("token : ", token);
        Axios.post("http://localhost:3001/daily_answer", {
            answer : userAnswer,

        }, {
            headers: {
            'x-access-token': token
            }
        }).then(response => {
            if(response.status !== 200) {
                throw new Error(`Failed to post user answer. Server responded with ${response.status} ${response.statusText}`);
              }else{
                console.log("2 : ", userAnswer);
                return response.data;
              }
        }).catch(error => {
            console.error('Error posting daily answer:', error);
        });
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

    
}

export default DailyQuestionService;