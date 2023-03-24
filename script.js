function alterarBotao() {
  document.getElementById('button-pix').onclick = function() {
    this.textContent = 'Chave e-mail copiada!';
  } 
}


function copiarTexto() {
        let textoCopiado = document.getElementById("texto");
        textoCopiado.select();
        textoCopiado.setSelectionRange(0, 99999);
        document.execCommand("copy");
}