// Récupération du formulaire
let myForm = document.querySelector("form");
// Ecoute de l'èvenement submit et vérification des champs du formulaire
myForm.addEventListener("submit", (checkimputs) => {
    checkimputs.preventDefault();
    let prenom = document.getElementById("first-name").value;
    let nom = document.getElementById("last-name").value;
    let message = document.getElementById("message").value;
//Si tous les champs ne sont pas remplis, afficher l'élément html d'erreur
    if (prenom === "" || nom === "" || message === "") {
      document.getElementById("error-message").style.display = "block";
    } else {
//Créer un nouveau commentaire
function addComment() {
    let originaldiv = document.getElementById("comment-list").firstElementChild;
    let clone = originaldiv.cloneNode(true);
    clone.querySelector("h3").textContent = prenom + " " + nom;
    clone.querySelector("p").textContent = message;
    let conteneurClones = document.getElementById("comment-list");
    conteneurClones.appendChild(clone);
}
//Effacer les champs du formulaire à sa soumission
function clearForm() {
    let prenom = (document.getElementById("first-name").value = "");
    let nom = (document.getElementById("last-name").value = "");
    let message = (document.getElementById("message").value = "");
  }
// faire Disparaitre le message d'erreur quand le formulaire est correctement rempli
document.getElementById("error-message").style.display = "none";
}
clearForm()
addComment()
});
