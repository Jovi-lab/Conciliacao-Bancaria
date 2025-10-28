const empresaInput = document.getElementById("empresa");
const nomeEmpresaSpan = document.getElementById("nomeEmpresa");
const totalSpan = document.getElementById("total");
const saldoInputs = document.querySelectorAll(".saldo");
const fluxoDiv = document.getElementById("fluxo");

// Atualiza nome da empresa
empresaInput.addEventListener("input", () => {
  nomeEmpresaSpan.textContent = empresaInput.value || "[Nome da Empresa]";
});

// Calcula total dos saldos
saldoInputs.forEach(input => {
  input.addEventListener("input", calcularTotal);
});

function calcularTotal() {
  let total = 0;
  saldoInputs.forEach(input => {
    total += parseFloat(input.value) || 0;
  });
  totalSpan.textContent = total.toFixed(2);
}

// Gera fluxo de caixa para os próximos 7 dias
function gerarFluxo() {
  const hoje = new Date();
  for (let i = 0; i < 7; i++) {
    const dia = new Date(hoje);
    dia.setDate(hoje.getDate() + i);
    const dataFormatada = dia.toLocaleDateString("pt-BR");

    const container = document.createElement("div");
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
