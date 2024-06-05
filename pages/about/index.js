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
