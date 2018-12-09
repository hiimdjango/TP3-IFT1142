//Charger le fichier XML
if (window.XMLHttpRequest)  
    xhttp=new XMLHttpRequest();
else // IE 5/6
    xhttp=new ActiveXObject("Microsoft.XMLHTTP");

xhttp.open("GET","../produits.xml",false);
xhttp.send();

var xmlDoc = xhttp.responseXML; 
var root = xmlDoc.documentElement;


//Afficher la partie nouveauté
function displayNouveautes() {
    var displayZone = document.getElementById('articles');
    var tableNouveautes = '';
    tableNouveautes +='<tr>';
    tableNouveautes += '<td>'+ '<img src ="'+root.childNodes[1].attributes[4].value+'">'+'</td>';
    tableNouveautes += '<td>'+ '<img src ="'+root.childNodes[3].attributes[4].value+'">'+'</td>';
    tableNouveautes += '<td>'+ '<img src ="'+root.childNodes[11].attributes[4].value+'">'+'</td>';
    tableNouveautes += '<td>'+ '<img src ="'+root.childNodes[17].attributes[4].value+'">'+'</td>';
    
    tableNouveautes +='<tr>';
    tableNouveautes += '<td class="name">'+root.childNodes[1].attributes[1].value+'</td>';
    tableNouveautes += '<td class="name">'+root.childNodes[3].attributes[1].value+'</td>';
    tableNouveautes += '<td class="name">'+root.childNodes[11].attributes[1].value+'</td>';
    tableNouveautes += '<td class="name">'+root.childNodes[17].attributes[1].value+'</td>';
    
    tableNouveautes +='<tr>';
    tableNouveautes += '<td class="des">'+root.childNodes[1].attributes[3].value+'</td>';
    tableNouveautes += '<td class="des">'+root.childNodes[3].attributes[3].value+'</td>';
    tableNouveautes += '<td class="des">'+root.childNodes[11].attributes[3].value+'</td>';
    tableNouveautes += '<td class="des">'+root.childNodes[17].attributes[3].value+'</td>';

    
    displayZone.innerHTML ='<table>'+ tableNouveautes +'</table>';
}

document.onload = displayNouveautes();
//Tableau pour organiser les données XML
var salleAmanger = [root.childNodes[1],root.childNodes[3],root.childNodes[21],root.childNodes[23]];
var salon = [root.childNodes[5],root.childNodes[7],root.childNodes[9],root.childNodes[11]];
var chambre = [root.childNodes[13],root.childNodes[15],root.childNodes[17],root.childNodes[19]];
//Actualiser selon la categorie
function displayCategorie() {
    
    var value = document.getElementById('categories').value;
    var table ='';
    if (value == '0') {
        document.getElementById('categoryTitle').innerHTML ='Chambre à coucher';
        table += '<tr>'
        for (var i in chambre) {
            table += '<td>' + '<img src="' +chambre[i].attributes[4].value+'">'+'</td>';
        }
        table += '</tr>';
        table += '<tr>';
        for (var i in chambre) {
            table += '<td class="name">' + chambre[i].attributes[1].value + '</td>';
        }
        table += '</tr>';
        table += '<tr>';
        for (var i in chambre) {
            table += '<td>' +chambre[i].attributes[3].value+'</td>';
        }
        table += '</tr>';
        table += '<tr>';
        for (var i in chambre) {
            table += '<td class="name">' + chambre[i].attributes[2].value + ' $</td>';
        }
        table += '</tr>';
        table += '<tr>';
        table += '<td>'+'<input type="checkbox" id="0"></input>'+'</td>';
        table += '<td>'+'<input type="checkbox" id="1"></input>'+'</td>';
        table += '<td>'+'<input type="checkbox" id="2"></input>'+'</td>';
        table += '<td>'+'<input type="checkbox" id="3"></input>'+'</td>';
        table += '</tr>';
    }
    
    document.getElementById('articles').innerHTML ='<table>'+table+'</table>';
    document.getElementById('buttonAdd').innerHTML = '<button id="button">Ajouter au panier</button>';
}