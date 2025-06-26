let lista = [];

document.getElementById('form-item').addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const quantidade = document.getElementById('quantidade').value;
  const status = document.getElementById('status').value;
  const doador = document.getElementById('doador').value;

  const item = {
    id: Date.now(),
    nome,
    quantidade,
    status,
    doador
  };

  lista.push(item);
  atualizarLista();
  this.reset();
});

function atualizarLista() {
  const ul = document.getElementById('lista-admin');
  ul.innerHTML = '';

  lista.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span><strong>${item.nome}</strong> - ${item.quantidade} (${item.status}) - ${item.doador}</span>
      <button onclick="removerItem(${item.id})">Excluir</button>
    `;
    ul.appendChild(li);
  });
}

function removerItem(id) {
  lista = lista.filter(item => item.id !== id);
  atualizarLista();
}
