const faturamento = [
    { "dia": 1, "valor": 22174.1664 },
    { "dia": 2, "valor": 24537.6698 },
    { "dia": 3, "valor": 26139.6134 },
    { "dia": 4, "valor": 0.0 },
    { "dia": 5, "valor": 0.0 },
    { "dia": 6, "valor": 26742.6612 },
    { "dia": 7, "valor": 0.0 },
    { "dia": 8, "valor": 42889.2258 },
    { "dia": 9, "valor": 46251.174 },
    { "dia": 10, "valor": 11191.4722 },
    { "dia": 11, "valor": 0.0 },
    { "dia": 12, "valor": 0.0 },
    { "dia": 13, "valor": 3847.4823 },
    { "dia": 14, "valor": 373.7838 },
    { "dia": 15, "valor": 2659.7563 },
    { "dia": 16, "valor": 48924.2448 },
    { "dia": 17, "valor": 18419.2614 },
    { "dia": 18, "valor": 0.0 },
    { "dia": 19, "valor": 0.0 },
    { "dia": 20, "valor": 35240.1826 },
    { "dia": 21, "valor": 43829.1667 },
    { "dia": 22, "valor": 18235.6852 },
    { "dia": 23, "valor": 4355.0662 },
    { "dia": 24, "valor": 13327.1025 },
    { "dia": 25, "valor": 0.0 },
    { "dia": 26, "valor": 0.0 },
    { "dia": 27, "valor": 25681.8318 },
    { "dia": 28, "valor": 1718.1221 },
    { "dia": 29, "valor": 13220.495 },
    { "dia": 30, "valor": 8414.61 }
];

// Calculando o menor e maior valor de faturamento
const valores = faturamento.map(item => item.valor).filter(valor => valor > 0);
const menorValor = Math.min(...valores);
const maiorValor = Math.max(...valores);

// Calculando a média mensal desconsiderando os dias com faturamento 0
const somaValores = valores.reduce((acc, valor) => acc + valor, 0);
const mediaMensal = somaValores / valores.length;

// Número de dias com faturamento superior à média mensal
const diasAcimaDaMedia = faturamento.filter(item => item.valor > mediaMensal).length;

// Preenchendo o select com os dias do mês
const selectDia = document.getElementById("dia");
faturamento.forEach(item => {
    const option = document.createElement("option");
    option.value = item.dia;
    option.textContent = `Dia ${item.dia}`;
    selectDia.appendChild(option);
});

// Exibindo os resultados no HTML
function exibirResultado() {
    const diaSelecionado = parseInt(selectDia.value);
    const faturamentoDia = faturamento.find(item => item.dia === diaSelecionado);

    const resultDiv = document.getElementById("result");
    if (faturamentoDia) {
        resultDiv.innerHTML = `
            <p>Menor valor de faturamento: R$ ${menorValor.toFixed(2).replace(".",",")}</p>
            <p>Maior valor de faturamento: R$ ${maiorValor.toFixed(2).replace(".",",")}</p>
            <p>Média mensal (considerando dias com faturamento): R$ ${mediaMensal.toFixed(2).replace(".",",")}</p>
            <p>Número de dias com faturamento superior à média: ${diasAcimaDaMedia}</p>
            <p>Faturamento no dia ${diaSelecionado}: R$ ${faturamentoDia.valor.toFixed(2).replace(".",",")}</p>
        `;
    }
}

selectDia.addEventListener("change", exibirResultado);