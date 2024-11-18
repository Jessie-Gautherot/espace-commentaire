let myForm = document.querySelector("form");
myForm.addEventListener("submit", function (checkimputs) {
  checkimputs.preventDefault();

  let prenom = document.getElementById("first-name").value;
  let nom = document.getElementById("last-name").value;
  let message = document.getElementById("message").value;

  if (prenom === "" || nom === "" || message === "") {
    document.getElementById("error-message").style.display = "block";
  }
});
