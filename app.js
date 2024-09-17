const container = document.getElementById("filmesContainer");

filmesWillSmith.forEach((filme) => {
  const filmeElement = document.createElement("div");
  filmeElement.innerHTML = `
    <h3>Título: ${filme.titulo}</h3>
    <p>Gênero: ${filme.genero}</p>
    <p>Data de Lançamento: ${filme.Data}</p>
    <p>Personagem: ${filme.Papel}</p>
    <hr>
  `;
  container.appendChild(filmeElement);
});
