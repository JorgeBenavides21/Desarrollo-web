function sesion()
{
var form = document.form;
var user = form.usuario.value;
var pass = form.contraseña.value;

if(user=="jorge-benavides" && pass=="jb123")
    {
        alert("Bienvenido usuario");
    }
    else    
    {
        alert("datos incorrectos");
    }
}