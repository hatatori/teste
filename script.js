 


const arquivo = document.querySelector("#arquivo")

const formulario = document.getElementById("formulario");
const btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener('click', () => enviar())
 

function enviar() {

    const formData = new FormData(formulario);

    fetch("https://6f0f8p43-3000.brs.devtunnels.ms/enviar", {
    // fetch("http://localhost:3000/enviar", {
        method: "POST",
        body: formData,
    })
        .then(e => {
            Swal.fire({
                title: "Foi!",
                text: "Arquivo enviado",
                icon: "success"
            });
        })
        .error(e => {
            Swal.fire({
                title: "Deu ruim",
                text: "Arquivo não enviado",
                icon: "error"
            });
        })
 
}

