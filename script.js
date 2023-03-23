function copiarTexto() {
    let textoCopiado = document.getElementById("texto");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("A chave/e-mail foi copiado: " + textoCopiado.value);
  }