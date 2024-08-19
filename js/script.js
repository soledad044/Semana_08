const DATA_URL = "json/data.json"; // URL que contiene los datos que queremos mostrar

const container = document.getElementById("container"); // "Traemos" utilizando el DOM el div de id "container" para colocar la información en él

/**
 * Función que recibe por parámetro un array con los datos que se mostrarán en el DOM
 * Los datos se mostrarán dentro del div de id "container" y por cada ítem se está creando un nuevo párrafo donde se
 * imprime el campo "name" y el campo "lastname" separados por un espacio
 */
function showData(dataArray) {
  // El for itera sobre los elementos del array
  for (const item of dataArray) {
    // En la siguiente línea se utilizan "backticks" para armar el String. Más info => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
    container.innerHTML += `<p>${item.name} ${item.lastname}</p>`; // Se concatena cada párrafo de la manera que queremos mostrarlo al innerHTML del contenedor
  }
}

// Realiza el fetch al archivo con los datos y muestra los datos con la función showData
fetch(DATA_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo obtener la información. Por favor, verifica la URL del archivo.');
    }
    return response.json();
  })
  .then(data => {
    showData(data); // Llama a la función showData pasando los datos obtenidos
  })
  .catch(error => {
    console.error('Hubo un problema al intentar cargar los datos:', error);

  });