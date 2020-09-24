const proxyurl = "https://dev-kev-git.github.io/country/";
const url ="paises.json"
const lista = document.querySelector('#lista-paises ul');
const detail = document.querySelector('#detail ul');
function apicountry(){
fetch(proxyurl + url)
        .then(respuesta  => respuesta.json())
        .then(paises => {
            paises.forEach(pais => {
                 const list = document.createElement('li')
                list.innerHTML +=`
                <ul id="countrys" }><a href="javascript:open()">${pais.pais}</ul>`;
                lista.appendChild(list);
            });
        })
        fetch(proxyurl + url)
        .then(respuesta  => respuesta.json())
        .then(paises => {
            paises.forEach(pais => {
                 const list = document.createElement('li')
                list.innerHTML +=`
                <ul ><a href="javascript:open()" id="listado" + pais.id>${pais.capital} , ${pais.poblacion}</ul>`;
                detail.appendChild(list);
                $("#listado" + pais.id).on("click"),function(){selectid(id)};
            });
        })
}

apicountry();