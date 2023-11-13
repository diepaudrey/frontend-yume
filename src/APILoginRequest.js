export default async function checkLogin(userLoginInformation){
    try{
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userLoginInformation),
        })
        if (!response.ok) {
            throw new Error(`User not found. Server responded with ${response.status} ${response.statusText}`);
          }
          //const data = await response.json();
          return true; 
        } catch (err) {
          console.error('Error API request server : ', err.message);
          throw err; 
        }
}