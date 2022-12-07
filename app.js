const getElement = (selection)=> {
    const Element = document.querySelector(selection);
    if(Element) {
        return Element;
    }
    else {
        throw Error ("selection not correct check selection")
    }
}

const password1El=getElement("#password1");
const form = getElement("#form");
const password2El = getElement("#password2");
const messageContainer = getElement(".message-container");
const message= getElement("#message");

let isValid = false;
let passwordMatch= false;

function validateForm(){
    isValid= form.checkValidity();
    
   if (!isValid) {
    message.textContent="pleas fill the form";
    message.style.color="red";
    messageContainer.style.borderColor="red";
    return;
   }
    // check if password match
    if (password1El.value === password2El.value) {
        passwordMatch= true;
        password1El.style.borderColor="green";
        password2El.style.borderColor="green";
   } else{
    passwordMatch =false;
    message.textContent="pasword does not match";
    message.style.color= "red"
    password1El.style.borderColor="red";
    password2El.style.borderColor="red"
    messageContainer.style,borderColor="red";
    return;
   }
//    if passwordmatch and is valid is true 
if(passwordMatch && isValid){
    messageContainer.style.borderColor="green";
    message.innerHTML="sucessfully registered";
    message.style.color="green";

}
}
function storeUserData() {
    const user= {
       name:form.name.value,
       phone:form.phone.value,
       email:form.email.value,
       website:form.website.value,
       password:form.password.value 
    }
    console.log(user);
}

function processformData(e){
   e.preventDefault();

   validateForm()

   if(isValid && passwordMatch) {
    storeUserData()
   }
}

form.addEventListener('submit', processformData)