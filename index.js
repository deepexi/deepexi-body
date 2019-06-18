'use strict'

const Wrapper = require('uniform-body')

module.exports = new Wrapper({
  field: {
    success: 'success',
    data: 'payload',
    code: 'code',
    msg: 'message',
    stack: 'stack'
  },
  code: {
    success: 1,
    fail: -1,
    error: -2
  }
})
