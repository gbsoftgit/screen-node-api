const Media = require('../models/Media')

module.exports = class MediaController {

    constructor() {

    }

    static index(req, res) {
        Media.find()
            .exec((err, medias) => {
                if (err) {
                    console.log('error in mediacontroller.index')
                } else {
                    res.json(medias)
                }
            })
    }

    static show(req, res) {
        Media.find({ _id: req.params.id })
            .exec((err, media) => {
                if (err) {
                    console.log('error in mediacontroller.index')
                } else {
                    res.json(media)
                }
            })
    }

    static store(req, res) {
        let media = new Media({
            name: req.body.name,
            url: req.body.url,
            size: req.body.size,
            media_type: req.body.type,
            user: req.body.user,
        })
        media.save((err) => {
            if (err) console.log('error creating media in mediacontroller')
            res.json(media)
        });
    }

    static update(req, res) {
        Media.updateOne({ _id: req.params.id }, {
            name: req.body.name,
            url: req.body.url,
            size: req.body.size,
            media_type: req.body.type,
            user: req.body.user,
        })
            .exec((err, media) => {
                if (err) {
                    console.log('error in updating mediacontroller.index')
                } else {
                    res.json(media)
                }
            })
    }

    static delete(req, res) {
        Media.deleteOne({ _id: req.params.id })
            .exec((err, media) => {
                if (err) {
                    console.log('error in deleting mediacontroller.index')
                } else {
                    res.json(media)
                }
            })
    }

}