
$(document).ready(function(){

    //adicionar css
    $("#lista").css("color","red");

    //adicionando o html
    $('.element').html("Meu texto via jquery")

    //disparar no click
    $("a").click(function(){
        alert("ola mundo")
    })
    alert("olá mundo")
});

//criando função
function pegarvalor(){
    var nome = document.querySelector('.nome').value;
    var sobrenome = document.querySelector('.sobrenome').value;
    alert("Seja bem vindo " + nome + " " + sobrenome);
    console.log(nome);
}