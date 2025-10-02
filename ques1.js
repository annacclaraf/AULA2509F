function inserirVenda(vendas) {
  let valorVenda = parseFloat(prompt("Digite o valor da venda:"))
  vendas.push(valorVenda)
  return vendas
}

function verVendas(vendas) {
  let total = 0
  for (let valor of vendas) {
    total += valor
  }
  alert("Número de vendas: " + vendas.length + "\nTotal vendido: R$ " + total)
}

function inserirDespesa(despesas) {
  let valorDespesa = parseFloat(prompt("Digite o valor da despesa:"))
  despesas.push(valorDespesa)
  return despesas
}

function verDespesas(despesas) {
  let total = 0
  for (let valor of despesas) {
    total += valor
  }
  alert("Total de despesas do dia: R$ " + total)
}

function menu() {
  let vendas = []
  let despesas = []
  let opcao = ""

  while (opcao !== "e") {
    opcao = prompt(
      "MENU\n\n" +
      "a) Inserir Valor de uma Venda\n" +
      "b) Ver status das vendas do dia\n" +
      "c) Inserir Valor de uma Despesa\n" +
      "d) Ver total de despesas do dia\n" +
      "e) Encerrar\n\n" +
      "Escolha uma opção:"
    )

    if (opcao === "a") {
      vendas = inserirVenda(vendas)
    } else if (opcao === "b") {
      verVendas(vendas) 
    } else if (opcao === "c") {
      despesas = inserirDespesa(despesas)
    } else if (opcao === "d") {
      verDespesas(despesas) 
    } else if (opcao === "e") {
      alert("Programa encerrado")
    } else {
      alert("Opção inválida")
    }
  }
}

menu()
