import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { firebaseConfig } from "./config.js";

let errorPrint = document.querySelector(".errorPrint")
let animation = document.querySelector(".animation")
const app = initializeApp(firebaseConfig);
const auth = await getAuth();

const register = async (email, password) => {
    try {
        let user = await createUserWithEmailAndPassword(auth, email, password)
        errorPrint.innerHTML = `
        <p class="mb-0" style="color:red;">Register successfully</p>
        `
        animation.classList.remove("bgWarning")
        animation.classList.add("bgSuccess")
    }
    catch (error) {
        let html = " "
        html += `<p class="mb-0" style="color:red;">Error message: ${error.message}</p>`
        console.error("Error code:", error.code);
        console.error("Error message:", error.message);
        console.error("Function error details:", error.details);
        errorPrint.innerHTML = html
        animation.classList.add("bgWarning")
        animation.classList.remove("bgSuccess")
    }
}

const signIn = async (email, password) => {
    try {
        let user = await signInWithEmailAndPassword(auth, email, password)
        alert("signIn successfully!")
    }
    catch (error) {
        let html = " "
        html += `<p class="mb-0" style="color:red;">Error message: ${error.message}</p>`
        console.error("Error code:", error.code);
        console.error("Error message:", error.message);
        console.error("Function error details:", error.details);
        errorPrint.innerHTML = html
    }
}

export { register }