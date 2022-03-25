'use strict';


// Criar o banco de Dados para armazenar as tarefas
let banco = [
    { 'tarefa': 'Estudar React-Native', 'status':''},
    { 'tarefa': 'Estudar JS', 'status':'checked'},
];

   const criarItem = (tarefa, status) => {
   const item = document.createElement('label'); 
   item.classList.add('todo__item');
   item.innerHTML = `
    <input type="checkbox" ${status}>
    <div>${tarefa }</div>
    <input type="button" value="X">
   `;
   document.getElementById('todoList').appendChild(item);
}

const atualizaTela = () =>{
    banco.forEach(item => criarItem(item.tarefa));
}
atualizaTela();