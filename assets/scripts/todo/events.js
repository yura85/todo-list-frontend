'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
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

const onCreateTodo = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.createTodo(data)
    .then(ui.createTodoSuccess)
    .then(() => onGetTodos(event))
    .catch(ui.failure)
}

const onUpdateTodo = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  const id = $(event.target).data('id')
  console.log(id)
  api.updateTodo(data, id)
    .then(ui.updateTodoSuccess)
    .then(() => onGetTodos(event))
    .catch(ui.failure)
}

const onCompleteTodo = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  const data = getFormFields(event.target)
  console.log(data)
  let completeStatus = data.todo.completed
  if (completeStatus === false) {
    completeStatus = true
  }
  api.completeTodo(data, id)
    .then(ui.completeTodoSuccess)
    .then(() => onGetTodos(event))
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#getTodosButton').on('click', onGetTodos)
  $('#clearTodosButton').on('click', onClearTodos)
  $('#content').on('click', '.delete', onDeleteTodo)
  $('#content').on('submit', '.update-form', onUpdateTodo)
  $('#createForm').on('submit', onCreateTodo)
  $('#content').on('click', '.complete', onCompleteTodo)
}

module.exports = {
  addHandlers,
  onGetTodos,
  onClearTodos,
  onDeleteTodo,
  onCreateTodo,
  onUpdateTodo,
  onCompleteTodo
}
