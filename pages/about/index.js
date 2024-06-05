/**
 * Gatolândia
 * /pages/about/index.js - Controller de about
 * By Moonsea e Lenna
 * MIT License 2024
 **/

$(document).ready(myAbout)

function myAbout() {
    changeTitle(`Sobre o ${app.siteName}`)
    delete sessionStorage.userId
    $('#siteName').html(app.siteName)
    getUsersTeam()
}

var tbody = document.getElementById("tbody");

var dados = [
    ["Jade","Siamês","Feminino","21971134025"],
    ["Bob","Persa","Masculino","21971134020"],
    ["Romeu","Bombaim","Masculino","21971134022"],
    ["Mel","Siberiano","Feminino","21971134029"],
    ["Lucifer","Siamês","Masculino","21971134025"],
    ["Artemis","Persa","Feminino","21971134029"],
    ["Luke","Bombaim","Masculino","21971134020"]
];

for(var i=0; i < dados.length; i++){
    var tr = "<tr>" +
        "<td>" + dados[i][0] + "</td>" +
        "<td>" + dados[i][1] + "</td>" +
        "<td>" + dados[i][2] + "</td>" +
        "<td>" + dados[i][3] + "</td>" +
        "<tr>";
tbody.innerHTML += tr;

}

document.getElementById("txtbusca").addEventListener("keyup", function()   
{
    var busca = document.getElementById("txtbusca").value.toLowerCase();

    for (var i=0; i< tbody.children.length; i++){
        var tr = tbody.children[i];
        var achou= false;

        for(var j=0; j< tr.children.length; j++){
            var value = tr.children[j].textContent.toLowerCase();

            if (value.indexOf(busca) >= 0){
                achou= true;
                break;
            }
        }
        tr.style.display = achou ? "table-row" : "none";
    }
});