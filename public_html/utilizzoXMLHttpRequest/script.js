function caricaFile() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://andrea-grisoli.000webhostapp.com/testo.txt", false);
    xhttp.send();
    document.getElementById("demo").innerHTML = xhttp.responseText;
}