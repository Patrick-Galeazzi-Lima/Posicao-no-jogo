// Função para calcular o saldo de partidas rankeadas
function calcularSaldoRankeadas(vitorias, derrotas) {
    // Iniciando depurador
    debugger;

    // Cálculo do saldo de vitórias - derrotas
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Decisão do nível com base nas vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Retorno do saldo e do nível
    return { saldoVitorias, nivel };
}

// Função principal para executar o cálculo com base em entradas do usuário
function iniciarCalculadora() {
    // Iniciando depurador
    debugger;

    // Variáveis para armazenar vitórias e derrotas
    let vitorias = parseInt(prompt("Digite o número de vitórias:"));
    let derrotas = parseInt(prompt("Digite o número de derrotas:"));

    // Validação de entrada
    if (isNaN(vitorias) || isNaN(derrotas) || vitorias < 0 || derrotas < 0) {
        alert("Por favor, insira números válidos e positivos.");
        return;
    }

    // Chama a função para calcular o saldo e nível
    let resultado = calcularSaldoRankeadas(vitorias, derrotas);

    // Exibe o resultado final
    alert(`O Herói tem um saldo de ${resultado.saldoVitorias} vitórias e está no nível ${resultado.nivel}.`);
}

// Iniciar a calculadora
iniciarCalculadora();
