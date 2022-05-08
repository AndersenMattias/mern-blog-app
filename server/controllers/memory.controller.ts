import { Request, Response } from "express";
import Memory from "../models/Memory";
import path from "path";
import fs from 'fs-extra'

export  const createMemory = async (req: Request, res: Response ): Promise<Response> => {
    const {title, description, year, location} = req.body

    try {
        const newMemory = {title, image: req?.file?.path, description, year, location};
        const memory = new Memory(newMemory);
        await memory.save();
    
        return res.status(201).send({message: 'Memory created!', memory})
    } catch (e) {
      return  res.status(500).send({message: 'Something went wrong, try again!', e})
    }


}

export const getMemory = async (req: Request, res: Response) : Promise<Response> => {

    try {
        const memory = await Memory.findById(req.params.id).lean();    
        return res.status(200).send({message: 'Memory found!', memory})
    } catch (e) {
      return  res.status(500).send({message: 'Something went wrong, try again!', e})
    }

}

export  const getMemories = async (req: Request, res: Response) : Promise<Response> => {

    try {
        const memories = await Memory.find().lean()
        return res.status(200).send({message: 'Memories found!', memories})
    } catch (e) {
        return res.status(500).send({message: `Couldn't find any memories :(`, e})
    }

}