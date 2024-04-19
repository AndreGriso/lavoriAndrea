function converti(){
    let x = document.getElementById("dec").value;
    document.getElementById("bin").value = converti_binario(x); 
    document.getElementById("ott").value = converti_ottale(x); 
    document.getElementById("esa").value = converti_esadecimale(x); 
}

function converti_esadecimale(x) {
    codifica= "";
    cifra = "";
    while(x>0)
        {  
        resto = x % 16;
        x = parseInt(x/16);
        switch(resto){
            case 10:
            cifra ="A";
            break;
            case 11:
            cifra ="B";
            break;
            case 12:
            cifra ="C";
            break;
            case 13:
            cifra ="D";
            break;
            case 14:
            cifra ="E";
            break;
            case 15:
            cifra ="F";
            break;
            default:
            cifra = resto
        }
        codifica = cifra + codifica;
    }
    return codifica;
}
function converti_ottale (x){
    ris="";
    while(x>0){
        resto = x % 8;
        ris = resto + ris;
        x = parseInt(x/8);
    }
    return ris;
}
function converti_binario (x){
    ris="";
    while(x>0){
        resto = x % 2;
        ris = resto + ris;
        x = parseInt(x/2);
    }
    return ris;
}