const $botonEncriptar = document.querySelector("#encriptar");
const $botonDesencriptar = document.querySelector("#desencriptar");
const $textarea = document.querySelector("#texto");
const $mensajeFinal = document.querySelector("#mensaje-final");

$botonEncriptar.addEventListener("click", () =>{
  if (($textarea.value.trim()) == ""){
      noHayMensaje();
    }else{

    $mensajeFinal.querySelector("#texto-encriptado").innerHTML = encriptar($textarea.value)

    mostrarMensaje();
    }
})

$botonDesencriptar.addEventListener("click", () =>{
  if(($textarea.value.trim()) == ""){
    noHayMensaje();
  } else{
  
    $mensajeFinal.querySelector("#texto-encriptado").innerHTML = desencriptar($textarea.value)

    mostrarMensaje();
  
  }
  
})

function encriptar(texto){
  let textoEncriptado = texto.toLowerCase();
  let challenge = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

  for(let i=0; i<challenge.length; i++){
  
    if(textoEncriptado.includes(challenge[i][0]))
    textoEncriptado = textoEncriptado.replaceAll(challenge[i][0], challenge[i][1]);
  }
  return textoEncriptado;
}

function desencriptar(texto) {
  let textoDesencriptado = texto.toLowerCase();
  let challenge = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

  for (let i = 0; i < challenge.length; i++) {
    if (textoDesencriptado.includes(challenge[i][1]))
      textoDesencriptado = textoDesencriptado.replaceAll(challenge[i][1], challenge[i][0]);
  }
  return textoDesencriptado;
}

function mostrarMensaje(){

  const items = $mensajeFinal.querySelectorAll(".item");

  $textarea.value = "";

  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "none";
  }

  let mostrarEncriptado = $mensajeFinal.querySelector("#texto-encriptado");
  mostrarEncriptado.style.display = "block";


}

function noHayMensaje(){
  const items = $mensajeFinal.querySelectorAll(".item");
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "block";
  }
  $mensajeFinal.querySelector("#texto-encriptado").innerHTML = "Ingresa el texto que desees encriptar o desencriptar.";
  
}