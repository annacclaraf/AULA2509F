function inserirLivro(listaLivros) {
  let nome = prompt("Nome do livro:")
  let autor = prompt("Autor:")
  let ano = prompt("Ano de publicação:")
  let avaliacao = prompt("Avaliação (1-5):")

  let livro = {
    nome: nome,
    autor: autor,
    ano: ano,
    avaliacao: avaliacao
  }

  listaLivros.push(livro)
  return listaLivros
}

function imprimirNomes(listaLivros) {
  if (listaLivros.length === 0) {
    alert("Nenhum livro cadastrado.")
    return
  }
  let nomes = ""
  for (let i = 0; i < listaLivros.length; i++) {
    nomes += listaLivros[i].nome + "\n"
  }
  alert("Livros cadastrados:\n" + nomes)
}

function imprimirLivroEspecifico(listaLivros) {
  let nomeBusca = prompt("Digite o nome do livro que deseja ver:")
  let encontrado = null

  for (let i = 0; i < listaLivros.length; i++) {
    if (listaLivros[i].nome.toLowerCase() === nomeBusca.toLowerCase()) {
      encontrado = listaLivros[i]
      break
    }
  }

  if (encontrado) {
    alert(
      "Nome: " + encontrado.nome +
      "\nAutor: " + encontrado.autor +
      "\nAno: " + encontrado.ano +
      "\nAvaliação: " + encontrado.avaliacao
    )
  } else {
    alert("Livro não encontrado.")
  }
}

function imprimirLivrosAutor(listaLivros) {
  let autorBusca = prompt("Digite o nome do autor:")
  let encontrados = []

  for (let i = 0; i < listaLivros.length; i++) {
    if (listaLivros[i].autor.toLowerCase() === autorBusca.toLowerCase()) {
      encontrados.push(listaLivros[i])
    }
  }

  if (encontrados.length > 0) {
    let texto = ""
    for (let i = 0; i < encontrados.length; i++) {
      texto +=
        "Nome: " + encontrados[i].nome +
        "\nAno: " + encontrados[i].ano +
        "\nAvaliação: " + encontrados[i].avaliacao + "\n\n"
    }
    alert("Livros do autor " + autorBusca + ":\n\n" + texto)
  } else {
    alert("Nenhum livro encontrado para esse autor.")
  }
}

function menu() {
  let livros = []
  let opcao = ""

  while (opcao !== "e") {
    opcao = prompt(
      "a) Inserir dados do livro\n" +
      "b) Imprimir nomes de todos os livros\n" +
      "c) Imprimir todos os dados de um livro específico\n" +
      "d) Imprimir todos os dados dos livros de um autor específico\n" +
      "e) Encerrar\n\n" +
      "Escolha uma opção:"
    )

    if (opcao === "a") livros = inserirLivro(livros)
    else if (opcao === "b") imprimirNomes(livros)
    else if (opcao === "c") imprimirLivroEspecifico(livros)
    else if (opcao === "d") imprimirLivrosAutor(livros)
    else if (opcao === "e") alert("Encerrando o programa")
    else alert("Opção inválida!")
  }
}

menu()
