import Axios from 'axios'

const AccountService = {
    // createUser : async function createUser(userInfo){
    //     console.log("User info api : ", userInfo);
    //     try{
    //         const response = await fetch('http://localhost:3001/signup', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(userInfo),
    //         })
    //         if (!response.ok) {
    //             throw new Error(`Failed to create user. Server responded with ${response.status} ${response.statusText}`);
    //           }
          
    //           const data = await response.json();
    //           return data; 
    //         } catch (err) {
    //           console.error('Error API request server : ', err.message);
    //           throw err; 
    //         }
    // },

    createUser : function createUser(userInfo){
      Axios.post("http://localhost:3001/signup", {
        first_name : userInfo.first_name,
        last_name : userInfo.last_name,
        email : userInfo.email,
        password : userInfo.password
      }).then((response) => {
        if(response.status !== 200) {
          throw new Error(`Failed to create user. Server responded with ${response.status} ${response.statusText}`);
        }else{
          return response.data;
        }
      })
    },
    
    isSignupFormValid: function isFormValid(inputValues) {
      let errors = {};
      let errorFlags = {};
    
      if (!inputValues.first_name.trim()) {
        errors.firstName = "First name is required";
        errorFlags.firstName = true;
      }
    
      if (!inputValues.last_name.trim()) {
        errors.lastName = "Last name is required";
        errorFlags.lastName = true;
      }
    
      if (!inputValues.email.trim()) {
        errors.email = "Email is required";
        errorFlags.email = true;
      } else if (inputValues.email.trim().length < 5) {
        errors.email = "Email is too short";
        errorFlags.email = true;
      }
    
      if (!inputValues.password.trim()) {
        errors.password = "Password is required";
        errorFlags.password = true;
      } else if (inputValues.password.trim().length < 5) {
        errors.password = "Password is too short";
        errorFlags.password = true;
      }
    
      return [errors, errorFlags];
    },



  setUserInputs : function setUserInputs(inputValues){
    let result = {};

    result.last_name = inputValues.last_name;
    result.first_name = inputValues.first_name;
  },


    // checkUserLogin : async function checkUserLogin(userInfo, setLoginStatus){
    // try{
    //     const response = await fetch('http://localhost:3001/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(userInfo),
    //     })

    //     const data = await response.json();
    //     console.log(data);

    //     if (!data.auth) {

    //         setLoginStatus(false);
    //         return false;
    //       }else{
            
    //         setLoginStatus(true);
    //         localStorage.setItem("token", data.token);
    //         return true; 
    //       }
    //     } catch (err) {
    //       console.error('Error API request server : ', err.message);
    //       throw err; 
    //     }
    
    // },

    checkUserLogin : async function checkUserLogin(userInfo){
      const response = await Axios.post("http://localhost:3001/login", {
        email: userInfo.email,
        password: userInfo.password
      });
      console.log(response.data);
      if (!response.data.auth) {
        return false;
      } else {
        console.log("USER INFO : ", response.data.result);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user_info", JSON.stringify(response.data.result));
        return true;
      }
    },

    userAuthentication : function userAuthentication(){
      Axios.get("http://localhost:3001/isUserAuth", {
      headers : {
        "x-access-token" : localStorage.getItem("token"), 
      },
      }).then((response)=>{
        console.log(response)
      })
    },

    getUserInfo : function userInfo(){
      const userInfo = localStorage.getItem('user_info');
      const jsonUserInfo = JSON.parse(userInfo);
      return jsonUserInfo;
    }




}

export default AccountService