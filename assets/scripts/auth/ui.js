'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('.message').text('You created account, please sign in to create your list').show()
  $('#modal1').modal('toggle')
  $('#sign-up').trigger('reset')
}

const signUpFailure = function (data) {
  $('.message').text('Something went wrong please try again').show()
  $('#modal1').modal('toggle')
  $('#sign-up').trigger('reset')
}
const failure = function (data) {
  $('.message').text('Something went wrong please try again').show()
  setTimeout(() => {
    $('.message').text('').hide()
  }, 2000)
  $('form').trigger('reset')
}
const signInSeccess = function (data) {
  $('.message').text('Sign in success').show()
  $('#createForm').show()
  $('.a-change-pass').show()
  $('#sign-out').show()
  $('.nav-buttons').show()
  $('.content').hide()
  $('.a-sign-up').hide()
  $('.a-sign-in').hide()
  $('#getTodosButton').show()
  $('#modal2').modal('toggle')
  store.user = data.user
  setTimeout(() => {
    $('.message').text('').hide()
  }, 2000)
  $('form').trigger('reset')
}
const signInFailure = function (data) {
  $('.message').text('Something went wrong try again please').show()
  setTimeout(() => {
    $('.message').text('').hide()
  }, 2000)
  $('#modal2').modal('toggle')
  $('form').trigger('reset')
}
const changePasswordSuccess = function (data) {
  store.user = data.user
  $('.message').text('You successfuly change your password').show()
  setTimeout(() => {
    $('.message').text('').hide()
  }, 2000)
  $('#modal3').modal('toggle')
  $('form').trigger('reset')
}

const changePasswordFailure = function (data) {
  $('.message').text('Something went wrong try again please').show()
  setTimeout(() => {
    $('.message').text('').hide()
  }, 2000)
  $('#modal3').modal('toggle')
  $('form').trigger('reset')
}
const signOutSuccess = function () {
  store.user = null
  $('form').trigger('reset')
  $('.message').text('Sign out success!').show()
  setTimeout(() => {
    $('.message').text('').hide()
  }, 2000)
  // $('.message').text('What\'s on your List?  Log in to create one!').show()
  $('#createForm').hide()
  $('.a-change-pass').hide()
  $('#sign-out').hide()
  $('.nav-buttons').hide()
  $('.content').hide()
  $('.a-sign-up').show()
  $('.a-sign-in').show()
  $('#clearTodosButton').hide()
}

module.exports = {
  signUpSuccess,
  failure,
  signInSeccess,
  changePasswordSuccess,
  signOutSuccess,
  signInFailure,
  signUpFailure,
  changePasswordFailure
}
