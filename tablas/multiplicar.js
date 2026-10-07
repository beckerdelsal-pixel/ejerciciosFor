function generarTablas(){
    //let contenedorTabla = document.getElementById("contenedorTabla");
    //contenedorTabla.innerHTML = "<h1>PROBANDO</h1>"; 
    let contenido = "";
    let contenedorTabla = document.getElementById("contenedorTabla");
    for (let i = 1; i <= 10; i++) {
        let resultado = 5 * i;
        contenido += "<tr><td>5 × " + i + "</td><td>" + resultado + "</td></tr>";
    }
    
    contenedorTabla.innerHTML = contenido;
}