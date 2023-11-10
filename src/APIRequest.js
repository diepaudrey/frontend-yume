
export default async function fetchDailyQuestion(){
    
    try {
        const response = await fetch('http://localhost:3000/daily_question');
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
}

