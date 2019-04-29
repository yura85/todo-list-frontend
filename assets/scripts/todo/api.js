'use strict'

const config = require('../config')
const store = require('../store')

const getTodos = function () {
  return $.ajax({
    url: config.apiUrl + '/todos',
    method: 'GET',
    headers: {
      Authorization: `Token token=` + store.user.token
    }
  })
}

const deleteTodo = function (id) {
  return $.ajax({
    url: config.apiUrl + `/todos/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=` + store.user.token
    }
  })
}

const createTodo = function (data) {
  return $.ajax({
    url: config.apiUrl + '/todos',
    method: 'POST',
    headers: {
      Authorization: `Token token=` + store.user.token
    },
    data: {
      'todo': {
        'title': data.todo.title,
        'text': data.todo.text,
        'completed': false
      }
    }
  })
}

const updateTodo = function (data, id) {
  return $.ajax({
    url: config.apiUrl + `/todos/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=` + store.user.token
    },
    data: {
      'todo': {
        'title': data.todo.title,
        'text': data.todo.text,
        'completed': false
      }
    }
  })
}

const completeTodo = function (data, id) {
  return $.ajax({
    url: config.apiUrl + `/todos/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=` + store.user.token
    },
    data: {
      'todo': {
        'completed': true
      }
    }
  })
}

module.exports = {
  getTodos,
  deleteTodo,
  createTodo,
  updateTodo,
  completeTodo
}
