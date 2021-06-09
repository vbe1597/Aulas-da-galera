 
var div = document.getElementById("oi");
 
function nome() {
    var input = document.getElementById("nome");
 
    div.innerHTML = "";
    div.append(input.value);
}