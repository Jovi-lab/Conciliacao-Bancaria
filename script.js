const empresaInput = document.getElementById("empresa");
const nomeEmpresaSpan = document.getElementById("nomeEmpresa");
const totalSpan = document.getElementById("total");
const empresasDiv = document.getElementById("empresas");
const adicionarEmpresaBtn = document.getElementById("adicionarEmpresa");
const fluxoDiv = document.getElementById("fluxo");

empresaInput.addEventListener("input", () => {
  nomeEmpresaSpan.textContent = empresaInput.value || "[Nome da Empresa]";
});

let empresas = [];

function criarEmpresa(nome = "Nova Empresa") {
  const empresaBox = document.createElement("div");
  empresaBox.className = "empresa-box";

  empresaBox.innerHTML = `
    <h3>${nome}</h3>
    <label>Banco do Brasil:</label>
    <input type="number" class="saldo" />
    <label>Sicredi:</label>
    <input type="number" class="saldo" />
    <label>Sicoob:</label>
    <input type="number" class="saldo" />
    <label>Itaú:</label>
    <input type="number" class="saldo" />
  `;

  empresasDiv.appendChild(empresaBox);

  const saldos = empresaBox.querySelectorAll(".saldo");
  saldos.forEach(input => input.addEventListener("input", calcularTotal));
  empresas.push(saldos);
}

function calcularTotal() {
  let total = 0;
  empresas.forEach(grupo => {
    grupo.forEach(input => {
      total += parseFloat(input.value) || 0;
    });
  });
  totalSpan.textContent = total.toFixed(2);
}

adicionarEmpresaBtn.addEventListener("click", () => {
  const nome = prompt("Digite o nome da nova empresa:");
  if (nome) criarEmpresa(nome);
});

function gerarFluxo() {
  const hoje = new Date();
  for (let i = 0; i < 7; i++) {
    const dia = new Date(hoje);
    dia.setDate(hoje.getDate() + i);
    const dataFormatada = dia.toLocaleDateString("pt-BR");

    const container = document.createElement("div");
    container.className = "empresa-box";
    container.innerHTML = `
      <h3>${dataFormatada}</h3>
      <label>A pagar:</label>
      <input type="number" class="pagar" />
      <label>A receber:</label>
      <input type="number" class="receber" />
      <p>Total: R$ <span class="resultado">0.00</span></p>
    `;

    const pagarInput = container.querySelector(".pagar");
    const receberInput = container.querySelector(".receber");
    const resultadoSpan = container.querySelector(".resultado");

    function atualizarResultado() {
      const pagar = parseFloat(pagarInput.value) || 0;
      const receber = parseFloat(receberInput.value) || 0;
      resultadoSpan.textContent = (receber - pagar).toFixed(2);
    }

    pagarInput.addEventListener("input", atualizarResultado);
    receberInput.addEventListener("input", atualizarResultado);

    fluxoDiv.appendChild(container);
  }
}

gerarFluxo();
criarEmpresa("Empresa Padrão");
