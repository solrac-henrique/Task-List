function ListaTarefas() {

  let botao = document.querySelector('.botao')

  function AddTarefa() {
    let inputTarefa = document.querySelector('.input')
    let tarefa = inputTarefa.value.trim()

    let mensagem = document.querySelector('.mensagem')

    botao.classList.add('ativo')

    if (tarefa === '') {
      mensagem.classList.add('ativo')
      mensagem.textContent = 'digite algo valido'
    }
    else {
      mensagem.classList.remove('ativo')
      mensagem.textContent = 'tarefa adicionada com sucesso'
      let listatarefa = document.querySelector('.listaTarefa')
      let novaTarefa = document.createElement('li')
      let botaodelete = document.createElement('span')
      botaodelete.innerText = 'X' 
      novaTarefa.innerText = tarefa
      listatarefa.appendChild(novaTarefa)
      novaTarefa.appendChild(botaodelete)
      botaodelete.classList.add('delete')
      //botao de apagar  
      botaodelete.addEventListener('click',  () => {
      novaTarefa.remove()
      })
    }
    //timer pra remover classe ativo do botao
    setTimeout (()=>{
      botao.classList.remove('ativo')
    }, 150)

    // auto-limpar apos click
    inputTarefa.value = ''
  }

  botao.addEventListener('click', AddTarefa)
}

function atualizarContador() {
  const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
  const pendentes = tarefas.filter(t => !t.concluida).length;
  document.getElementById('contador').textContent = `${pendentes} tarefa(s) pendente(s)`;
}

let filtroAtual = 'todas';

document.querySelectorAll('.filtro-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('ativo'));
    this.classList.add('ativo');
    filtroAtual = this.dataset.filtro;
    renderizarTarefas();
  });
});

function renderizarTarefas() {
  const lista = document.getElementById('lista-tarefas');
  const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
  
  let tarefasFiltradas = tarefas;
  if (filtroAtual === 'pendentes') {
    tarefasFiltradas = tarefas.filter(t => !t.concluida);
  } else if (filtroAtual === 'concluidas') {
    tarefasFiltradas = tarefas.filter(t => t.concluida);
  }
  
  lista.innerHTML = '';
  tarefasFiltradas.forEach((tarefa, index) => {
    // seu código de criar cada item da lista
  });
  
  atualizarContador();
}

function excluirTarefa(index) {
  const item = document.querySelectorAll('.item-tarefa')[index];
  item.classList.add('removendo');
  
  setTimeout(() => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas.splice(index, 1);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    renderizarTarefas();
    atualizarContador();
  }, 250);
}

const novaTarefa = {
  texto: texto,
  concluida: false,
  data: new Date().toLocaleDateString('pt-BR')
};

const dataSpan = `<span class="data-tarefa">${tarefa.data || ''}</span>`;
// Adicione isso dentro do HTML do item

ListaTarefas() 
