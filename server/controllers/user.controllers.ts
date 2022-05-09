import { Request, Response } from "express";
import User from "../models/User";

export const createUser = async (req: Request, res:Response): Promise<Response> => {
    const user = new User(req.body);

    try {
        await user.save()
        return res.status(201).send({message: 'User created!', user})
    } catch (e) {
        return res.status(400).send({message: `Coulnd't create user.`, e})
    }

}