//Aqui se obtienen las categorias de las peliculas
export const categorias = (api) => {
    fetch(api).then((resultado) => {
        if (resultado.status == 200) {
            resultado.json().then((datos) => {
                var html = "";
                datos.genres.forEach(gen => {
                    html += `<option value="${gen.id}">${gen.name}</option>`;
                })
                document.getElementById("categorias").innerHTML += html;
            });
        }        
    });
}