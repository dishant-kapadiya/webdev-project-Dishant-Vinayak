import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service.client";
import {ReviewServiceClient} from "../../services/review.service.client";
import {MovieServiceClient} from "../../services/movie.service.client";
import {PocServiceClient} from "../../services/poc.service.client";
import {SharedService} from "../../services/shared.service";

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

    movieTMDBId: string;
    user: any;
    movieByTMDBId = {credits: []};
    currentUser = {};
    objectId: string;
    reviewsForMovie: any;
    canReview: boolean;
    review: String;
    movieFromDB = {};
    newreview: string;
    email: string;
    loggedIn: boolean;

    constructor(private router: Router, private userService: UserService, private reviewService: ReviewServiceClient,
                private pocService: PocServiceClient, private movieService: MovieServiceClient,
                private activatedRoute: ActivatedRoute, private sharedService: SharedService) {
    }

    ngOnInit() {
        this.activatedRoute.params
            .subscribe(
                (params: any) => {
                    this.movieTMDBId = params['movieId'];
                    console.log(this.movieTMDBId);
                }
            );
        this.userService.fetchCurrentUser()
            .subscribe((data) => {
                if (data) {
                    this.loggedIn = true;
                    this.email = this.sharedService.user['email'];
                }
            });
        this.pocService.findMovieById(this.movieTMDBId)
            .subscribe(
                (movie: any) => {
                    console.log('Reached here');
                    // console.log('Movie here is ' + JSON.stringify(movie));
                    // const tempMovie = movie;
                    this.movieByTMDBId = movie;
                    this.findMovieByObjectId();
                    console.log('Temp Movie by id is ' + JSON.stringify(this.movieByTMDBId));
                },
                (error: any) => {
                    console.log(error);
                }
            );
        this.userService.fetchCurrentUser()
            .subscribe(
                (data: any) => {
                    if (data) {
                        this.currentUser = this.sharedService.user;
                        console.log("Current user in movie component is" + JSON.stringify(this.currentUser));
                    }
                }
            );
    }

    findMovieByObjectId() {
        this.movieService.findMovieById(this.movieByTMDBId['id'])
            .subscribe(
                (resp: Response) => {
                    console.log(resp);
                    const data = resp;
                    this.objectId = resp['_id'];
                    this.movieFromDB = data;
                    console.log("movie from DB" + JSON.stringify(data));
                    this.findReviewsByMovieId();
                }
            );
    }

    createReview() {
        if (this.currentUser['role'] !== 'Critic') {
            return;
        }
        this.reviewService.findReviewsByFor(this.currentUser['_id'], this.movieFromDB['_id'])
            .subscribe(
                (resp: Response) => {
                    if (resp === null) {
                        const review = {
                            ownerId: this.currentUser['_id'],
                            username: this.currentUser['email'],
                            movieId: this.objectId,
                            review: this.newreview
                        };
                        console.log('newreview is ' + this.newreview);
                        this.reviewService.createReview(review)
                            .subscribe(
                                (response: Response) => {
                                    const data = response;
                                    location.reload(true);
                                    return data;
                                },
                                (error: any) => {
                                    console.log(error);
                                }
                            );
                    } else {
                        console.log('You have already reviewed this movie');
                    }
                },
                (error: any) => {
                    const review = {
                        userId: this.currentUser['_id'],
                        username: this.currentUser['email'],
                        movieId: this.objectId,
                        review: this.newreview
                    };
                    this.reviewService.createReview(review)
                        .subscribe(
                            (resp: Response) => {
                                const data = resp;
                                return data;
                            },
                            (error1: any) => {
                                console.log(error1);
                            }
                        );
                }
            );
    }

    findReviewsByMovieId() {
        console.log("movie from DB" + JSON.stringify(this.movieFromDB));
        this.reviewService.findReviewsByMovieId(this.movieFromDB['_id'])
            .subscribe(
                (res: Response) => {
                    const data = res;
                    this.reviewsForMovie = data;
                    console.log('Reviews for movie ' + JSON.stringify(this.reviewsForMovie));
                    this.canReviewFunction();
                    return data;
                },
                (error: any) => {
                    console.log(error);
                }
            );
    }

    canReviewFunction() {
        if (this.currentUser['role'] !== 'Critic') {
            this.canReview = false;
        }
        this.reviewService.findReviewsByFor(this.currentUser['_id'], this.movieFromDB['_id'])
            .subscribe(
                (resp: Response) => {
                    if (resp === null) {
                        this.canReview = true;
                    } else {
                        this.canReview = false;
                    }
                },
                (error: any) => {
                    {
                        this.canReview = true;
                    }
                }
            );
    }

    logout() {
        this.userService.logout()
            .subscribe(
                (updatedUser) => {
                    location.reload(true);
                    this.router.navigate(['/home']);
                },
                (err) => {
                }
            );
    }
    deleteReview(id: string) {
        this.reviewService.deleteReview(id)
            .subscribe(
                (data) => {
                    location.reload(true);
                    console.log('Deleted review');
                },
                (Err) => {
                }
                );
    }


}
