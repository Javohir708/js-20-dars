const formEl = document.querySelector(".form")
const inputFname = document.querySelector(".form__fname")
const inputLname = document.querySelector(".form__lname")
const inputAge = document.querySelector(".form__age")
const inputProfession = document.querySelector(".form__profession")
const inputCountry = document.querySelector(".form__country")
const male = document.querySelector(".male")
const female = document.querySelector(".female")
const wrapperEl = document.querySelector(".wrapper")

let selectedGender = "";

male.addEventListener("click", () => {
    selectedGender = 'male'
})

female.addEventListener("click", () => {
    selectedGender = 'female'
})

formEl.addEventListener("submit", (event) => {
    event.preventDefault()
    
    const cardEl = document.createElement("div")
    cardEl.className = "card"
    
    let genderImage = '<img src="./assets/male.png">';

    if(selectedGender == 'female' ){
        genderImage = '<img src="./assets/female.png">';
    }
    
    cardEl.innerHTML = `
        <h3>Fname: ${inputFname.value}</h3>
        <h3>Lname: ${inputLname.value}</h3>
        <h3>Age: ${inputAge.value}</h3>
        <h3>Profession: ${inputProfession.value}</h3>
        <h3>country: ${inputCountry.value}</h3>
    `+genderImage;

    wrapperEl.appendChild(cardEl)
    inputFname.value = "";
    inputLname.value = "";
    inputAge.value = "";
    inputProfession.value = "";
    inputCountry.value = "";
    selectedGender = "";
})