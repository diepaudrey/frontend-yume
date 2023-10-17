export default async function fetchDailyQuestion(){
    try {
        
        const response = await fetch('http://localhost:3000/daily_question');
        if(!response.ok){
            throw new Error('Failed to fetch daily question');
        }
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        const dataObject = data[randomIndex];
        return dataObject.question;
    }
    catch(err){
        console.error('Error API request : ',err);
        return null;
    }
}