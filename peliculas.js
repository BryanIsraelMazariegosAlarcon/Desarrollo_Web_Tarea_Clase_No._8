export function peliculas (api1){
    fetch(api1).then((resultado) => {
        if (resultado.status == 200) {
            resultado.json().then((datos) => {
                var html = "";
                datos.results.forEach(gen => {
                    html += `<div>
                            <p>${gen.title}</p>
                            <p>Fecha de lanzamiento: ${gen.release_date}</p>
                                <img src="https://image.tmdb.org/t/p/w500${gen.poster_path}"/>
                            </div>`;
                })
                document.getElementById("peliculas").innerHTML = html;
            });
        }
    });
} 