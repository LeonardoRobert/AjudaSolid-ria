const dadosSalvos = localStorage.getItem('doacoes');

if (dadosSalvos) {
  const itens = JSON.parse(dadosSalvos);
  const container = document.getElementById('lista-itens');
  container.innerHTML = '';

  itens.forEach(item => {
    const card = document.createElement('div');
    card.className = 'item';

    card.innerHTML = `
      <h2>${item.nome}</h2>
      <p><strong>Quantidade:</strong> ${item.quantidade}</p>
      <p><strong>Status:</strong> ${item.status}</p>
      <p><strong>Doador:</strong> ${item.doador}</p>
    `;

    container.appendChild(card);
  });
} else {
  // (continua com o fetch do dados.json)
}
