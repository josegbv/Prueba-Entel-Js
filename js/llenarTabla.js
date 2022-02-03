

//events listeners
eventListener()

function eventListener(){
     //cuando el documento esta listo

    document.addEventListener('DOMContentLoaded', () =>{
        let tabla = JSON.parse(localStorage.getItem('tabla')) || [];
        llenarTabla(tabla)
    })
   
}


function llenarTabla(tabla){
    let tbody = document.querySelector('#tabla tbody');
    let cantidad = tabla.length;

    
    for(let i=0; i < cantidad; i++){

      
        let fila = document.createElement('tr');

        let celdaNombre = document.createElement('td');
        let celdaRut = document.createElement('td');
        let celdaPatente = document.createElement('td');
        let celdaMarca = document.createElement('td');
        let celdaModelo = document.createElement('td');
        let celdaColor = document.createElement('td');
        let celdaEliminar = document.createElement('td');

        celdaNombre.innerText = tabla[i].nombre;
        celdaRut.innerText = tabla[i].rut;
        celdaPatente.innerText = tabla[i].patente;
        celdaMarca.innerText = tabla[i].marca;
        celdaModelo.innerText = tabla[i].modelo;
        celdaColor.innerText = tabla[i].color;
        celdaEliminar.innerHTML = ' <a onclick="eliminar(tabla.nombre)"><img src="./img/union.png" alt=""></img></a> ';
       
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaRut);
        fila.appendChild(celdaPatente);
        fila.appendChild(celdaMarca);
        fila.appendChild(celdaModelo);
        fila.appendChild(celdaColor);
        fila.appendChild(celdaEliminar);

        tbody.appendChild(fila);
        
    }
   
}




function eliminar(name){
    let array = JSON.parse(localStorage.getItem('tabla')) || [];
    let indexArray;

    array.forEach((element, index) => {
            if(element.nombre === name){
                indexArray = index }
    });

    array.splice(indexArray, 1);

    localStorage.setItem('tabla', JSON.stringify(array));
 
   location.reload();
 
   

}



