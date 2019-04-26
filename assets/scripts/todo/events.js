'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetTodos = (event) => {
  event.preventDefault()
  api.getTodos()
    .then(ui.getTodosSuccess)
    .catch(ui.failure)
}
const onClearTodos = (event) => {
  event.preventDefault()
  ui.clearTodos()
}

const onDeleteTodo = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  console.log(id)
  api.deleteTodo(id)
    .then(() => onGetTodos(event))
    .catch(ui.failure)
}
const addHandlers = () => {
  $('#getTodosButton').on('click', onGetTodos)
  $('#clearTodosButton').on('click', onClearTodos)
  $('#content').on('click', onDeleteTodo)
}

module.exports = {
  addHandlers,
  onGetTodos,
  onClearTodos,
  onDeleteTodo
}
