const { authCheck } = require('../middleware/auth-middle');
const { createTripService, getTrip,getTripByUser } = require('../services/trip-create');
const router = require('express').Router();

router.post('/create-trip', authCheck, createTripService);
router.get('/get-trip/:id', authCheck, getTrip);
router.get('/get-trip-by-user', authCheck, getTripByUser);

module.exports = router;