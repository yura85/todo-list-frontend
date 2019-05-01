'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// function to show list of all items for current user
const onGetTodos = (event) => {
  event.preventDefault()
  api.getTodos()
    .then(ui.getTodosSuccess)
    .catch(ui.failure)
}

// function to hide the list of items
const onClearTodos = (event) => {
  event.preventDefault()
  ui.clearTodos()
}

//  function to delete a one item from the list
const onDeleteTodo = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteTodo(id)
    .then(ui.deleteSucces)
    .then(() => onGetTodos(event))
    .catch(ui.failure)
}

// function to create one item
const onCreateTodo = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createTodo(data)
    .then(ui.createTodoSuccess)
    .then(() => onGetTodos(event))
    .catch(ui.createTodoFailure)
}

// function to update a current item in the list
const onUpdateTodo = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = $(event.target).data('id')
  api.updateTodo(data, id)
    .then(ui.updateTodoSuccess)
    .then(() => onGetTodos(event))
    .catch(ui.failure)
}

//  functionto mark item as completed
const onCompleteTodo = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = $(event.target).data('id')
  api.completeTodo(data, id)
    .then(data => ui.completeTodoSuccess(event, data, id))
    .then(() => onGetTodos(event))
    .catch(ui.failure)
}

//  event handlers
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
