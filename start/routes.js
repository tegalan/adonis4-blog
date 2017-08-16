'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

Route.group('guest', () => {
    Route.get('/login', 'DashboardController.login_page')
    Route.post('/login', 'DashboardController.login')
}).prefix('dashboard')
  .middleware('guest')

Route.group('admin', () => {
    Route.get('/post/:id', 'PostController.detail')
    Route.get('/post', 'PostController.index')
    Route.get('/logout', 'DashboardController.logout')
    Route.get('/', 'DashboardController.index')    
}).prefix('dashboard')
  .middleware(['admin'])



Route.get('/', ({ request }) => {
  return `
  <html>
    <head>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <section>
        <div class="logo"></div>
        <div class="title"></div>
        <div class="subtitle"><p>AdonisJs simplicity will make you feel confident about your code</p></div>
      </section>
    </body>
  </html>
  `
}).middleware('guest')