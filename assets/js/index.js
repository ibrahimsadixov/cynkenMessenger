
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

        const loginForm = document.getElementById("loginForm");
        const nameInput = document.getElementById("name");
        const passwordInput = document.getElementById("password");

        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const usernameValue = nameInput.value;
            const passwordValue = passwordInput.value;

            const messageMeDb = firebase.database().ref("users");

            messageMeDb.orderByChild("name").equalTo(usernameValue).once("value", (snapshot) => {
                if (snapshot.exists()) {
                 
                    snapshot.forEach((user) => {
                        const storedPassword = user.val().password;
                        if (passwordValue === storedPassword) {                 
          localStorage.setItem('usernameMessage', usernameValue);
          localStorage.setItem('passwordMessage', passwordValue);
                            window.location.href = "message.htm";
                        } else {
                            alert('Incorrect password!');
                        }
                    });
                } else {
                    alert('User not found!');
                }
            });
        });