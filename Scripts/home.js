var toto="une chaine";

//Fonction pour afficher la date et l'heure
function displayDate() {
    d = new Date();
    str ="";
    var jours = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
    var mois = ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
    str = jours[d]
    document.getElementById('date').innerHTML = jours[d.getDay()] + ", " + d.getDate() + " " + mois[d.getMonth()] + " " + d.getFullYear() + "&nbsp;&nbsp;" + d.getHours() + "h" + d.getMinutes();
}
//Actualiser l'heure
setInterval(displayDate,60000);
document.onload = displayDate();
//RegExp pour le formulaire
var emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var phoneReg = /^(1?(-?\d{3})-?)?(\d{3})(-?\d{4})$/;
function checkForm() {
    var affichage = document.getElementById('alert');
    var x = document.forms["myForm"]["firstname"].value;
    var y = document.forms["myForm"]["lastname"].value;
    var email = document.forms["myForm"]["email"].value;
    var phone = document.forms["myForm"]["phone"].value;
    if (x =="") {
        affichage.style.display="block";
        affichage.innerHTML="Vous devez indiquer votre prenom.";
        return false;
    }
    if (y=="") {
        affichage.style.display="block";
        affichage.innerHTML="Vous devez indiquer votre nom.";
        return false;
    }
    if(emailReg.test(email) == false) {
        affichage.style.display="block";
        affichage.innerHTML="Veuillez rentrer une adresse mail valide.";
        return false;
    }
    if(phoneReg.test(phone)==false){
        affichage.style.display="block";
        affichage.innerHTML="Veuillez rentrer un numero valide.";
        return false;
    }
    document.getElementById('sendForm').setAttribute("action",('mailto:"'+email+'"'));
}
