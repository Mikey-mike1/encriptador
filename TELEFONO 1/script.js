function encriptar() {
    var text = document.getElementById("text1").value.toLowerCase();
    var txtcifrado = text.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");

    document.getElementById("mascotimg").style.display = "none";
    document.getElementById("text2").style.display = "none";

    document.getElementById("text3").innerHTML = txtcifrado;
}

function desencriptar() {
    var text = document.getElementById("text1").value.toLowerCase();
    var txtcifrado = text.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");

    document.getElementById("mascotimg").style.display = "none";
    document.getElementById("text2").style.display = "none";

    document.getElementById("text3").innerHTML = txtcifrado;
}