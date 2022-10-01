

function calcular(){
    var dia=Number(document.getElementById("dia").value);
    let mes=Number(document.getElementById("mes").value);
    let anio=Number(document.getElementById("anio").value);

    if(dia>31 || dia<1){
        document.getElementById("resultado").innerHTML="Día inválido";
        return;
    }
    if(mes>12 || mes<1){
        document.getElementById("resultado").innerHTML="Mes inválido";
        return;
    }    
    if(anio>3000 || anio<1000){
        document.getElementById("resultado").innerHTML="Año inválido";
        return;
    }        
    const date = new Date(anio, mes, dia);
    var dia= date.toLocaleDateString('es-MX', {
        weekday: 'long',
    });
    console.log(dia);
    let laboral=true;
    switch(dia){
        case 'lunes':
            laboral=true;
            break;
        case 'martes':
            laboral=true;
            break;
        case 'miércoles':
            laboral=true;
            break;
        case 'jueves':
            laboral=true;
            break;
        case 'viernes':
            laboral=true;
            break;
        case 'sábado':
            laboral=false;
            break; 
        case 'domingo':
            laboral=false;
            break;           
    }
    let resultado="";
    let laboralString=laboral ? ' día laboral' : ' día no laboral';
    resultado=dia.charAt(0).toUpperCase() + (dia).slice(1)+","+laboralString;
    document.getElementById("resultado").innerHTML=resultado;
}
