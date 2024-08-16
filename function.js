import { register } from "./auth.js"
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let repeatPassword = document.querySelector("#repeatPassword")
let registerButton = document.querySelector(".registerButton")
let errorPrint = document.querySelector(".errorPrint")

let animation = document.querySelector(".animation")
let status = true

registerButton.addEventListener("click", async () => {
    if (status == true) {
        await register(email.value, password.value)
        animationFunction()
    }
})

function animationFunction() {
    animation.classList.add("animationAppear")
    animation.classList.remove("animationHire")
    status = false
    setTimeout(() => {
        animation.classList.add("animationHire")
        animation.classList.remove("animationAppear")
    }, 3000)
    setTimeout(() => {
        status = true
    }, 6000);
}
