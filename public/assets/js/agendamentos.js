const next = document.querySelector('#next');
const previous = document.querySelector('#previous');
const canceled = document.querySelector('#canceled');
const contNext = document.querySelector('.containerAppointments_next');
const contPrevious = document.querySelector('.containerAppointments_previous');
const contCanceled = document.querySelector('.containerAppointments_canceled');
const selectEspecialidade = document.querySelector("#selectEspecialidade");
const btnAgendar = document.querySelector("#agendarBtn");
const cancel = document.querySelector("#cancel");

    btnAgendar.addEventListener("click", ()=> {
        selectEspecialidade.classList.remove("close")
    })

    cancel.addEventListener("click", ()=> {
        selectEspecialidade.classList.add("close");
    })
next.addEventListener("click", (e)=> {
    e.target.classList.add('selected');
    previous.classList.remove('selected');
    canceled.classList.remove('selected');

    contNext.classList.add("selected");
    contPrevious.classList.remove("selected");
    contCanceled.classList.remove("selected");
});

previous.addEventListener("click", (e)=> {
    e.target.classList.add('selected');
    next.classList.remove('selected');
    canceled.classList.remove('selected');

    contPrevious.classList.add("selected");
    contNext.classList.remove("selected");
    contCanceled.classList.remove("selected");
});

canceled.addEventListener("click", (e)=> {      
    e.target.classList.add('selected');
    next.classList.remove('selected');
    previous.classList.remove('selected');

    contCanceled.classList.add("selected");
    contNext.classList.remove("selected");
    contPrevious.classList.remove("selected");
});