document.addEventListener("DOMContentLoaded", function() {
    let textoEscrito = document.getElementById("textoDescriptivo");
    let texto = "Nicolas Inchaustegui Gonzalez";
    let indice = 0;
  
    function agregarLetra() {
      textoEscrito.textContent += texto.charAt(indice);
      indice++;
      if (indice < texto.length) {
        setTimeout(agregarLetra, 100); // Intervalo entre letras (en milisegundos)
      }
    }
  
    agregarLetra(); // Iniciar la animación de escritura
  });