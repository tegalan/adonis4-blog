'use strict'

class DashboardController {

    index({ view, auth }) {
        let user = auth.user;

        return view.render('dashboard.index', { user })
    }

    login_page({ view }) {
        return view.render('dashboard.login')
    }

    async login({ auth, request, response }) {
        let email = request.input('email')
        let password = request.input('password')

        console.log(request.all())


        try{
            await auth.attempt(email, password)
            return response.redirect('/dashboard')
        }catch(e){
            console.log(e)
            
            return response.redirect('back')
        }
    }

    async logout({ auth, response }) {

        try{
            await auth.logout()
            return response.redirect('/dashboard/login')
        }catch(e){
            console.log(e)
        }
        
    }



}

module.exports = DashboardController
