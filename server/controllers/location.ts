import { Request, Response, NextFunction } from 'express';
import Location from '../models/Location';
import { createError } from '../utils/error';

// Create a location
export const createLocation = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const {
    title,
    locationName,
    country,
    city,
    description,
    date,
    createdBy,
    rating,
  } = req.body;

  const newLocation = new Location({
    title,
    locationName,
    country,
    city,
    description,
    date,
    image: req.file.location,
    createdBy,
    rating,
  });

  try {
    const savedLocation = await newLocation.save();
    res
      .status(201)
      .send({ message: 'Location has been created!', savedLocation });
  } catch (err) {
    next(createError(400, `Couldn't create location, try again.`));
  }
};

// update a location
export const updateLocation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedLocation = await Location.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res
      .status(200)
      .send({ message: 'Location has been updated', updatedLocation });
  } catch (err) {
    next(createError(400, 'Invalid updates!'));
  }
};

// delete a location
export const deleteLocation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await Location.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: 'Location has been deleted.' });
  } catch (err) {
    next(createError(500, 'Something went wrong, try again'));
  }
};

// get one location
export const getLocation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const location = await Location.findById(req.params.id);
    res.status(200).send({ message: 'Location found', location });
  } catch (err) {
    next(createError(500, 'Something went wrong, try again'));
  }
};

// get all locations
export const getLocations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const locations = await Location.find().lean();
    return res.status(200).send({ message: 'Locations found!', locations });
  } catch (err) {
    next(createError(500, 'Something went wrong, try again'));
  }
};
