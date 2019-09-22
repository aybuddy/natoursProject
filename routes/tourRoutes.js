const express = require('express');
// 1st method import
const tourController = require('../controllers/tourController');
// 2nd method import
// const {
//   getAllTours,
//   createTour,
//   getTour,
//   updateTour,
//   deleteTour
// } = require('../controllers/tourController');

const router = express.Router();

// param middleware runs only for certain parameters
// only for certain param in url
router.param('id', tourController.checkID);

// 1st Method
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

// 2nd Method
// router
//   .route('/')
//   .get(getAllTours)
//   .post(createTour);

// router
//   .route('/:id')
//   .get(getTour)
//   .patch(updateTour)
//   .delete(deleteTour);

module.exports = router;
