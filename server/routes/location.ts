import { Router } from 'express';
import {
  createLocation,
  getLocation,
  getLocations,
} from '../controllers/location';
import { upload } from '../middleware/multer';

const router = Router();

router
  .route('/locations')
  .get(getLocations)
  .post(upload('images-for-application').single('image'), createLocation);

router.route('/locations/:id').get(getLocation);

export default router;
