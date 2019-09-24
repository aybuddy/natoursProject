const Tour = require('./../models/tourModel');

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(404).json({
      status: 'fail',
      message: 'Missing name or price'
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  console.log(req.requestTime);

  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime
    // results: tours.length,
    // data: {
    //   // key of tours is the endpoint from the url /api/v1/tours
    //   // value of tours is the const tours from fs.readFileSync
    //   tours: tours
    // }
  });
};

exports.getTour = (req, res) => {
  // variables in url are called parameters
  console.log(req.params);

  // id is a string in the json data file and not a number.
  // Trick: When you multiply a string to a number, JS will
  // automatically conver the string to a number
  const id = req.params.id * 1;
  // const tour = tours.find(el => el.id === id);

  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour
  //   }
  // });
};

exports.createTour = (req, res) => {
  res.status(201).json({
    status: 'success'
    // data: {
    //   tour: newTour
    // }
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: 'Updated tour here...'
    }
  });
};

exports.deleteTour = (req, res) => {
  // 204 is no content, delete code
  // return data of null because resource no longer exists
  res.status(204).json({
    status: 'success',
    data: null
  });
};
