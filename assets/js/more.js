const more = document.getElementById("more")
const moreDiv = document.querySelector(".moreDiv")


const logOut = document.getElementById("logOut")


more.addEventListener("click",()=>{
    moreDiv.classList.toggle("moreDivActive")
})

logOut.addEventListener("click", () => {

    localStorage.removeItem("usernameMessage");
    localStorage.removeItem("passwordMessage");

    window.location.href = "index.htm";
});
