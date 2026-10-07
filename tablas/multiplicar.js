function generarTablas(){
    //let contenedorTabla = document.getElementById("contenedorTabla");
    //contenedorTabla.innerHTML = "<h1>PROBANDO</h1>"; 
    let contenido = "";
    let contenedorTabla = document.getElementById("contenedorTabla");
    let numero = parseInt(document.getElementById("txtNumero").value);
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        contenido += "<tr><td>" + numero + " × " + i + "</td><td>" + resultado + "</td></tr>";
    }
    
    contenedorTabla.innerHTML = contenido;
}
