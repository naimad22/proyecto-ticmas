const textoElemento = document.getElementById("hola");
const textoOriginal = textoElemento.textContent;
textoElemento.addEventListener("mouseover", function() {
  textoElemento.textContent = "hello";
});
textoElemento.addEventListener("mouseout", function() {
  textoElemento.textContent = textoOriginal;
});