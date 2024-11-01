import Axios from 'axios'
import config from '../config'


const AccountService = {

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

    checkUserLogin : async function checkUserLogin(userInfo){
      const response = await Axios.post("http://localhost:3001/login", {
        email: userInfo.email,
        password: userInfo.password
      });
      if (!response.data.auth) {
        return false;
      } else {
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("user_info", JSON.stringify(response.data.result));
        return true;
      }
    },

    userAuthentication : function userAuthentication(){
      Axios.get("http://localhost:3001/isUserAuth", {
      headers : {
        "x-access-token" : sessionStorage.getItem("token"), 
      },
      }).then((response)=>{
        console.log(response)
      })
    },

    updateLastLogin : async function updateLastLogin(date){
      const response = await Axios.post("http://localhost:3001/last_login", {
        date : date
      }, { headers : {
        "x-access-token" : sessionStorage.getItem("token")
      }})
      if(response.status !== 200){
        console.log("account service error")
        throw new Error(`Failed to post answers: ${response.status}`);
      }
      else{
        console.log("Login date updated !")
      }
    },

    getUserInfo : function userInfo(){
      const userInfo = sessionStorage.getItem('user_info');
      const jsonUserInfo = JSON.parse(userInfo);
      return jsonUserInfo;
    },

    logOut : function logOut(navigate){
      AccountService.updateLastLogin(AccountService.getDate());
      sessionStorage.removeItem('user_info');
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('quiz_id');
      navigate('/login');
    },

    setUserDescription : function sendUserDescription(text){
      console.log("Le texte à envoyer c'est : ", text);
      Axios.post("http://localhost:3001/user_description", {
        description : text
      },{headers : {"x-access-token" : sessionStorage.getItem("token"), }}).then((response) => {
        if(response.status !== 200) {
          throw new Error(`Failed to update user description. Server responded with ${response.status} ${response.statusText}`);
        }else{
          console.log("User description updated")
        }
      })
    },

    fetchUserDescription : async function fetchUserDescription(setInfoContent){
      try {
        const token = sessionStorage.getItem('token');
        const response = await Axios.get('http://localhost:3001/user_description', 
        {
            headers: {
                'x-access-token': token
            }
        });
        if(response.status !== 200){
            throw new Error('Failed to fetch quiz answers');
        }
        const data = await response.data;
        setInfoContent(data[0].description)
        console.log("info : ", data[0].description)
      }
      catch(err){
          console.error('Error API request : ',err);
          throw err;
      }
    },

    getDate : function getDate(){
      const  currentDate = new Date();
      const month = currentDate.getMonth() +1;
      const monthFormatted = month < 10 ? '0' + month : month;
      const day = currentDate.getDate()
      const year = currentDate.getFullYear()
      const today = year + '/' + monthFormatted + '/' + day
      return today;
    },




}

export default AccountService