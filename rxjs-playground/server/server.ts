import * as express from 'express';
import {Application} from "express";
import {getAllTheater, getTheaterById, getTheaterWithFailureRate} from "./get-theater.route";
import {searchMovie} from "./search-movie.route";

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/movies').get(getAllTheater);

app.route('/api/movies').get(getAllTheater);

app.route('/api/movies/fail').get(getTheaterWithFailureRate);

app.route('/api/theater/:id').get(getTheaterById);

app.route('/api/searchMovie').get(searchMovie);


const httpServer: any = app.listen(9000, () => {
  console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});



