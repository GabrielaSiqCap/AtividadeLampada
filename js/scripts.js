// <!-- ELEMENTO É TUDO AQUILO QUE FICA EM "ROSA" DENTRO DO HTML -->

// 1-) --------------------------------------------------------------------
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

// 2-)---------------------------------------------------------------------
const gerarImagem = () => {
  let qtdImagem = document.getElementById("inQtdImg").value; //valor informado pelo usuário
  let canvas = document.getElementById("canvas");

  canvas.innerHTML = "";

  for (let i = 1; i <= qtdImagem; i++) {
    canvas.innerHTML += `<img class="imagens"
id="lampada" src="img/acesa.jpg" alt="Lâmpada">`;
  }
};

// 4-)-----------------------------------------------------------------------
const calcular = () => {
  let valPedido = document.getElementById("inValorPedido");
  let percDesconto = document.getElementById("inPercDesc");
  let valDesconto = document.getElementById("inValDesc");
  let valLiquido = document.getElementById("inValFinal");

  switch (true) {
    case valPedido.value >= 2000:
      percDesconto.value = 1.5;
      break;
    case valPedido.value >= 1500:
      percDesconto.value = 1.0;
      break;
    case valPedido.value >= 1000:
      percDesconto.value = 0.8;
      break;
    case valPedido.value >= 500:
      percDesconto.value = 0.5;
      break;
    default:
      break;
  }

  // if (valPedido.value >= 2000) {
  //   percDesconto.value = 1.5;
  // } else if (valPedido.value >= 1500) {
  //   percDesconto.value = 1.0;
  // } else if (valPedido.value >= 1000) {
  //   percDesconto.value = 0.8;
  // } else if (valPedido.value >= 500) {
  //   percDesconto.value = 0.5;
  // }

  valDesconto.value = valPedido.value * (percDesconto.value / 100);
  valLiquido.value = valPedido.value - valDesconto.value;
};

// 3-)-------------------------------------------------------------------
document.getElementById("mensagem-erro").style.display = "none";

const validaForm = () => {
  //captura de dados
  let data = document.getElementById("inData").value;
  let nome = document.getElementById("inCli").value;
  let tel = document.getElementById("inFone").value;
  let eMail = document.getElementById("inMail").value;
  let nomProd = document.getElementById("inProd").value;
  let quant = document.getElementById("inQtd").value;
  let valUni = document.getElementById("inVal").value;
  let mensErro = document.getElementById("mensagem-erro");

  //apagando as informações de erro
  mensErro.innerText = "";

  //validação dos dados
  data == "" && (mensErro.innerHTML += "Data informada inválida! <br>");
  nome == "" && (mensErro.innerHTML += "Nome informado inválido! <br>");
  nome.length < 3 &&
    (mensErro.innerHTML += "Nome do cliente com tamanho inválido! <br>");
  tel == "" &&
    (mensErro.innerHTML += "Número de telefone informado inválido! <br>");
  eMail == "" && (mensErro.innerHTML += "E-mail informado inválido! <br>");
  eMail.length < 6 && (mensErro.innerHTML += "E-mail informado inválido! <br>");
  nomProd == "" && (mensErro.innerHTML += "Produto informado inválido! <br>");
  nomProd.length < 6 &&
    (mensErro.innerHTML += "Produto informado inválido! <br>");
  quant == "" && (mensErro.innerHTML += "Quantidade informada inválida! <br>");
  quant < 0 && (mensErro.innerHTML += "Quantidade negativa! <br>");
  valUni == "" &&
    (mensErro.innerHTML += "Valor unitário informado inválido! <br>");
  valUni < 0 && (mensErro.innerHTML += "Valor negativo! <br>");

  //mostrar | ocultar erro
  mensErro.innerText == ""
    ? ((mensErro.style.display = "none"), (mensErro.innerText = "enviado!"))
    : ((mensErro.style.display = "block"), mensErro.classList.remove("verde"));

  mensErro.innerText == "enviado!" &&
    ((mensErro.style.display = "block"),
    (mensErro.innerText = "Formulário enviado com sucesso!"),
    mensErro.classList.add("verde"));
};

//     mensErro.innerText = ("Data informada inválida! <br>");
//   } else {
//     mensErro.style.display = "none";
//   }
//   if (nome == "") {
//     mensErro.style.display = "block";
//     mensErro.innerText = "Nome informado inválido! <br>";
//   } else {
//     mensErro.style.display = "none";
//   }
//   if (tel == "") {
//     mensErro.style.display = "block";
//     mensErro.innerText = "Número de telefone informado inválido! <br>";
//   } else {
//     mensErro.style.display = "none";
//   }
//   if (eMail == "") {
//     mensErro.style.display = "block";
//     mensErro.innerText = "E-mail informado inválido! <br>";
//   } else {
//     mensErro.style.display = "none";
//   }
//   if (nomProd == "") {
//     mensErro.style.display = "block";
//     mensErro.innerText = "Nome do produto informado inválido! <br>";
//   } else {
//     mensErro.style.display = "none";
//   }
//   if (quant == "" || >= 0) {
//     mensErro.style.display = "block";
//     mensErro.innerText = "Quantidade informada inválida! <br>";
//   } else {
//     mensErro.style.display = "none";
//   }
//   if (valUni == "" || >= 0) {
//     mensErro.style.display = "block";
//     mensErro.innerText = "Valor unitário informado inválido! <br>";
//   } else {
//     mensErro.style.display = "none";
//   }
// };
