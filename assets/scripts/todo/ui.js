'use strict'

const showTodosTemplate = require('../templates/todo-listing.handlebars')

const getTodosSuccess = (data) => {
  console.log(data)
  const showTodosHtml = showTodosTemplate({ todos: data.todos })
  $('.content').html(showTodosHtml)
}

const failure = (error) => {
  console.error('somthing wrong ', error)
}

const clearTodos = () => {
  $('.content').empty()
}

module.exports = {
  getTodosSuccess,
  failure,
  clearTodos
}
