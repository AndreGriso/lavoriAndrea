function replace(){
    string = document.querySelector(".divInput").value;
    string1 = document.getElementById("daSostituire").value;
    string2 = document.getElementById("diSostituzione").value;
    document.querySelector(".divInput").value = string.replace(string1, string2);
}