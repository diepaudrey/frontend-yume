const AccountService = {
    createUser : async function createUser(userInfo){
        try{
            const response = await fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInfo),
            })
            if (!response.ok) {
                throw new Error(`Failed to create user. Server responded with ${response.status} ${response.statusText}`);
              }
          
              const data = await response.json();
              return data; 
            } catch (err) {
              console.error('Error API request server : ', err.message);
              throw err; 
            }
    },

    checkUserLogin : async function checkUserLogin(userInfo){
    try{
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        })
        if (!response.ok) {
            return false;
          }
        return true; 
        } catch (err) {
          console.error('Error API request server : ', err.message);
          throw err; 
        }
    
    },


}

export default AccountService