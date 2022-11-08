var array;

function arraymulti(){
    array = [
        {username:"Sheila", cos:"192064", doc:"123456", tipouser:"estudiante"},
        {username:"Silvana", cos:"192065", doc:"123456", tipouser:"profe"},
        {username:"Ropero", cos:"192066", doc:"123456", tipouser:"admin"}
    ]
    let fecha = new Date();
    let minutos = fecha.getMinutes();
    console.log(minutos);
}

function compara(){
    console.log(array);
    var nombre = $("#nombre").val();
    for(let i=0;i<array.length;i++){
        if(nombre==array[i].username){
            console.log("El nombre SI existe");
        }else{
            console.log("El nombre NO existe");
        }
    }

    
}