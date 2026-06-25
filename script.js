// Elementos do DOM
const inputTarefa = document.querySelector('.input');
const botaoAdicionar = document.querySelector('.botao');
const listaTarefas = document.querySelector('.listaTarefa');
const mensagem = document.querySelector('.mensagem');
const contador = document.getElementById('contador');
const botoesFiltro = document.querySelectorAll('.filtro-btn');

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
let filtroAtual = 'todas';

// Salvar no localStorage
function salvarTarefas() {
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// Atualizar contador
function atualizarContador() {
  const pendentes = tarefas.filter(t => !t.concluida).length;
  contador.textContent = `${pendentes} tarefa(s) pendente(s)`;
}

// Mostrar mensagem
function mostrarMensagem(texto, tipo) {
  mensagem.textContent = texto;
  mensagem.classList.add('ativo');
  if (tipo === 'erro') {
    mensagem.style.backgroundColor = '#FF3300';
  } else {
    mensagem.style.backgroundColor = '#33ff33';
    mensagem.style.color = '#0a0f0a';
  }
  setTimeout(() => {
    mensagem.classList.remove('ativo');
  }, 3000);
}

// Renderizar lista
function renderizarTarefas() {
  listaTarefas.innerHTML = '';
  
  let tarefasFiltradas = tarefas;
  if (filtroAtual === 'pendentes') {
    tarefasFiltradas = tarefas.filter(t => !t.concluida);
  } else if (filtroAtual === 'concluidas') {
    tarefasFiltradas = tarefas.filter(t => t.concluida);
  }
  
  tarefasFiltradas.forEach((tarefa) => {
    const indexReal = tarefas.indexOf(tarefa);
    
    const li = document.createElement('li');
    li.classList.add('item-tarefa');
    if (tarefa.concluida) li.classList.add('concluida');
    
    li.innerHTML = `
      <span class="texto-tarefa">${tarefa.texto}</span>
      <span class="data-tarefa">${tarefa.data}</span>
      <span class="delete">X</span>
    `;
    
    // Marcar como concluída
    li.querySelector('.texto-tarefa').addEventListener('click', () => {
      tarefas[indexReal].concluida = !tarefas[indexReal].concluida;
      salvarTarefas();
      renderizarTarefas();
    });
    
    // Excluir tarefa
    li.querySelector('.delete').addEventListener('click', (e) => {
      e.stopPropagation();
      li.classList.add('removendo');
      setTimeout(() => {
        tarefas.splice(indexReal, 1);
        salvarTarefas();
        renderizarTarefas();
      }, 250);
    });
    
    listaTarefas.appendChild(li);
  });
  
  atualizarContador();
}

// Adicionar tarefa
function adicionarTarefa() {
  const texto = inputTarefa.value.trim();
  
  // Efeito 3D do botão
  botaoAdicionar.classList.add('ativo');
  setTimeout(() => botaoAdicionar.classList.remove('ativo'), 150);
  
  if (texto === '') {
    mostrarMensagem('Digite algo válido!', 'erro');
    return;
  }
  
  const novaTarefa = {
    texto: texto,
    concluida: false,
    data: new Date().toLocaleDateString('pt-BR')
  };
  
  tarefas.push(novaTarefa);
  salvarTarefas();
  mostrarMensagem('Tarefa adicionada com sucesso!', 'sucesso');
  inputTarefa.value = '';
  inputTarefa.focus();
  renderizarTarefas();
}

// Eventos
botaoAdicionar.addEventListener('click', adicionarTarefa);

inputTarefa.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') adicionarTarefa();
});

// Filtros
botoesFiltro.forEach(btn => {
  btn.addEventListener('click', function() {
    botoesFiltro.forEach(b => b.classList.remove('ativo'));
    this.classList.add('ativo');
    filtroAtual = this.dataset.filtro;
    renderizarTarefas();
  });
});

// Iniciar
renderizarTarefas();
