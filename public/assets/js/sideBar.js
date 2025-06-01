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

const userName = document.querySelector("#userName");

document.addEventListener("DOMContentLoaded", ()=> {
    const name = JSON.parse(localStorage.getItem("usuario"))

    userName.innerHTML = name.nome;
})