/**
 * Gatolândia
 * /pages/policies/index.js - Controller de policies
 * By Moonsea e Lenna
 * MIT License 2024 
 **/

$(document).ready(myPolicies)

function myPolicies() {
    changeTitle('Políticas de Privacidade')
    $('.siteName').html(app.siteName)
    $('.siteDomain').html(location.hostname)
}