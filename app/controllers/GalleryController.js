const Gallery = require('../models/Gallery')

module.exports = class GalleryController {

    constructor() {

    }

    static index(req, res) {
        Gallery.find()
            .exec((err, gallerys) => {
                if (err) {
                    console.log('error in Gallerycontroller.index')
                } else {
                    res.json(gallerys)
                }
            })
    }

    static show(req, res) {
        Gallery.find({ _id: req.params.id })
            .exec((err, gallery) => {
                if (err) {
                    console.log('error in Gallerycontroller.index')
                } else {
                    res.json(gallery)
                }
            })
    }

    static store(req, res) {
        //console.log(req.body);
        let gallery = new Gallery({
            user: req.body.user,
            medias: req.body.medias,
        })
        gallery.save((err) => {
            if (err) console.log('error creating Gallery in Gallerycontroller')
            res.json(gallery)
        });
    }

    static update(req, res) {
        Gallery.updateOne({ _id: req.params.id }, {
            user: req.body.user,
            medias: req.body.medias,
        })
            .exec((err, gallery) => {
                if (err) {
                    console.log('error in updating Gallerycontroller.index')
                } else {
                    res.json(gallery)
                }
            })
    }

    static delete(req, res) {
        Gallery.deleteOne({ _id: req.params.id })
            .exec((err, gallery) => {
                if (err) {
                    console.log('error in deleting Gallerycontroller.index')
                } else {
                    res.json(gallery)
                }
            })
    }

}