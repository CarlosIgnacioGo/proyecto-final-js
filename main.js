const alimentos ={
    nombreAlimentos:[ "manzana", "sandia",  "frutilla", "pepino"],
    calorias:[110, 150, 200, 130]
}

let alimentos_bajos=document.getElementById("alimentos_bajos");

const alimentosString = JSON.stringify(alimentos);
console.log(alimentosString);
localStorage.setItem("alimentos", alimentosString );

const productojs = JSON.parse(localStorage.getItem("alimentos"));
console.log(productojs.nombreAlimentos);
console.log(productojs.calorias);

let p = document.createElement("p");
console.log(p);
p.textContent= `nombre de los alimentos bajos en calorias: ${productojs.nombreAlimentos.join(", ")}` 
alimentos_bajos.appendChild(p);

let p2 = document.createElement("p");
console.log(p2);
p2.textContent= "calorias de los alimentos: " +  productojs.calorias
alimentos_bajos.appendChild(p2);

let boton = document.getElementById("boton"); 

$("#boton").click(function(){
    let edad = parseInt($("#edad").val());
    let nombre =  $("#nombre").val();
    let sexo =  $("#sexo").val();
    let peso = parseInt($("#peso").val());

    localStorage.setItem("nombre", nombre);
    localStorage.getItem("nombre");
    let nombreStorage= localStorage.getItem("nombre");
    alert( " bienvenida " + nombreStorage);


    calculoDeCalorias(edad, sexo, peso);
    
});

function calculoDeCalorias(edad, sexo, peso) {
    console.log(edad)

    let resultado; 
    if (edad >10 && edad <18){

        if (sexo == "masculino"){
           resultado = 17.686 * peso + 658.2
           document.getElementById("textito").innerHTML =  " las calorias que deberias consumir son " + resultado ;
        } else if (sexo == "femenino"){
            resultado= 20.315 * peso + 485.9
            document.getElementById("textito").innerHTML =  " las calorias que deberias consumir son " + resultado ;
        }  

    } else if (edad >18 && edad <30){

        if (sexo == "masculino"){
           resultado = 15.057 * peso + 692.
           document.getElementById("textito").innerHTML =  " las calorias que deberias consumir son " + resultado ;
        } else if (sexo == "femenino"){
            resultado = 14.818 * peso + 486.6
            document.getElementById("textito").innerHTML =  " las calorias que deberias consumir son " + resultado ;
        }  

    }  else if (edad >30 && edad <60){

        if (sexo == "masculino"){
           resultado = 11.472 * peso + 873.
           document.getElementById("textito").innerHTML =  " las calorias que deberias consumir son " + resultado ;
        } else if (sexo == "femenino"){
            resultado = 8.126 * peso + 845
            document.getElementById("textito").innerHTML =  " las calorias que deberias consumir son " + resultado ;
        }  

    }
    
}
     $("#btn").click( function(){
         $.get("https://jsonplaceholder.typicode.com/users", function (respuesta, estado){
            if ( estado== "success"){
            for (const recorrido of respuesta) {
                $("#contenedorDeNombre").prepend(`<p>${recorrido.name}</p>`);
            }
        }
    });
}); 