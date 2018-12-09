
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
