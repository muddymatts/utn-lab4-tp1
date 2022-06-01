Trabajo Practico N° 1 – Laboratorio de Computación 4
FRONT END – Java Script
Implemente una aplicación web haciendo uso únicamente de HTML y Java Script (no se puede
utilizar librerías o framework de ningún tipo) que respete los siguientes lineamientos.
Codifique un formulario en HTML “login.html” que permita el ingreso de un usuario y passwordgit ad
Al ejecuta el botón Ingresar se deberá llamar a una función Java Script que emita una llamada a la
siguiente URL:
http://168.194.207.98:8081/tp/login.php
pasando como parámetros el usuario y clave ingresados en el formulario, la petición realizada
retornara como resultado el siguiente JSON
{"respuesta":"","mje":""}
Donde en respuesta retornara OK o ERROR dependiendo si se pudo realizar o no el login a la app.
Ejemplo:
http://168.194.207.98:8081/tp/login.php?user=mjmartinez&pass=123456
retorna
{"respuesta":"OK","mje":"Ingreso Valido. Usuario mjmartinez"}
En cambio
http://168.194.207.98:8081/tp/login.php?user=mjmartinez&pass=123
retorna
{"respuesta":"ERROR","mje":"Ingreso Invalido, usuario y\/o clave incorrecta"}
En caso de retornar ERROR muestre el mje por pantalla al usuario
En caso de retornar OK redireccione la aplicación a una nueva página HTML “lista.html”
En la pagina lista.html deberá mostrar una grilla que liste la totalidad de los datos obtenidos como
resultante de la llamada a la URL
http://168.194.207.98:8081/tp/lista.php?action=BUSCAR
Agregue en la parte superior de la grilla una caja de texto y un botón que permita ingresar texto
para la búsqueda de un usuario
Ejemplo
http://168.194.207.98:8081/tp/lista.php?action=BUSCAR&usuario=si
Retornara
[{
"id": "121",
"usuario": "rcsiri",
"bloqueado": "N",
"apellido": "SIRI",
"nombre": "Rocio Cecilia"
}, {
"id": "422",
"usuario": "mfsilvestre",
"bloqueado": "N",
"apellido": "SILVESTRE",
"nombre": "MARIA FLORENCIA"
}, {
"id": "223",
"usuario": "apessina",
"bloqueado": "N",
"apellido": "PESSINA",
"nombre": "ALCIDES NORMAN"
}, {
"id": "349",
"usuario": "mesposito",
"bloqueado": "N",
"apellido": "ESPOSITO",
"nombre": "MARCELA LILIANA"
}]
Cargue el resultado de la búsqueda en la grilla, en caso de no obtener resultado indique al usuario
de dicha situación.
Agregue a la derecha de la grilla 2 nuevas columnas que serán usadas para marcar al usuario como
BLOQUEADO O DESBLOQUEADO
La llamada para bloquear será la siguiente:
http://168.194.207.98:8081/tp/lista.php?action=BLOQUEAR&idUser=XXXX&estado=Y
Y la llamada para desbloquear
http://168.194.207.98:8081/tp/lista.php?action=BLOQUEAR&idUser=XXXX&estado=N
Siendo XXXX el id del usuario cargado en la grilla
Finalmente agregue el css necesario para que las filas de la grilla que contengan usuarios
bloqueados el fondo sea de color #fd9f8b, y las filas no bloquedas de color #cef8c6
