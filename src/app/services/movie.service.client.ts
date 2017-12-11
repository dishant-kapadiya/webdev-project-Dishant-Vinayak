import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable()
export class MovieServiceClient {
    constructor(private _http: Http) {
    }

    baseUrl = environment.baseUrl;
    API_KEY = 'd3d04ee78153a24eeb1f7a0e73f56a9c';
    TMDB_URL = 'https://api.themoviedb.org/3/search/movie';

    findMovieById(movieId: string) {
        console.log('baseUrl ' + this.baseUrl);
        return this._http.get(this.baseUrl + '/api/v1/movies/' + movieId)
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data;
                }
            );
    }

    createMovie(movie) {
        return this._http.post(this.baseUrl + '/api/v1/movies/' , {movie: movie})
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data;
                }
            );
    }

    findMovieByObjectId(objectId) {
        return this._http.get(this.baseUrl + '/api/v1/movieByOId/:movieId' + objectId)
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data;
                }
            );
    }

}
