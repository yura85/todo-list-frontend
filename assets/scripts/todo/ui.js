'use strict'

const showTodosTemplate = require('../templates/todo-listing.handlebars')
const store = require('../store')

const getTodosSuccess = (data) => {
  console.log(data)
  const showTodosHtml = showTodosTemplate({ todos: data.todos })
  $('.content').html(showTodosHtml)
}

const createTodoSuccess = (data) => {
  console.log(data)
  store.todo = data.todo
  $('#createForm').trigger('reset')
}

const createTodoFailure = (data) => {
  $('form').trigger('reset')
}

const updateTodoSuccess = (data, id) => {
  $('.message').text('your task is updated').show()
  setTimeout(() => {
    $('.message').text('').hide()
  }, 2000)
  console.log('update successs', data, id)
  store.data = data.todo
  $('.modal-backdrop').removeClass('modal-backdrop fade show')
}

const completeTodoSuccess = (data, id) => {
  store.data = data.todo
  $('.message').text('your task is completed').show()
  setTimeout(() => {
    $('.message').text('').hide()
  }, 2000)
  console.log('completed success ', data, id)
  console.log('id is set to ' + id)
}

const deleteSucces = () => {
  $('.message').text('your task is deleted').show()
  setTimeout(() => {
    $('.message').text('').hide()
  }, 2000)
}

const failure = (error) => {
  console.error('somthing wrong ', error)
}

const clearTodos = () => {
  $('.content').empty()
}

module.exports = {
  getTodosSuccess,
  createTodoSuccess,
  updateTodoSuccess,
  completeTodoSuccess,
  createTodoFailure,
  deleteSucces,
  failure,
  clearTodos
}
