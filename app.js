const container = document.getElementById("filmesContainer");
const search = document.getElementById("search");
const searchButton = document.getElementById("searchButton");
const results = document.getElementById("results");

console.log(search.value);
console.log("teste");

filmesWillSmith.forEach((filme) => {
  const filmeElement = document.createElement("div");
  filmeElement.innerHTML = `

  <img src=${filme.capa} alt=${filme.titulo}/>
    <div>
    <h3>Título: ${filme.titulo}</h3>
    <p>Gênero: ${filme.genero}</p>
    <p>Data de Lançamento: ${filme.Data}</p>
    <p>Personagem: ${filme.Papel}</p>
    </div>
    <hr>
  `;
  container.appendChild(filmeElement);
});

searchButton.addEventListener("click", function () {
  const searchValue = search.value.toLowerCase();
  let result = [];
  filmesWillSmith.filter((filme) => {
    if (filme.titulo.toLowerCase().includes(searchValue)) {
      const resultElement = document.createElement("div");
      resultElement.innerHTML = `

  <img src=${filme.capa} alt=${filme.titulo}/>
    <div>
    <h3>Título: ${filme.titulo}</h3>
    <p>Gênero: ${filme.genero}</p>
    <p>Data de Lançamento: ${filme.Data}</p>
    <p>Personagem: ${filme.Papel}</p>
    </div>
    <hr>
  `;
      results.appendChild(resultElement);
    } else if (filme.genero.toLowerCase().includes(searchValue)) {
      const resultElement = document.createElement("div");
      resultElement.innerHTML = `

  <img src=${filme.capa} alt=${filme.titulo}/>
    <div>
    <h3>Título: ${filme.titulo}</h3>
    <p>Gênero: ${filme.genero}</p>
    <p>Data de Lançamento: ${filme.Data}</p>
    <p>Personagem: ${filme.Papel}</p>
    </div>
    <hr>
  `;
      results.appendChild(resultElement);
    } else if (filme.Papel.toLowerCase().includes(searchValue)) {
      const resultElement = document.createElement("div");
      resultElement.innerHTML = `

  <img src=${filme.capa} alt=${filme.titulo}/>
    <div>
    <h3>Título: ${filme.titulo}</h3>
    <p>Gênero: ${filme.genero}</p>
    <p>Data de Lançamento: ${filme.Data}</p>
    <p>Personagem: ${filme.Papel}</p>
    </div>
    <hr>
  `;
      results.appendChild(resultElement);
    } else {
      console.log("nao tem");
    }
  });
});
