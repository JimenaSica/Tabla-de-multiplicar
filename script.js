document.getElementById("multiplicarForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que se recargue la página

  const numero = parseInt(document.getElementById("numero").value);
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = ""; // Limpia resultados anteriores

  if (isNaN(numero) || numero < 1 || numero > 10) {
    window.alert("Error: El número debe estar entre 1 y 10.");
    return;
  }

  let sumaTotal = 0;
  for (let i = 1; i <= 10; i++) {
    const producto = numero * i;
    resultadoDiv.innerHTML += `${numero} x ${i} = ${producto}<br>`;
    sumaTotal += producto;
  }

  resultadoDiv.innerHTML += `<strong>La suma total es: ${sumaTotal}</strong>`;
});
