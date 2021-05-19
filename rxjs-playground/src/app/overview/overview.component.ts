import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {createHttpObservable} from "../common/util";
import {debounceTime, distinctUntilChanged, map, startWith, switchMap} from "rxjs/operators";
import {Movie} from "../model/movie";
import {Theater} from "../model/theater";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, AfterViewInit {

  theaterId: string;
  theater: Theater;
  movies: Movie[];


  @ViewChild('searchInput', {static: true}) input: ElementRef;

  constructor() {


  }

  ngOnInit() {

    this.theaterId = '0';

    createHttpObservable(`/api/theater/${this.theaterId}`).subscribe(theater => {
      this.theater = theater
      this.loadMovies().subscribe(movies => {
        this.movies = movies;
        // some other subscribe to load for example metadata about each retrieved movie and so on resulting in callback hell... anti-patern
      })
    });
  }

  ngAfterViewInit() {
  }

  loadMovies(search = ''): Observable<Movie[]> {
    return createHttpObservable(
      `/api/searchMovie?theaterId=${this.theaterId}&pageSize=100&filter=${search}`)
      .pipe(
        map(res => res["payload"])
      );
  }

}
