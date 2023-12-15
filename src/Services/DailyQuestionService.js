import Axios from 'axios'

const DailyQuestionService = {
    getDate : function getDate(){
        const  currentDate = new Date();
        const month = currentDate.getMonth() +1;
        const day = currentDate.getDate()
        const year = currentDate.getFullYear()
        const today = day + '/' + month  + '/' + year;

        return today;
    },

    fetchDailyQuestion : async function fetchDailyQuestion(){
        try {
            const token = sessionStorage.getItem('token');
            const response = await Axios.get('http://localhost:3001/daily_question', 
            {
                headers: {
                    'x-access-token': token
                }
            });
            if(response.status !== 200){
                throw new Error('Failed to fetch daily question');
            }
            const data = await response.data;
            return data;
        }
        catch(err){
            console.error('Error API request : ',err);
            return null;
        }
    },

    sendDailyAnswer : function sendDailyAnswer(data){
        const token = sessionStorage.getItem('token');
        Axios.post("http://localhost:3001/daily_answer", {
            answer : data.answer,
            id_question : data.id_question
        }, {
            headers: {
            'x-access-token': token
            }
        }).then(response => {
            if(response.status !== 200) {
                throw new Error(`Failed to post user answer. Server responded with ${response.status} ${response.statusText}`);
              }else{
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