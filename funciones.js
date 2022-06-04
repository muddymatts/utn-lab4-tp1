

function ingresar(e){
    e.preventDefault();
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
    
    let url = "http://168.194.207.98:8081/tp/login.php?user="+user+"&pass="+pass;
    
    let jsonResultante = JSON.parse(get(url));
    if(jsonResultante.respuesta == 'ERROR'){
        alert(jsonResultante.mje);
    }else{
        
        location.href = 'lista.html';
        alert(jsonResultante.mje);
    }
}

function get(url){
    let Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",url,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

function cargaDatos(){
    let jsonResultante = JSON.parse(get('http://168.194.207.98:8081/tp/lista.php?action=BUSCAR'));

    let tabla = 
    "<table id='tablaUsusarios' border='1' align='center'>"+
    "<tr class='titulo'>"+
    "<td>Id</td><td>Ususario</td><td>Bloqueado</td><td>Apellido</td><td>Nombre</td>"+
    "</tr>"

    for(let i = 0; i < jsonResultante.length; i++){
        tabla+= "<tr "

            if(jsonResultante[i].bloqueado.includes("Y")){
                tabla+= "class='filaBloqueada'>"
            } else {
                tabla+= "class='filaNoBloqueada'>"
            }
        
            tabla+="<td>"+
            jsonResultante[i].id+
            "</td>"+
            "<td>"+
            jsonResultante[i].usuario+
            "</td>"+
            "<td>"+
            jsonResultante[i].bloqueado+
            "</td>"+
            "<td>"+
            jsonResultante[i].apellido+
            "</td>"+
            "<td>"+
            jsonResultante[i].nombre+
            "</td>"+
            "<td>"+
            "<input type='button' value='desbloquear' onclick='desbloquear("+jsonResultante[i].id+")' style= background-color: green;>"+
            "</td>"+
            "<td>"+
            "<input type='button' value='bloquear' onclick='bloquear("+jsonResultante[i].id+")' style= background-color: red;>"+
            "</td>"

        tabla+="</tr>"
    }

    tabla += "</table>"

    document.getElementById('tabla').innerHTML = tabla

}

function listarBusqueda(e){
    e.preventDefault();
    let url="http://168.194.207.98:8081/tp/lista.php?action=BUSCAR&usuario="+document.getElementById('usuarioBusqueda').value
    let jsonResultante = JSON.parse(get(url));

    let tabla = 
    "<table id='tablaUsusarios' border='1' align='center'>"+
    "<tr class='titulo'>"+
    "<td>Id</td><td>Ususario</td><td>Bloqueado</td><td>Apellido</td><td>Nombre</td>"+
    "</tr>"

    for(let i = 0; i < jsonResultante.length; i++){

            tabla+= "<tr "
            if(jsonResultante[i].bloqueado.includes("Y")){
                tabla+= "class='filaBloqueada'>"
            } else {
                tabla+= "class='filaNoBloqueada'>"
            }
            tabla+="<td>"+
            jsonResultante[i].id+
            "</td>"+
            "<td>"+
            jsonResultante[i].usuario+
            "</td>"+
            "<td>"+
            jsonResultante[i].bloqueado+
            "</td>"+
            "<td>"+
            jsonResultante[i].apellido+
            "</td>"+
            "<td>"+
            jsonResultante[i].nombre+
            "</td>"+
            "<td>"+
            "<input type='button' value='desbloquear' onclick='desbloquear("+jsonResultante[i].id+")' style= background-color: green;>"+
            "</td>"+
            "<td>"+
            "<input type='button' value='bloquear' onclick='bloquear("+jsonResultante[i].id+")' style= background-color: red;>"+
            "</td>"
            tabla+="</tr>"
        }
        
  
    tabla += "</table>"

    if(jsonResultante.length==0){
        alert("No hay resultados para esa búsqueda")
    } else {
        document.getElementById('tabla').innerHTML = tabla
    }

}

function bloquear(id){
    fetch('http://168.194.207.98:8081/tp/lista.php?action=BLOQUEAR&idUser='+id+'&estado=Y')    
}

function desbloquear(id){
    fetch('http://168.194.207.98:8081/tp/lista.php?action=BLOQUEAR&idUser='+id+'&estado=N')
}