 // Código JavaScript aquí
    function apagarAmpolleta(){
        document.getElementById("imgEncendida").src="../img/apagada.jpg"; // Ocultar la imagen encendida al cargar la página
    } 

    function encenderAmpolleta(){
        document.getElementById("imgEncendida").src="../img/encendida.jpg"; // Mostrar la imagen encendida al cargar la página
    }
    function sumaDosNumeros(){
        let num1 = 5;
        let num2 = 10;
        let suma = num1 + num2;
        return suma;
    }
    function restaDosNumeros(){
        let num1 = 10;
        let num2 = 5;
        let resta = num1 - num2;
        return resta;
    }