//crear una funcion
function calcular(){
    //definir variables para el iva, precio y cantidad
    const iva = 0.19;
    let precio = document.simuladorFactura.precio.value;
    let cantidad = document.simuladorFactura.cantidad.value;
    //capturar el producto
    producto = document.getElementById('producto').value;
    
    /*crear una validacion para evitar operaciones con datos nulos o vacios; que la cantidad o precio no sea 0.
    se hace con una estructura condicional if - then  */

    if (precio == 0 || precio == null || cantidad == 0 || cantidad == null){
        alert("cantidad o precio son 0 o no son validos intentar de nuevo");
    }else{
        //declarar las variables para las operaciones
        //valor total es vt
        let vt = precio * cantidad;
        // valor del centaje del producto con iva es vi
        let vi = vt * iva;
        // total a pagar es la suma de iva + valor total tp
        let tp = vt + vi;
        //imprimir o mostrar los resultados en la pagina web; se utiliza un elemento llamado innerHTML
        // mostrar el producto seleccionado
        document.getElementById("valorProducto").innerHTML= producto;
        //mostrar  el precio
        document.getElementById("valorPrecio").innerHTML= precio;
        //mostrar valor total
        document.getElementById("valorTotal").innerHTML = vt;
        //mortrar el iva
        document.getElementById("valorIva").innerHTML = vi;
        //mostrar valor a pagar
        document.getElementById("totalPagar").innerHTML = tp;
    }

}