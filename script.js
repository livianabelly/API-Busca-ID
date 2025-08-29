var json1 = `{
    "id": 123,
    "nome": "Durin",
    "sobrenome": "Durinzinho",
    "cidade": "Sumeru",
    "pais": "Teyvat",
    "imagem": "img/durin.jpg",
    "link": "https://game8.co/games/Genshin-Impact/archives/462478"
}`;

var json2 = `{
    "id": 400,
    "nome": "Scara",
    "sobrenome": "The Balladeer",
    "cidade": "Sumeru",
    "pais": "Teyvat",
    "imagem": "img/scara.jpg",
    "link": "https://www.hoyolab.com/article/9361726"
}`;

var json3 = `{
    "id": 23,
    "nome": "Kazuha",
    "sobrenome": "Kaedehara",
    "cidade": "Inazuma",
    "pais": "Teyvat",
    "imagem": "img/kazuha.jpg",
    "link": "https://genshinnrambles.tumblr.com/post/669168679594934272/character-analysis-kazuhas-melancholy"
}`;

//Converter o texto STRING para JSON
var dados1 = JSON.parse(json1);
var dados2 = JSON.parse(json2);
var dados3 = JSON.parse(json3);

//Função do front-end
function valor() {
    var identificador = Number(document.getElementById('valorDigitado').value);
    var encontrado;

    if (identificador === dados1.id) {
        encontrado = dados1;
    } else if (identificador === dados2.id) {
        encontrado = dados2;
    } else if (identificador === dados3.id) {
        encontrado = dados3;
    }

    if (encontrado) {
        document.getElementById('imagem').innerHTML = `<img src="${encontrado.imagem}" width="200px">`;
        document.getElementById('nome').innerHTML = encontrado.nome;
        document.getElementById('sobrenome').innerHTML = encontrado.sobrenome;
        document.getElementById('cidade').innerHTML = encontrado.cidade;
        document.getElementById('pais').innerHTML = encontrado.pais;
        document.getElementById('link').innerHTML = `<a href="${encontrado.link}" target="_blank">Visite nosso site</a>`;
        document.getElementById('erro').innerHTML = "";
    } else {
        document.getElementById('erro').innerHTML = "Registro Inválido";
        document.getElementById('imagem').innerHTML = "";
        document.getElementById('nome').innerHTML = "";
        document.getElementById('sobrenome').innerHTML = "";
        document.getElementById('cidade').innerHTML = "";
        document.getElementById('pais').innerHTML = "";
        document.getElementById('link').innerHTML = "";
    }
}
