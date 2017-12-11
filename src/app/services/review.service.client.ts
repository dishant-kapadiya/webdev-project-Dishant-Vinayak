import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable()
export class ReviewServiceClient {

    baseUrl = environment.baseUrl;
    constructor(private _http: Http) {
    }

    createReview(review: any) {
        return this._http.post(this.baseUrl + '/api/v1/review', review)
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data;
                }
            );
    }

    findReviewById(reviewId: string) {
        return this._http.get(this.baseUrl + '/api/v1/review/' + reviewId)
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data;
                }
            );
    }
    findAllReviews() {
        return this._http.get(this.baseUrl + '/api/v1/reviews')
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data;
                }
            );
    }

    findReviewsByUserId(userId: string) {
        return this._http.get(this.baseUrl + '/api/v1/reviewsBy/' + userId)
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data;
                }
            );
    }

    findReviewsByMovieId(movieId: string) {
        return this._http.get(this.baseUrl + '/api/v1/reviewsFor/' + movieId)
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data;
                }
            );
    }

    findReviewsByFor(userId: string, movieId: string) {
        return this._http.get(this.baseUrl + '/api/v1/reviewByFor/' + userId + movieId)
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data;
                }
            );
    }

    updateReview(review: any) {
        return this._http.put(this.baseUrl + '/api/v1/review', review)
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data;
                }
            );
    }

    deleteReview(reviewId: string) {
        return this._http.delete(this.baseUrl + '/api/v1/review/' + reviewId)
            .map((res: Response) => {
                    const data = res.json();
                    return data;
                }
            );
    }



}
