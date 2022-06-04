function ingresar(){
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