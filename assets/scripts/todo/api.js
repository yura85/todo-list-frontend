'use strict'

const config = require('../config')
// const store = require('../store')

const getTodos = function () {
  return $.ajax({
    url: config.apiUrl + '/todos',
    method: 'GET',
    headers: {
    }
  })
}

const deleteTodo = function (id) {
  return $.ajax({
    url: config.apiUrl + `/todos/${id}`,
    method: 'DELETE'
  })
}
module.exports = {
  getTodos,
  deleteTodo
}
