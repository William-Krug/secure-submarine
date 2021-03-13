const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route for /api/admin/states
 */
router.get('/states', (req, res) => {
  // GET route code here
  console.log('*** admin.router -> GET /states');

  const sqlQuery = `
  SELECT "users".state, count(*)
  FROM "users"
  GROUP BY "users".state
  ORDER BY "users".state ASC;
  `;

  pool
    .query(sqlQuery)
    .then((dbResponse) => {
      console.log('GET /api/admin/states SUCCESS!!');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      console.log('ERROR in GET /api/admin/states:', error);
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/admin/users
 */
router.get('/activities', (req, res) => {
  // GET route code here
  console.log('*** admin.router -> GET /activities');

  const sqlQuery = `
  SELECT * from "activities";
  `;

  pool
    .query(sqlQuery)
    .then((dbResponse) => {
      console.log('GET /api/admin/activities SUCCESS!!');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      console.log('ERROR in GET /api/admin/activities:', error);
      res.sendStatus(500);
    });
});

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
