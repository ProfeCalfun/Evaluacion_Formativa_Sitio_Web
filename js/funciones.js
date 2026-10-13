 // Código JavaScript aquí
    function apagarAmpolleta(){
        document.getElementById("imgEncendida").src="../img/apagada.jpg"; // Ocultar la imagen encendida al cargar la página
    } 

    function encenderAmpolleta(){
        document.getElementById("imgEncendida").src="../img/encendida.jpg"; // Mostrar la imagen encendida al cargar la página
    }
    function sumaDosNumeros(){
        let num1 = parseFloat(document.getElementById("num1").value);
        let num2 = parseFloat(document.getElementById("num2").value);
        let suma = num1 + num2;
        document.getElementById("resultado").value = suma; // Mostrar el resultado en el campo de texto
    }
    function restaDosNumeros(){
        let num1 = parseFloat(document.getElementById("num1").value);
        let num2 = parseFloat(document.getElementById("num2").value);
        let resta = num1 - num2;
        document.getElementById("resultado").value = resta; // Mostrar el resultado en el campo de texto
    }

    $(document).ready(function() {
        $("#btnSuma").click(function() {
            sumaDosNumeros();
        });
    })