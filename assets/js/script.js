
//Función que llama a la api
const getData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    //bloque positivo
    try {
        const response = await fetch(url);
        // console.log("Response: ", response);
        // manejo de posibles errores
        if(response.status !== 404){
            const datos = await response.json();
            // console.log(datos);
            //aqui en el bloque try (camino positivo) se llama a función que imprime la lista
            imprimir(datos);
        }else{
            throw new Error('404')
        }
        //bloque error con alert desde el if que maneja los errores   
    } catch (err) {
        alert(err);
    }
}

//La linea 25 se considera una funcion? 
document.getElementById('btn').addEventListener('click', () => {
    //llamada a funcion que llama a la api
    getData();
});

//funcion que imprime la lista
function imprimir(datos) {
    //guardar en variable el elemento que recibe la lista
    const divUl = document.getElementById('post-data')
    //crear una lista desordenada desde js
    const ul = document.createElement('ul');
    //recorrer los datos que recibimos de la api
    datos.forEach(dato => {
        // Concatenar directamente los elementos li
        ul.innerHTML +=` <li>
                            <p><b>${dato.title}</b></p>
                            <p>${dato.body}</p>
                        </li>`;
    });
    // Agregar la ul creada en linea 35 dentro (porque con append queda después)
    //que ya tiene concatenados los li creados en cada vuelta del forEach 
    divUl.appendChild(ul);
}

