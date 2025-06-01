const leave = document.querySelector("#leave");
const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const confirmation = document.querySelector("#confirmation");


document.addEventListener("DOMContentLoaded", ()=> {
    if(localStorage.getItem("usuario")) {
        leave.addEventListener("click", ()=> {
            confirmation.classList.remove("close");
        })
        
        yes.addEventListener("click", ()=> {
            localStorage.removeItem("usuario");
            window.location.href = "http://localhost/school/sistema%20de%20agendamento/public/html/login.html";
        })
            
        no.addEventListener("click", ()=> {
                    confirmation.classList.add("close");
        })
    }
    else {
        window.location.href = "http://localhost/school/sistema%20de%20agendamento/public/html/login.html";
        
        }

})

    
    
  
                
                
                
                /*  */