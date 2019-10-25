var submitButton = document.getElementById('submit'); // Déclare la variable et lui attribue l'id submit
submitButton.onclick = function() {
var age = document.getElementById("age").value; // Récupere la valeur du champ age dans le fomulaire
if (age >= 18) { // "Si age est supérieur ou égal à 18"
alert("Vous êtes majeur");
}
else if  (age >= 0){ // "Si age est supérieur ou égal à 0"
alert("Vous êtes mineur");
}
else {
alert("Saisie non valide !");
}
}
