import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./"

const auth = getAuth(app);


function login(email,password){
    signInWithEmailAndPassword(auth,email,password)
    .then ((userCrential) =>{
        //signed in
        const user = userCrential.user;
        console.log(user)
        //...
    })
    .catch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.errorMessage;
        console.log(errorCode, errorMessage)
    })
    }

export{ login }
