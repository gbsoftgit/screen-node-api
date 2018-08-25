const router = require('express').Router()
const UserController = require('../app/controllers/UserController')
const MediaController = require('../app/controllers/MediaController')
const GalleryController = require('../app/controllers/GalleryController')
const ScreenController = require('../app/controllers/ScreenController')
const playlistController = require('../app/controllers/PlaylistController')


router.get('/user', UserController.index)
router.get('/user/:id', UserController.show)
router.post('/user', UserController.store)

router.get('/media', MediaController.index)
router.get('/media/:id', MediaController.show)
router.post('/media', MediaController.store)
router.put('/media/:id', MediaController.update)
router.delete('/media/:id', MediaController.delete)

router.get('/gallery', GalleryController.index)
router.get('/gallery/:id', GalleryController.show)
router.post('/gallery', GalleryController.store)
router.put('/gallery/:id', GalleryController.update)
router.delete('/gallery/:id', GalleryController.delete)

router.get('/screen', ScreenController.index)
router.get('/screen/:id', ScreenController.show)
router.post('/screen', ScreenController.store)
router.put('/screen/:id', ScreenController.update)
router.delete('/screen/:id', ScreenController.delete)

router.get('/playlist', playlistController.index)
router.get('/playlist/:id', playlistController.show)
router.post('/playlist', playlistController.store)
router.put('/playlist/:id', playlistController.update)
router.delete('/playlist/:id', playlistController.delete)

module.exports = router;

