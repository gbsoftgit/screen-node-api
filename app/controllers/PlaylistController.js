const Playlist = require('../models/Playlist')
const Media = require('../models/Media')

module.exports = class PlaylistController {

    constructor() {

    }

    static index(req, res) {
        Playlist.find()
            .exec((err, Playlists) => {
                if (err) {
                    console.log('error in Playlistcontroller.index')
                } else {
                    res.json(Playlists)
                }
            })
    }

    static show(req, res) {
        var m_playlist = [];
        Playlist.findOne({ _id: req.params.id }, (err, playlist) => {
            if (err) console.log('error in Playlistcontroller.index')
            else {
                for (let i = 0; i < playlist.elements; i++) {
                    Media.findOne({ _id: playlist.elements[i]._id }).exec((err, elem) => {
                        if (err) console.log('error in Playlistcontroller.show')
                        else {
                            m_playlist.push(elem)
                        }
                        console.log(elem);
                    })
                    console.log(m_playlist);
                }
                res.json(playlist)
            }
        })


        /* console.log(m_playlist);
        res.json(m_playlist) */
    }

    static store(req, res) {
        let playlist = new Playlist({
            elements: req.body.elements,
            user: req.body.user
        })
        playlist.save((err) => {
            if (err) console.log('error creating Playlist in Playlistcontroller')
            res.json(playlist)
        });
    }

    static update(req, res) {
        Playlist.updateOne({ _id: req.params.id }, {
            elements: req.body.elements,
            user: req.body.user
        })
            .exec((err, playlist) => {
                if (err) {
                    console.log('error in updating Playlistcontroller.index')
                } else {
                    res.json(playlist)
                }
            })
    }

    static delete(req, res) {
        Playlist.deleteOne({ _id: req.params.id })
            .exec((err, playlist) => {
                if (err) {
                    console.log('error in deleting Playlistcontroller.index')
                } else {
                    res.json(playlist)
                }
            })
    }

}