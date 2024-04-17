const db = require('../config/connection');
const { Exercise } = require('../models');
const exerciseSeeds = require('./exerciseSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Exercise', 'exercises');

  await Exercise.create(exerciseSeeds);

  console.log('all done!');
  process.exit(0);
});
