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
ListaTarefas() 
