import express from 'express';
import {
  createLocation,
  deleteLocation,
  getLocation,
  getLocations,
  updateLocation,
} from '../controllers/location';

import { upload } from '../middleware/multer';
import { verifyUser } from '../utils/verifyAuth';

const router = express.Router();

// Create location with images
router.post(
  '/locations',
  upload('images-for-application').single('image'),

  createLocation
);

router.route('/locations/:id').get(getLocation);

//Update
router.put('/locations/:id', verifyUser, updateLocation);

//Delete
router.delete('/locations/:id', verifyUser, deleteLocation);

//Get One
router.post('/locations', getLocation);

//Get All
router.get('/locations', getLocations);

export default router;
