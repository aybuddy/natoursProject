const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

// param middleware runs only for certain parameters
// only for certain param in url
// router.param('id', tourController.checkID);

router
  .route('/top-5-tours')
  .get(tourController.aliasTopTours, tourController.getAllTours);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
