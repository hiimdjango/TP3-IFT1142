//Enregistrer l'information au changement de la page

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
var salleAmanger = [
    {name:root.childNodes[1].attributes[1].value,code:root.childNodes[1].attributes[0].value,prix:root.childNodes[1].attributes[2].value,description:root.childNodes[1].attributes[3].value,img:root.childNodes[1].attributes[4].value},
    {name:root.childNodes[3].attributes[1].value,code:root.childNodes[3].attributes[0].value,prix:root.childNodes[3].attributes[2].value,description:root.childNodes[3].attributes[3].value,img:root.childNodes[3].attributes[4].value},
    {name:root.childNodes[21].attributes[1].value,code:root.childNodes[21].attributes[0].value,prix:root.childNodes[21].attributes[2].value,description:root.childNodes[21].attributes[3].value,img:root.childNodes[21].attributes[4].value},
    {name:root.childNodes[23].attributes[1].value,code:root.childNodes[23].attributes[0].value,prix:root.childNodes[23].attributes[2].value,description:root.childNodes[23].attributes[3].value,img:root.childNodes[23].attributes[4].value}
];

var salon = [
    {name:root.childNodes[5].attributes[1].value,code:root.childNodes[5].attributes[0].value,prix:root.childNodes[1].attributes[2].value,description:root.childNodes[5].attributes[3].value,img:root.childNodes[5].attributes[4].value},
    {name:root.childNodes[7].attributes[1].value,code:root.childNodes[7].attributes[0].value,prix:root.childNodes[1].attributes[2].value,description:root.childNodes[7].attributes[3].value,img:root.childNodes[7].attributes[4].value},
    {name:root.childNodes[9].attributes[1].value,code:root.childNodes[9].attributes[0].value,prix:root.childNodes[1].attributes[2].value,description:root.childNodes[9].attributes[3].value,img:root.childNodes[9].attributes[4].value},
    {name:root.childNodes[11].attributes[1].value,code:root.childNodes[11].attributes[0].value,prix:root.childNodes[1].attributes[2].value,description:root.childNodes[11].attributes[3].value,img:root.childNodes[11].attributes[4].value}
]
var chambre = [
    {name:root.childNodes[13].attributes[1].value,code:root.childNodes[1].attributes[0].value,prix:root.childNodes[13].attributes[2].value,description:root.childNodes[13].attributes[3].value,img:root.childNodes[13].attributes[4].value},
    {name:root.childNodes[15].attributes[1].value,code:root.childNodes[3].attributes[0].value,prix:root.childNodes[15].attributes[2].value,description:root.childNodes[15].attributes[3].value,img:root.childNodes[15].attributes[4].value},
    {name:root.childNodes[17].attributes[1].value,code:root.childNodes[5].attributes[0].value,prix:root.childNodes[17].attributes[2].value,description:root.childNodes[17].attributes[3].value,img:root.childNodes[17].attributes[4].value},
    {name:root.childNodes[19].attributes[1].value,code:root.childNodes[7].attributes[0].value,prix:root.childNodes[19].attributes[2].value,description:root.childNodes[19].attributes[3].value,img:root.childNodes[19].attributes[4].value}
];
//Actualiser selon la categorie
function displayCategorie() {
    
    var value = document.getElementById('categories').value;
    var table ='';
    if (value == '0') {
        document.getElementById("buttonAdd").style.display = "block";
        document.getElementById('categoryTitle').innerHTML ='Chambre à coucher';
        table += '<tr>'
        for (var i in chambre) {
            table += '<td>' + '<img src="' +chambre[i].img+'">'+'</td>';
        }
        table += '</tr>';
        table += '<tr>';
        for (var i in chambre) {
            table += '<td class="name">' + chambre[i].name + '</td>';
        }
        table += '</tr>';
        table += '<tr>';
        for (var i in chambre) {
            table += '<td>' +chambre[i].description+'</td>';
        }
        table += '</tr>';
        table += '<tr>';
        for (var i in chambre) {
            table += '<td class="name">' + chambre[i].prix + ' $</td>';
        }
        table += '</tr>';
        table += '<tr>';
        table += '<td>'+'<input type="checkbox" id="0"></input>'+'</td>';
        table += '<td>'+'<input type="checkbox" id="1"></input>'+'</td>';
        table += '<td>'+'<input type="checkbox" id="2"></input>'+'</td>';
        table += '<td>'+'<input type="checkbox" id="3"></input>'+'</td>';
        table += '</tr>';
    }
    
    else if (value == '1') {
        document.getElementById("buttonAdd").style.display = "block";
        document.getElementById('categoryTitle').innerHTML ='Salle à manger';
        table += '<tr>'
        for (var i in salleAmanger) {
            table += '<td>' + '<img src="' +salleAmanger[i].img+'">'+'</td>';
        }
        table += '</tr>';
        table += '<tr>';
        for (var i in salleAmanger) {
            table += '<td class="name">' + salleAmanger[i].name + '</td>';
        }
        table += '</tr>';
        table += '<tr>';
        for (var i in salleAmanger) {
            table += '<td>' +salleAmanger[i].description+'</td>';
        }
        table += '</tr>';
        table += '<tr>';
        for (var i in salleAmanger) {
            table += '<td class="name">' + salleAmanger[i].prix + ' $</td>';
        }
        table += '</tr>';
        table += '<tr>';
        table += '<td>'+'<input type="checkbox" id="0"></input>'+'</td>';
        table += '<td>'+'<input type="checkbox" id="1"></input>'+'</td>';
        table += '<td>'+'<input type="checkbox" id="2"></input>'+'</td>';
        table += '<td>'+'<input type="checkbox" id="3"></input>'+'</td>';
        table += '</tr>';
    }
    
    else if (value == '2') {
        document.getElementById("buttonAdd").style.display = "block";
        document.getElementById('categoryTitle').innerHTML ='Salon';
        table += '<tr>'
        for (var i in salon) {
            table += '<td>' + '<img src="' +salon[i].img+'">'+'</td>';
        }
        table += '</tr>';
        table += '<tr>';
        for (var i in salon) {
            table += '<td class="name">' + salon[i].name + '</td>';
        }
        table += '</tr>';
        table += '<tr>';
        for (var i in salon) {
            table += '<td>' +salon[i].description+'</td>';
        }
        table += '</tr>';
        table += '<tr>';
        for (var i in salon) {
            table += '<td class="name">' + salon[i].prix + ' $</td>';
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
    document.getElementById('buttonAdd').innerHTML = '<button class="button" onclick="fillQuantityPopUp()">Ajouter au panier</button>';
    
    if (value =='3') {
        displayNouveautes();
        document.getElementById("buttonAdd").style.display = "none";
        document.getElementById('categoryTitle').innerHTML ='Nouveautés';
    }
}

//Tableau pour stocker les elements selectionnees
var selected =[];
//Verifier si l'element est selectionne
function isChecked(id) {
    if (id.checked == true) {
        return true;
    }
    else return false;
}
//Ajouter les elements au panier

function addElements() {
    closeForm();
    var value = document.getElementById('categories').value;
    var firstBox = document.getElementById('0');
    var secondBox = document.getElementById('1');
    var thirdBox = document.getElementById('2');
    var fourthBox = document.getElementById('3');
    
    if(isChecked(firstBox)) {
        if(value == '0') {
            selected.push(chambre[0]);
        }
        else if(value =='1') {
            selected.push(salleAmanger[0]);
        }
        else if(value =='2') {
            selected.push(salon[0]);
        }
    }
    if(isChecked(secondBox)) {
        if(value == '0') {
            selected.push(chambre[1]);
        }
        else if(value =='1') {
            selected.push(salleAmanger[1]);
        }
        else if(value =='2') {
            selected.push(salon[1]);
        }
    }
    if(isChecked(thirdBox)) {
        if(value == '0') {
            selected.push(chambre[2]);
        }
        else if(value =='1') {
            selected.push(salleAmanger[2]);
        }
        else if(value =='2') {
            selected.push(salon[2]);
        }
    }
    if(isChecked(fourthBox)) {
        if(value == '0') {
            selected.push(chambre[3]);
        }
        else if(value =='1') {
            selected.push(salleAmanger[3]);
        }
        else if(value =='2') {
            selected.push(salon[3]);
        }
    }
    //Enregistrer les donnees
    localStorage.setItem("panier",JSON.stringify(selected));
}
// fonctions pour demander la quantite
function openForm() {
    document.getElementById("quantite").style.display = "block";
}
function closeForm() {
    document.getElementById("quantite").style.display = "none";
}
function fillQuantityPopUp() {
    var value = document.getElementById('categories').value;
    var firstBox = document.getElementById('0');
    var secondBox = document.getElementById('1');
    var thirdBox = document.getElementById('2');
    var fourthBox = document.getElementById('3');
    var table = "";
    openForm();
    if(isChecked(firstBox)) {
        if(value == '0') {
            table += '<p class="blocItem">' +'<img src="'+chambre[0].img +'"><br>'+ chambre[0].name + '<br><br><select id="first"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></p>';
        }
        else if(value =='1') {
            table += '<p class="blocItem">' +'<img src="'+salleAmanger[0].img +'"><br>'+ chambre[0].name + '<br><br><select id="second"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></p>';
        }
        else if(value =='2') {
            table += '<p class="blocItem">' +'<img src="'+salon[0].img +'"><br>'+ chambre[0].name + '<br><select id="third"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></p>';
        }
    }
    if(isChecked(secondBox)) {
        if(value == '0') {
            table += '<p class="blocItem">' +'<img src="'+chambre[1].img +'"><br>'+ chambre[1].name + '<br><br><select id="first"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></p>';
        }
        else if(value =='1') {
            table += '<p class="blocItem">' +'<img src="'+salleAmanger[1].img +'"><br>'+ salleAmanger[1].name + '<br><br><select id="second"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></p>';
        }
        else if(value =='2') {
            table += '<p class="blocItem">' +'<img src="'+salon[1].img +'"><br>'+ salon[1].name + '<br><br><select id="third"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></p>';
        }
    }
    if(isChecked(thirdBox)) {
        if(value == '0') {
            table += '<p class="blocItem">' +'<img src="'+chambre[2].img +'"><br>'+ chambre[2].name + '<br><br><select id="first"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></p>';
        }
        else if(value =='1') {
            table += '<p class="blocItem">' +'<img src="'+salleAmanger[2].img +'"><br>'+ salleAmanger[2].name + '<br><br><select id="second"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></p>';
        }
        else if(value =='2') {
            table += '<p class="blocItem">' +'<img src="'+salon[2].img +'"><br>'+ salon[2].name + '<br><br><select id="third"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></p>';
        }
    }
    if(isChecked(fourthBox)) {
        if(value == '0') {
            table += '<p class="blocItem">' +'<img src="'+chambre[3].img +'"><br>'+ chambre[3].name + '<br><br><select id="first"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></p>';
        }
        else if(value =='1') {
            table += '<p class="blocItem">' +'<img src="'+salleAmanger[3].img +'"><br>'+ salleAmanger[3].name + '<br><br><select id="second"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></p>';
        }
        else if(value =='2') {
            table += '<p class="blocItem">' +'<img src="'+salon[3].img +'"><br><br>'+ salon[3].name + '<br><br><select id="third"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></p>';
        }
    }
    document.getElementById('quantite').innerHTML='<div id="items">'+table+'<br><button class="button" id="validerAdd" onclick="addElements()">Valider</button>';
}
function fillQty() {
    var numbers='';
    for (var i=1;i<11;i++) {
        numbers += '<option value='+i+'">'+i+'</option>'    }
    console.log(numbers);
    document.getElementsByClassName("qty").innerHTML=numbers;
    
}

