const lista = document.querySelector('#lista-paises ul');
function apicountry(){
    fetch('paises.json')
        .then(respuesta  => respuesta.json())
        .then(paises => {
            paises.array.forEach(pais => {
                 const list = document.createElement('li')
                list.innerHTML +=`
                <ul>${pais.pais}</ul>`;
                lista.appendChild(list);
            });
        })
}