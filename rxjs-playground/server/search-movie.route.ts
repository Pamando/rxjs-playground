


import {Request, Response} from 'express';
import {MOVIES} from "./db-data";
import {setTimeout} from "timers";



export function searchMovie(req: Request, res: Response) {

    const queryParams = req.query;

    const filter = queryParams.filter as string || '',
          sortOrder = queryParams.sortOrder || 'asc',
          pageNumber = parseInt(queryParams.pageNumber as string) || 0,
          pageSize = parseInt(queryParams.pageSize as string) || 3;

    let movies = Object.values(MOVIES);
    if (filter) {
      movies = movies.filter(movie => movie.description.trim().toLowerCase().search(filter.toLowerCase()) >= 0);
    }

    if (sortOrder == "desc") {
      movies = movies.reverse();
    }

    const initialPos = pageNumber * pageSize;

    const page = movies.slice(initialPos, initialPos + pageSize);

    setTimeout(() => {
        res.status(200).json({payload: page});
    },1000);


}
