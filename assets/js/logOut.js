const logOut = document.getElementById("logOut")

k=logOut.addEventListener("click", () => {
   
  
  
        localStorage.removeItem('usernameMessage',"");
        localStorage.removeItem('passwordMessage',"");
  
     
  });
  