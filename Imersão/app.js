function pesquisar() {
  // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos.
  let section = document.getElementById("resultados-pesquisa");

  // se titulo includes campoPesquisa
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if(campoPesquisa == "")  {
    section.innerHTML = "<p>Nada foi encontrado</p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados da pesquisa.
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let genero = "";
  let tags ="";

  // Itera sobre cada elemento (jogo) no array de dados.
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    genero = dado.genero.toLowerCase()

    if (titulo.includes(campoPesquisa) || genero.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Constrói uma string HTML para cada resultado, formatando os dados do jogo.
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.wiki}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta"> Gênero: ${dado.genero}</p>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.linkCompra}" target="_blank">Para acessar o Jogo</a>
        </div>
      `;
    }

  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado. Pesquise Novamente.</p>"
  }

  // Atribui a string com os resultados HTML à propriedade innerHTML da seção,
  // substituindo o conteúdo anterior pela nova lista de resultados.
  section.innerHTML = resultados;
}


