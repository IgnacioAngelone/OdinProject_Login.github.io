function check(){
let password = document.querySelector("#pass").value;
let passwordcheck = document.querySelector("#pass_confirm").value;
var not_match = document.getElementById("notmach");


if(password != passwordcheck){

alert("Contraseña incorrecta");
not_match.textContent = "Passwords do not match";

}  else {

not_match.textContent = "";

} 

};