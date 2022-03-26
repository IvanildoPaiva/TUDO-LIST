'use strict';

//Criar o banco de Dados para armazenar as tarefas
// let banco = [
//     { 'tarefa': 'Estudar React-Native', 'status':''},
//     { 'tarefa': 'Estudar JS', 'status':'checked'},
//     { 'tarefa': 'Estudar HTML5', 'status':'checked'},
// ];

const getBanco = () =>JSON.parse(localStorage.getItem('todoList')) ?? [];
const setBanco = (banco) => localStorage.setItem('todoList', JSON.stringify(banco));

   const criarItem = (tarefa, status, indice) => {
   const item = document.createElement('label'); 
   item.classList.add('todo__item');
   item.innerHTML = `
    <input type="checkbox" ${status} data-indice = ${indice}>
    <div>${tarefa}</div>
    <input type="button" value="X" data-indice = ${indice}>
   `;
   document.getElementById('todoList').appendChild(item);
}
const limpaTarefas = () =>{
    const todoList = document.getElementById('todoList');
    while(todoList.firstChild){
        todoList.removeChild(todoList.lastChild);
    }
}
const atualizaTela = () => {
        limpaTarefas();
        const banco = getBanco();
       banco.forEach((item, indice) => criarItem(item.tarefa, item.status, indice));
      
}

// saber qual tecla digitou no campo input

const inserirItem = (evento) =>{
    const tecla = evento.key;
    const texto = evento.target.value;
    if(tecla === 'Enter'){
        //depois de realizar a comparação da tecla Enter, faz uma inserção da tarefa
        const banco = getBanco();
        banco.push({'tarefa': texto, 'status':''});
        setBanco(banco);
        atualizaTela();
        evento.target.value = '';
    }
}   
const removerItem = (indice) =>{
    const banco = getBanco();
    banco.splice(indice, 1);
    setBanco(banco);
    atualizaTela();
}

const atualizarItem = (indice) =>{
    const banco = getBanco();
        banco[indice].status =  banco[indice].status === '' ? 'checked':'';
        setBanco(banco);
        atualizaTela();

}
const clickItem = (evento) => {
    const elemento = evento.target;
    if(elemento.type ==='button'){
        const indice = elemento.dataset.indice; 
        removerItem(indice);
    }else if (elemento.type ==='checkbox'){
        const indice = elemento.dataset.indice;
        atualizarItem(indice)

    }
}

document.getElementById('newItem').addEventListener('keypress', inserirItem);
document.getElementById('todoList').addEventListener('click', clickItem);

atualizaTela();