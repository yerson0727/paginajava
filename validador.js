function validar(){
    let nombre= document.getElementById("nombre").Value;
    let edad= document.getElementById("edad").value;
}

if(nombre==""){
    alert("El nombre es Obligatorio", nombre)
    return false;
}else{
    return true;
}

if(edad=""){
    alert("Edad obligatorio");
    //return else;
}

else{
    //return true;
}