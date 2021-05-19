import {Request, Response} from 'express';
import { THEATER} from "./db-data";


export function getAllTheater(req: Request, res: Response) {
  setTimeout(() => {

    res.status(200).json({payload: Object.values(THEATER)});
  }, 200);
}

export function getTheaterWithFailureRate(req: Request, res: Response) {

  const error = (Math.random() >= 0.5);

  if (error) {
    res.status(500).json({message: 'random error occurred.'});
  } else {
    setTimeout(() => {
      res.status(200).json({payload: Object.values(THEATER)});
    }, 200);
  }
}


export function getTheaterById(req: Request, res: Response) {

  const movieId = req.params["id"];
  const theaters: any = Object.values(THEATER);
  const theater = theaters.find(theater => theater.id == movieId);
  res.status(200).json(theater);
}



