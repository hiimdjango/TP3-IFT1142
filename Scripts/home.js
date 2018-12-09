//Charger le fichier XML
if (window.XMLHttpRequest)  
    xhttp=new XMLHttpRequest();
else // IE 5/6
    xhttp=new ActiveXObject("Microsoft.XMLHTTP");

xhttp.open("GET","../produits.xml",false);
xhttp.send();

var xmlDoc = xhttp.responseXML; 
var root = xmlDoc.documentElement;

//Fonction pour afficher la date et l'heure
function displayDate() {
    d = new Date();
    str ="";
    var jours = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
    var mois = ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
    str = jours[d]
    document.getElementById('date').innerHTML = jours[d.getDay()] + ", " + d.getDate() + " " + mois[d.getMonth()] + " " + d.getFullYear() + "&nbsp;&nbsp;" + d.getHours() + "h" + d.getMinutes();
}
//Actualiser l'heure
setInterval(displayDate,60000);
document.onload = displayDate();

function displayNouveautes() {
    var displayZone = document.getElementById('articles');
    var tableNouveautes = '';
    tableNouveautes +='<tr>';
    tableNouveautes += '<td>'+ '<img src ="'+root.childNodes[1].attributes[4].value+'">'+'</td>';
    tableNouveautes += '<td>'+ '<img src ="'+root.childNodes[3].attributes[4].value+'">'+'</td>';
    tableNouveautes += '<td>'+ '<img src ="'+root.childNodes[5].attributes[4].value+'">'+'</td>';
    tableNouveautes += '<td>'+ '<img src ="'+root.childNodes[7].attributes[4].value+'">'+'</td>';
    
    tableNouveautes +='<tr>';
    tableNouveautes += '<td class="name">'+root.childNodes[1].attributes[1].value+'</td>';
    tableNouveautes += '<td class="name">'+root.childNodes[3].attributes[1].value+'</td>';
    tableNouveautes += '<td class="name">'+root.childNodes[5].attributes[1].value+'</td>';
    tableNouveautes += '<td class="name">'+root.childNodes[7].attributes[1].value+'</td>';
    
    tableNouveautes +='<tr>';
    tableNouveautes += '<td class="des">'+root.childNodes[1].attributes[3].value+'</td>';
    tableNouveautes += '<td class="des">'+root.childNodes[3].attributes[3].value+'</td>';
    tableNouveautes += '<td class="des">'+root.childNodes[5].attributes[3].value+'</td>';
    tableNouveautes += '<td class="des">'+root.childNodes[7].attributes[3].value+'</td>';

    
    displayZone.innerHTML ='<table>'+ tableNouveautes +'</table>';
}

document.onload = displayNouveautes();