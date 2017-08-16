'use strict'

class GuestMiddleware {
  async handle ({ request, response, auth }, next) {
    // call next to advance the request

    if(auth.user){
      return response.redirect('/dashboard')
    }

    await next()
  }
}

module.exports = GuestMiddleware
