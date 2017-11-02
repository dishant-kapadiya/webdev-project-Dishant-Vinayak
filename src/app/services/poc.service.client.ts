import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

export class PocServiceClient {
  constructor(private _http: Http) {
  }

  baseUrl = this.baseUrl;

  findMovies(title: string) {
    return this._http.post(this.baseUrl + '/search/movies', {query: title})
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
}
