import express from 'express';
import {
  createLocation,
  getLocation,
  getLocations,
} from '../controllers/location';

import { upload } from '../middleware/multer';
import { verifyUser } from '../utils/verifyAuth';

const router = express.Router();

// Create location with images
router.post(
  '/locations/',

  createLocation
);

// upload('images-for-application').array('photos'),

router.route('/locations/:id').get(getLocation);

//Update
//router.put('/locations/:id', verifyUser, updateLocation);

//Delete
//router.delete('/locations/:id', verifyUser, deleteLocation);

//Get One
router.post('/locations', getLocation);

//Get All
router.get('/locations', getLocations);

export default router;
