let Alfa_Romeo= ['-', 'Giulietta', 'Mito'];
let Audi = ['-', 'DB9', 'Vantage V8'];
let Mercedes_Benz = ['-', 'A4', 'A8'];
let BMW = ['-', 'Serie 3', 'Serie 5'];
let Chevrolet = ['-', 'Cruze', 'Aveo'];
let table = [];


function cambia(){
    let cars;
    cars = document.formulario1.cars[document.formulario1.cars.selectedIndex].value;
    if(cars!=0){
       let mis_opts=eval(cars);
       let num_opts=mis_opts.length;
        document.formulario1.opt.length = num_opts;
        for(let i=0; i<num_opts; i++){
            document.formulario1.opt.options[i].value=mis_opts[i];
            document.formulario1.opt.options[i].text=mis_opts[i];
        }
        }else{
            document.formulario1.opt.length = 1;
            
            document.formulario1.opt.options[0].value="-";
            document.formulario1.opt.options[0].text="-";
        }
   
        document.formulario1.opt.options[0].selected = true;
        
    }




//variable global
const formularioUI = document.querySelector('#formulario');

const informacion = [];

//events listeners
eventListener()

function eventListener(){

    formularioUI.addEventListener('submit', guardar);
     //cuando el documento esta listo
     document.addEventListener('DOMContentLoaded', () =>{
        table = JSON.parse(localStorage.getItem('tabla')) || [];
        console.log(table, 'esta es la tabla del localstorage de app.js')
    })

}

//funciones
function guardar(e){
    e.preventDefault();
    

    const nombre = document.querySelector('#nombre').value;
    const rut = document.querySelector('#rut').value;
    const patente = document.querySelector('#patente').value;
    const marca = document.querySelector('#cars').value;
    const modelo = document.querySelector('#opt').value;
    const color = document.querySelector('#color').value;

  const  ObjectInformation = {
         nombre,
         rut,
         patente,
         marca,
         modelo,
         color                                                                          
    }

    //añadir a la tabla
     table = [...table, ObjectInformation]
     sincronizarStorage()

    alert("Se ha guardado su registro con exito");
     
    location.reload();

}


function sincronizarStorage(){
    localStorage.setItem('tabla', JSON.stringify(table));
}




