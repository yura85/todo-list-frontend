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
  api.deleteTodo(id)
    .then(ui.deleteSucces)
    .then(() => onGetTodos(event))
    .catch(ui.failure)
}

const onCreateTodo = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createTodo(data)
    .then(ui.createTodoSuccess)
    .then(() => onGetTodos(event))
    .catch(ui.createTodoFailure)
}

const onUpdateTodo = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = $(event.target).data('id')
  api.updateTodo(data, id)
    .then(ui.updateTodoSuccess)
    .then(() => onGetTodos(event))
    .catch(ui.failure)
}

const onCompleteTodo = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = $(event.target).data('id')
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
