const api = "api_key=153474a6a2d2bbd467af8d2189312c3c";
const raiz = "https://api.themoviedb.org/3/";
const idioma = "&language=es-ES";
const generos = "genre/movie/list?";
const pelicula = "discover/movie?";
const populares1 = "trending/tv/day?";

var parametro1 = raiz + generos + api + idioma;
var parametro2 = raiz + pelicula + api + idioma;
var parametro3 = raiz + populares1 + api + idioma;

import {
    categorias
} from "./generos.js";

categorias(parametro1)


import 
{
    peliculas
} from "./peliculas.js";

var value = document.getElementById("categorias");
value.addEventListener("change",()=>peliculas(parametro2 + "&with_genres=" + value.value),false);


import 
{
    populares
} from "./populares.js";

document.getElementById("boton").onclick = () => {populares(parametro3)};