const form = document.querySelector("#formulario");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const peso = document.querySelector("#peso");

document.addEventListener("DOMContentLoaded", ()=> {
    if(localStorage.getItem("usuario")) {
        window.location.href = "http://localhost/school/sistema%20de%20agendamento/public/html/";
    }
    else {
        
        form.addEventListener("submit", function(event) {
            event.preventDefault(); 

            if (
                nome.value.trim() === "" || 
                email.value.trim() === "" || 
                senha.value.trim() === "" 
            ) {
                alert("Por favor, preencha todos os campos.");
                return;
            }

        

            const usuario = {
                nome: nome.value,
                email: email.value,
                senha: senha.value
            };

        
            nome.value = "";
            email.value = "";
            senha.value = "";

            console.log(usuario); 
            sendData(usuario);
        });

        async function sendData(usuario) {
            try {
                const response = await fetch("http://localhost/school/sistema%20de%20agendamento/back-end/login.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(usuario)
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || `Erro HTTP: ${response.status}`);
                }

                if (data.status === "success") {

                    console.log(data)

                    alert("Usuário Logado com sucesso!");

                    localStorage.setItem("usuario", JSON.stringify(data.userData));

                    window.location.href = "http://localhost/school/sistema%20de%20agendamento/public/html/";

                } else {
                    alert("Erro ao logar usuário: " + data.message);
                }

            } catch (err) {
                console.error("Erro:", err);
                alert("Erro ao enviar dados: " + err.message);
            }
        }

    }
})
