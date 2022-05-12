import { Request, Response } from 'express';
import Location from '../models/Location';

export const createLocation = async (
  req: Request | any,
  res: Response
): Promise<Response> => {
  const { locationName, description, date, createdBy, rating } = req.body;
  const uploadedImg = req.file.location;
  console.log(uploadedImg);

  const location = new Location({
    locationName,
    imageUrl: uploadedImg,
    description,
    date,
    createdBy,
    rating,
  });

  try {
    console.log(location);
    await location.save();

    return res.status(201).send({ message: 'Location created!', location });
  } catch (e) {
    return res
      .status(500)
      .send({ message: 'Something went wrong, try again!', e });
  }
};

export const getLocation = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const location = await Location.findById(req.params.id).lean();
    return res.status(200).send({ message: 'Location found!', location });
  } catch (e) {
    return res
      .status(500)
      .send({ message: 'Something went wrong, try again!', e });
  }
};

export const getLocations = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const locations = await Location.find().lean();
    return res.status(200).send({ message: 'Locations found!', locations });
  } catch (e) {
    return res
      .status(500)
      .send({ message: `Couldn't find any locations :(`, e });
  }
};
