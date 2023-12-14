
const firebaseConfig = {
    apiKey: "AIzaSyCQuABLnB7AZXyHCnkLBKOWI_InltaR_fw",
    authDomain: "message-e092c.firebaseapp.com",
    databaseURL: "https://message-e092c-default-rtdb.firebaseio.com",
    projectId: "message-e092c",
    storageBucket: "message-e092c.appspot.com",
    messagingSenderId: "818764436281",
    appId: "1:818764436281:web:2bb174a3923a79c952cee8",
    measurementId: "G-SHH7HYBN3T"
  };
  
  
  firebase.initializeApp(firebaseConfig);
  
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const signUp = document.getElementById("signUp");
  let isSignUpDisabled = false;
  
  const messageMeDb = firebase.database().ref("users");
  
  document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();
  
    if (isSignUpDisabled) {
      return;
    }
  
    signUp.disabled = true;
    isSignUpDisabled = true;
  
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
  
    const minLength = 8;
    if (passwordValue.length < minLength) {
      alert(`Password must be at least ${minLength} characters long.`);
      signUp.disabled = false;
      isSignUpDisabled = false;
      return;
    }
  
    try {
      const snapshot = await messageMeDb.orderByChild("name").equalTo(usernameValue).once("value");
  
      if (snapshot.exists()) {
        alert('Username already exists!');
      } else {
        
        await messageMeDb.push({
          name: usernameValue,
          password: passwordValue,
        });
  
        localStorage.setItem('usernameMessage', usernameValue);
        localStorage.setItem('passwordMessage', passwordValue);
  
        username.value = '';
        password.value = '';
  
        window.location.href = "message.htm";
      }
    } catch (error) {
      console.error("Error in database operation:", error);
    } finally {
      signUp.disabled = false;
      isSignUpDisabled = false;
    }
  });
  