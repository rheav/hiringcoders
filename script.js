var btnInsert = document.getElementById("btn-sign-up");

btnInsert.onclick = function () {
  var formMail = document.getElementById("formMail");
  var mailClient = formMail.value;

  localStorage.setItem("email", mailClient);

  console.log(mailClient);
};
