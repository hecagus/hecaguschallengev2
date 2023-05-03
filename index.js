function resultado() {
  const inputText = document.querySelector("#input-texto").value;
  
  if (inputText === "") {
    document.getElementById("botonCopiar").style.display = "none";
    document.getElementById("divImagen").style.display = "block";
  } else {
    document.getElementById("botonCopiar").style.display = "block";
    document.getElementById("divImagen").style.display = "none";
  }
}

function quitarImagen() {
  document.getElementById("divImagen").style.display = "none";
}

function encriptar() {
  const caracteres = /[A-Záéíóúàèìòù]/g;
  const texto = document.querySelector("#input-texto").value;

  if (texto === "") {
    alert("Lo siento, pero no debe estar vacío.");
  } else if (texto.match(caracteres)) {
    alert("El texto no puede contener mayúsculas, acentos ni caracteres especiales.");
  } else {
    const textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");

    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;

    document.getElementById("msg").style.visibility = "visible";
    document.getElementById("btn-copy").style.visibility = "visible";

    quitarImagen();
  }
}

var boton1 = document.querySelector("#btn-encriptar");
boton1.onclick = encriptar;

function desencriptar() {
  const texto = document.querySelector("#input-texto").value;
  const textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  document.querySelector(".text-input-salida").value = textoCifrado;
  document.querySelector("#input-texto").value;

  document.getElementById("msg").style.visibility = "visible";
  document.getElementById("btn-copy").style.visibility = "visible";
}

var boton2 = document.querySelector("#btn-desencriptar");
boton2.onclick = desencriptar;

function copiarTexto() {
  const copiar = document.getElementById("msg");
  copiar.select();
  copiar.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copiar.value);

  alert("Se copió el texto: " + copiar.value);
  console.log(alert);
}

var botonCopiar = document.querySelector("#btn-copy");
botonCopiar.onclick = copiarTexto;
