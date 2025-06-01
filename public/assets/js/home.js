const selectEspecialidade = document.querySelector("#selectEspecialidade");
const btnAgendar = document.querySelector("#agendarBtn");
const cancel = document.querySelector("#cancel");

    btnAgendar.addEventListener("click", ()=> {
        selectEspecialidade.classList.remove("close")
    })

    cancel.addEventListener("click", ()=> {
        selectEspecialidade.classList.add("close");
    })   
