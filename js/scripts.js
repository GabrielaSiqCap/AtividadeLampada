let led = "ligar";

const ligar = () => {
  let btnEnviar = document.getElementById("btnEnviar");
  let imgLampada = document.getElementById("lampada");

  if (led == "ligar") {
    // lampada.innerHTML = `<img id="lampada" src="img/acesa.jpg" alt="Lâmpada">`;
    imgLampada.src = "img/acesa.jpg";
    imgLampada.alt = "Lampada acesa.";
    // document.getElementsByTagName("footer")[0].style.background = "#e30613";
    btnEnviar.innerHTML = "Apagar";
    led = "apagar";
  } else {
    // lampada.innerHTML = `<img id="lampada" src="img/apagada.jpg" alt="Lâmpada">`;
    imgLampada.src = "img/apagada.jpg"; //src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imgLampada.alt = "Lampada apagada.";

    btnEnviar.innerHTML = "Acender";
    led = "ligar";
  }
};

const gerarImagem = () => {
  let qtdImagem = document.getElementById("inQtdImg").value; //valor informado pelo usuário
  let canvas = document.getElementById("canvas");
  
  canvas.innerHTML = "";

for (let i = 1; i <= qtdImagem; i++) {
   canvas.innerHTML += `<img class="imagens"
id="lampada" src="img/acesa.jpg" alt="Lâmpada">`;
}
};

const calcular = () => {
    let valPedido = document.getElementById("inValorPedido");
    let percDesconto = document.getElementById ("inPercDesc");
    let valDesconto = document.getElementById ("inValDesc");
    let valLiquido = document.getElementById ("inValFinal");

    if (valPedido >= 2000){
        percDesconto = `1,5%`
        valDesconto = ``
    } else if (valPedido >= 1500){
        percDesconto = `1,0%`
    } else if (valPedido >= 1000){
        percDesconto = `0,8%`
    } else

    };
