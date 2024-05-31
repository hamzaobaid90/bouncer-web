let signupbtn= document.querySelector(".signupbtn")
let signinbtn = document.querySelector(".signinbtn")
let title = document.querySelector(".title")
let namefield = document.querySelector(".inner")
let underline = document.querySelector(".underline")
let text = document.querySelector(".text").value


signinbtn.addEventListener("click",()=>{
    namefield.style.maxHeight ="0";
    title.innerHTML = "sign in";
    signupbtn.classList.add("disable");
    signinbtn.classList.remove("disable")
    underline.style.transform = "translateX(35px)"
})
signupbtn.addEventListener("click",()=>{
    namefield.style.maxHeight ="60px";
    title.innerHTML = "sign up";
    signupbtn.classList.remove("disable");
    signinbtn.classList.add("disable")
    underline.style.transform = "translateX(0)"

})

let Email= "hamzaobaid90@gmail.com"
let Password = "901188"
let user = "hamza"

function data(username,Email,Password) {

   let Email= "hamzaobaid90@gmail.com"
   let Password = "901188"
   let username = "hamza"

  
let u = document.getElementById("der").value
let e = document.getElementById("Email").value
let p= document.getElementById("Password").value


   this.username = username
   this.Email= Email
   this.Password = Password
   e.addEventListener("keydown",()=>{
    if (e!==Email) {
        alert("write a valid email")
        
    }
    else if(e===Email){
        true;
    }
    else if (p===Password){
        true;

    }
    else if(u===username){
        true;

    }
    else{
        false;
    }

   })


    
}
data("this.username","this.Email","this.password")


