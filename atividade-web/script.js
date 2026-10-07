function mostrarMensagem() { 
    document.getElementById("descricao").innerHTML = 
    "Este site foi desenvolvido utilizando HTML5, CSS3 e JavaScript!"; 
} 
function mudarCor() { 
    document.body.style.backgroundColor = "#d9f2ff"; 
}

function mudarTitulo(){
    document.getElementById("titulo").innerHTML = 
    "Bem-vindo ao meu site!";
}

function aumentarTexto() {
    document.getElementById("descricao").style.fontSize = "30px";
}

function esconderTexto() {
    document.getElementById("descricao").style.display = "none";
}

function mostrarTexto(){
    document.getElementById("descricao").style.display = "block";
}