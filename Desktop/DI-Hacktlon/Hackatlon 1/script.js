// popup page
// $(function () {
//   var overlay = $('<div id="overlay"></div>');
//   overlay.show();
//   overlay.appendTo(document.body);
//   $(".popup-onload").show();
//   $(".close").click(function () {
//     $(".popup-onload").hide();
//     overlay.appendTo(document.body).remove();
//     return false;
//   });

//   $(".x").click(function () {
//     $(".popup").hide();
//     overlay.appendTo(document.body).remove();
//     return false;
//   });
// });

// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Affiche le popup onload
  showPopupOnLoad();
});

function showPopupOnLoad() {
  document.getElementById("popup").style.display = "block";
}

// Fonction pour fermer le popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Ajoutez cette fonction si vous souhaitez également avoir la possibilité de fermer le popup en cliquant à l'extérieur
window.addEventListener("click", function (event) {
  var popup = document.getElementById("popup");
  if (event.target === popup) {
    popup.style.display = "none";
  }
});

// BSH
function afficherDonnees() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var birthday = document.getElementById("birthday").value;
  var phone = document.getElementById("phone").value;
  var country = document.getElementById("country").value;
  var possibility = document.getElementById("possibility").value;

  // Calcul de l'âge
  var today = new Date();
  var birthDate = new Date(birthday);
  var age = today.getFullYear() - birthDate.getFullYear();

  // Vérification de l'âge
  if (age < 18) {
    alert("You need to have a parent's authorization.");
    return false; // Ne pas soumettre le formulaire
  } else if (age >= 18 && age <= 35) {
    var isReservist = confirm("Are you a reservist?");
    if (isReservist) {
      alert("Thank you for your service!");
    }
  }

  var confirmationMessage = "Confirmez-vous les données suivantes?\n\n";
  confirmationMessage += "First Name: " + fname + "\n";
  confirmationMessage += "Last Name: " + lname + "\n";
  confirmationMessage += "Email: " + email + "\n";
  confirmationMessage += "Birthday: " + birthday + "\n";
  confirmationMessage += "Phone: " + phone + "\n";
  confirmationMessage += "Country: " + country + "\n";
  confirmationMessage += "Interest: " + possibility;

  var confirmation = confirm(confirmationMessage);

  if (confirmation) {
    alert("Merci pour vos données!");
    return true; // Soumettre le formulaire
  } else {
    alert("Veuillez corriger vos données.");
    return false; // Ne pas soumettre le formulaire
  }
}
