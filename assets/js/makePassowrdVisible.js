const passwordd = document.getElementById("password")
const eye = document.querySelector(".eye")
const square = document.querySelector(".square")


eye.addEventListener("click",()=>{
    if (passwordd.type === "password") {
        passwordd.type = "text";
        square.style.backgroundColor="rgba(133, 133, 231,.8)"
      } else {
        passwordd.type = "password";
        square.style.backgroundColor="rgba(245, 245, 245, .6"
      }
})