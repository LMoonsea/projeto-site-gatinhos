$(document).ready(myHome)
/**
 * Gatolândia
 * /pages/home/index.js - Controller de home
 * By Moonsea e Lenna
 * MIT License 2024
 **/

// Função principal da página "home".
async function myHome() {

    changeTitle()

    var articleList = '';

    $.get(app.apiBaseURL + 'articles')
        .done((data) => {
            data.forEach((art) => {
                articleList += `
                    <div class="article art-item" data-id="${art.id}">
                        <img src="${art.thumbnail}" alt="${art.title}">
                        <div>
                            <h3>${art.title}</h3>
                            <p>${art.resume}</p>
                        </div>
                    </div>                    
                `
            })
            $('#artList').html(articleList)
            getMostViewed(5)
            getLastComments(5)

        })



    var listGato = [];
    for(var i = 0; i < 10; i++){
        await obterGato().then(gato => listGato.push(gato) );
    }
    MontarGatos(listGato);
}

function getMostViewed(limit) {

    var htmlOut = ''

    $.get(app.apiBaseURL + 'articles/views/' + limit)
        .done((data) => {
            if (data.length > 0) {
                htmlOut = '<ul>'
                data.forEach((item) => {
                    htmlOut += `<li class="article" data-id="${item.id}">${item.title}</li>`
                })
                htmlOut += '</ul>'
            } else {
                htmlOut = '<p class="center">Nenhum artigo encontrado.</p>'
            }

            $('#mostVisited').html(htmlOut)
        })

}

function getLastComments(limit) {

    var htmlOut = ''

    $.get(app.apiBaseURL + 'comments/last/' + limit)
        .done((data) => {
            if (data.length > 0) {
                htmlOut = '<ul>'
                data.forEach((item) => {
                    htmlOut += `<li class="article" data-id="${item.article}">${item.comment}</li>`
                })
                htmlOut += '</ul>'
            } else {
                htmlOut = '<p class="center">Nenhum comentário ainda.</p>'
            }
            $('#lastComments').html(htmlOut)
        })

}


function MontarGatos(list){

    $("#conteudo").html(
        list.map( objGato => {
        var gato = (objGato[0] ?? {})?.breeds[0];
        return `
           <div class="bloco-gato">
                <img class="imgGato" src="${ objGato[0].url }" with="500px" height="400px">
                <h1 class="tituloGato">${ gato.name }</h1>
                <p class="DescricaoGato">${ gato.description   }</p>
           </div>`;
    }).join(""));
    
    app.GatoObjeto = list;
}

async function obterGato() {
    let gato = null;
    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": "live_yKBQKV7fHBw0PVsygqZWMHX2IBC4G4Tpe1FavdftrfpwFb7AAoyZPzI3mrvJmmtV"
    });
    
    const requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };
    
    try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        gato = result;
    } catch (error) {
        console.log('Error:', error);
    }
  
    return gato;
} 