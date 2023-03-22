
const submit = document.getElementById("submit")
submit.addEventListener("click",()=>{
    let password = document.getElementById("password").value
    let cpassword = document.getElementById("confirmPassword").value
    console.log(password,cpassword)
    let msg = document.getElementById("demo")
    if(password.length!=0){
        if(password===cpassword){
            msg.textContent="Password Match";
        }else if(password!==cpassword){
            msg.textContent="Password Not Matched";
        }else{
            console.log("done")
        }
    }else if(cpassword!=0){
        if(password===cpassword){
            msg.textContent="Password Match";
        }else if(password!==cpassword){
            msg.textContent="Password Not Matched";
        }else{
            console.log("done")
        }
    }else{
        console.log("done")
    }
    
})