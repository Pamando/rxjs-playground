import {Observable, of, throwError} from 'rxjs';
import {getFakeTheaterById, getTheaterById} from "../../../server/get-theater.route";
import {delay} from "rxjs/operators";
import {fakeSearchMovie} from "../../../server/search-movie.route";
import {Request, Response} from "express";
import {THEATER} from "../../../server/db-data";


export function createHttpObservable(url: string): Observable<any> {
  return new Observable(observer => {

    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, {signal})
      .then(response => {

        if (response.ok) {
          return response.json();
        } else {
          observer.error('Request failed with status code: ' + response.status);
        }
      })
      .then(body => {

        observer.next(body);

        observer.complete();

      })
      .catch(err => {

        observer.error(err);

      });

    return () => controller.abort()


  });
}

export function getFakeUrlTheaterRequest(id: string): Observable<any> {
  let fakeResponse = getFakeTheaterById(id);
  return of(fakeResponse).pipe(delay(200))
}

export function getFakeUrlMovieSearchRequest(filter: string): Observable<any> {
  let fakeResponse = fakeSearchMovie(filter);
  return of(fakeResponse).pipe(delay(1000))
}

export function getFakeTheaterWithFailureRate() {

  const error = (Math.random() >= 0.5);

  if (error) {
    return throwError("error");
  } else {
    return of(Object.values(THEATER)).pipe(delay(200));
  }
}

