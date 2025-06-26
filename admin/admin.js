let lista = [];
let modoEdicao = false;
let idEdicao = null;

document.getElementById('form-item').addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const quantidade = document.getElementById('quantidade').value;
  const status = document.getElementById('status').value;
  const doador = document.getElementById('doador').value;

  if (modoEdicao) {
    // Atualizar item existente
    const item = lista.find(i => i.id === idEdicao);
    item.nome = nome;
    item.quantidade = quantidade;
    item.status = status;
    item.doador = doador;
    modoEdicao = false;
    idEdicao = null;
  } else {
    // Criar novo item
    const item = {
      id: Date.now(),
      nome,
      quantidade,
      status,
      doador
    };
    lista.push(item);
  }

  this.reset();
  atualizarLista();
});

function atualizarLista() {
  const ul = document.getElementById('lista-admin');
  ul.innerHTML = '';

  lista.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span><strong>${item.nome}</strong> - ${item.quantidade} (${item.status}) - ${item.doador}</span>
      <div>
        <button onclick="editarItem(${item.id})">Editar</button>
        <button onclick="removerItem(${item.id})">Excluir</button>
      </div>
    `;
    ul.appendChild(li);
  });
}

function removerItem(id) {
  lista = lista.filter(item => item.id !== id);
  atualizarLista();
}

function editarItem(id) {
  const item = lista.find(i => i.id === id);
  document.getElementById('nome').value = item.nome;
  document.getElementById('quantidade').value = item.quantidade;
  document.getElementById('status').value = item.status;
  document.getElementById('doador').value = item.doador;
  modoEdicao = true;
  idEdicao = id;
}
