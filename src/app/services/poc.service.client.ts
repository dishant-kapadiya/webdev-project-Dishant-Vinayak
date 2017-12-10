import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable()
export class PocServiceClient {
  constructor(private _http: Http) {
  }

   baseUrl = environment.baseUrl;
     API_KEY = 'd3d04ee78153a24eeb1f7a0e73f56a9c';
     TMDB_URL = 'https://api.themoviedb.org/3/search/movie';

  // findMovies(title: string) {
  //
  //     const url = this.TMDB_URL + '?api_key=' + this.API_KEY + '&query=' + title;
  //     return this._http.get(url);
  //
  // }

    findMovies(title: string) {
        console.log('baseUrl ' + this.baseUrl);
        return this._http.post(this.baseUrl + '/search/movies', {query: title})
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data;
                }
            );
    }

    findHighestGrossing() {
        return this._http.get(this.baseUrl + '/search/highestgrossing')
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data;
                }
            );
    }
}
