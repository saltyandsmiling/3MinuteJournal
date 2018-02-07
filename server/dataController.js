const Entry = require('./entryModel');
const moment = require('moment');
const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/journalStorage');


const dataController = {};
const todaysDate = moment().format("MMM Do YY");

//handles creations and updates to database
dataController.createEntry = (req, res, next) => {
  const entries = req.body;
  const gratArr = [entries[0], entries[1], entries[2]];
  const intArr = [entries[3], entries[4], entries[5]];
  const affArr = [entries[6], entries[7], entries[8]];
  Entry.find({}, (err, data) => console.log(data));
  //checks for a daily entry and updates or creates
  Entry.findOne({ createdAt: todaysDate}, (err, data) => {
    if (!data) {
      Entry.create({
        gratitudes: gratArr,
        intentions: intArr,
        affirmations: affArr,
        createdAt: todaysDate
      });
    } else {
      data.gratitudes = gratArr;
      data.intentions = intArr;
      data.affirmations = affArr;
      data.save((err) => {
        if (err) throw err;
      });

    }
  });

  next();
};

//grabs data on page load and sends back entries of blank
dataController.loadFetch = (req, res, next) => {
  Entry.findOne({ createdAt: todaysDate}, (err, data) => {
    if (!data) {
      res.body = ['', '', '', '', '', '', '', '', '']
    } else {
      const dataSort =  [data.gratitudes, data.intentions, data.affirmations];
      res.locals.body = dataSort.reduce((a, b) => a.concat(b));
      next();
    }
  });
};

dataController.delete = (req, res, next) => {
  Entry.findOneAndRemove({ createdAt: 'Feb 6th 18' }, (err) => {
    if (err) throw err;
  });
  next();
};

module.exports = dataController;

//  mongoose.connection.db.dropDatabase();