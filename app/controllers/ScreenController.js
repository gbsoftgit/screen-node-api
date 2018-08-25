const Screen = require('../models/Screen')

module.exports = class ScreenController {

    constructor() {

    }

    static index(req, res) {
        Screen.find()
            .exec((err, screens) => {
                if (err) {
                    console.log('error in Screencontroller.index')
                } else {
                    res.json(screens)
                }
            })
    }

    static show(req, res) {
        Screen.find({ _id: req.params.id })
            .exec((err, screen) => {
                if (err) {
                    console.log('error in Screencontroller.index')
                } else {
                    res.json(screen)
                }
            })
    }

    static store(req, res) {
        let screen = new Screen({
            name: req.body.name,
            resoulution: req.body.resoulution,
            location: req.body.location,
            gallery: req.body.gallery,
            user: req.body.user
        })
        screen.save((err) => {
            if (err) console.log('error creating Screen in Screencontroller')
            res.json(screen)
        });
    }

    static update(req, res) {
        Screen.updateOne({ _id: req.params.id }, {
            name: req.body.name,
            resoulution: req.body.resoulution,
            location: req.body.location,
            gallery: req.body.gallery,
            user: req.body.user
        })
            .exec((err, screen) => {
                if (err) {
                    console.log('error in updating Screencontroller.index')
                } else {
                    res.json(screen)
                }
            })
    }

    static delete(req, res) {
        Screen.deleteOne({ _id: req.params.id })
            .exec((err, screen) => {
                if (err) {
                    console.log('error in deleting Screencontroller.index')
                } else {
                    res.json(screen)
                }
            })
    }

}