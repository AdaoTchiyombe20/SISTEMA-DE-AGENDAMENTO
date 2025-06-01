const leave = document.querySelector("#leave");
const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const confirmation = document.querySelector("#confirmation");
const selectEspecialidade = document.querySelector("#selectEspecialidade");
const btnAgendar = document.querySelector("#agendarBtn");
const cancel = document.querySelector("#cancel");

    btnAgendar.addEventListener("click", ()=> {
        selectEspecialidade.classList.remove("close")
    })

    cancel.addEventListener("click", ()=> {
        selectEspecialidade.classList.add("close");
    })

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


const paths =  [
    {id:1, name:"home.html" },
    {id:2, name:"agendamentos.html" },
    {id:3, name:"medicos.html" },
    {id:4, name:"historico.html" },
    {id:5, name:"perfil.html" },
    {id:6, name:"configuracoes.html" }
];

const liElements = [
    document.querySelector(".path.l1"),
    document.querySelector(".path.l2"),
    document.querySelector(".path.l3"),
    document.querySelector(".path.l4"),
    document.querySelector(".path.l5"),
    document.querySelector(".path.l6")
]

 paths.map((path, idx)=> {
    if( window.location.pathname.includes(path.name)) {
        liElements[idx].classList.add("selected");
    }
})
