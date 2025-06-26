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
  fetch('dados.json')
    .then(response => response.json())
    .then(data => {
      const itens = data.itens;
      const doadores = data.doadores;
      const container = document.getElementById('lista-itens');

      itens.forEach(item => {
        const doador = doadores.find(d => d.id === item.id_doador);
        const card = document.createElement('div');
        card.className = 'item';

        card.innerHTML = `
          <h2>${item.nome}</h2>
          <p><strong>Quantidade:</strong> ${item.quantidade}</p>
          <p><strong>Status:</strong> ${item.status}</p>
          <p><strong>Doador:</strong> ${doador ? doador.nome : 'Desconhecido'}</p>
        `;

        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Erro ao carregar dados:', error);
      document.getElementById('lista-itens').innerHTML = '<p>Erro ao carregar os itens.</p>';
    });
}

