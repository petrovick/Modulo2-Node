const { User } = require('../models')

class SessionController {
  async create(req, res) {
    return res.render('auth/signin')
  }

  async store(req, res) {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email }})

    if(!user) {
      req.flash('error', 'Usuário não encontrado')
      console.log('Usuário não encontrado.')
      return res.redirect('/')
    }

    if(!await user.checkPassword(password)) {
      req.flash('error', 'Senha incorreta')
      console.log('Senha incorreta')
      return res.redirect('/')
    }
    console.log(user)
    req.session.user = user;

    return res.redirect('/app/dashboard')
  }

  destroy (req, res) {
    req.session.destroy(() => {
      res.clearCookie('root')
      res.redirect('/')
    })
  }
}

module.exports = new SessionController()
