let clics = 0;


function hacerClics() { 
    clics= clics + 1;
    document.getElementById("contadorClics").
    innerHTML = clics;
} 
function reiniciarClics() {
   clics = 0; 
    document.getElementById("contadorClics").innerHTML = clics;
}
    