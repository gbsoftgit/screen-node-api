const User = require('../models/User')

module.exports = class UserController {

    constructor() {

    }

    static index(req, res) {
        User.find()
            .exec((err, users) => {
                if (err) {
                    console.log('error in usercontroller.index')
                } else {
                    res.json(users)
                }
            })
    }

    static show(req, res) {
        User.find({ '_id': req.params.id })
            .exec((err, user) => {
                if (err) {
                    console.log('error in usercontroller.index')
                } else {
                    res.json(user)
                }
            })
    }

    static store(req, res) {
        let user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            meta: (req.body.meta) ? req.body.meta : []
        })
        user.save((err) => {
            if (err) console.log('error creating user', err.errmsg)

        });

        res.json(user)
    }

}