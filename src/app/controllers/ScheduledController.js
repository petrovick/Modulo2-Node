const moment = require('moment')
const { Op } = require('sequelize')
const { Appointment, User } = require('../models')

class ScheduledController {
  async index(req, res) {
    const { id } = req.session.user
    var appointments = await Appointment.findAll(
      {
        where: {
          provider_id: id
        },
        include: [User],
        order: [
          ['date', 'ASC'],
        ]
      })
    console.log(appointments);

    var appointmentsMade = appointments.map(appointment => {

      return {
        client: appointment.User.name,
        date: moment(appointment.date).format('DD/MM/YYYY HH:mm')
      }

    })
    var provider = await User.findByPk(id)
    //console.log(appointmentsMade);
    return res.render("scheduled/index", { appointmentsMade, provider })
  }

}

module.exports = new ScheduledController()
