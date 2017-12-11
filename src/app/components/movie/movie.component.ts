import { Component, OnInit } from '@angular/core';
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

  movieId: string;
  user: any;
  movieById: any;
  currentUser: any;
  objectId: string;
  reviewsForMovie: any;
  canReview: boolean;

  constructor(private router: Router, private userService: UserService, private reviewService: ReviewServiceClient,
              private pocService: PocServiceClient, private movieService: MovieServiceClient,
              private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit() {
      this.findMovieByObjectId();
      this.findReviewsByMovieId();
      this.canReviewFunction();
    this.currentUser = {};
    this.currentUser = this.sharedService.user;
    console.log('Current user is ' + this.currentUser);
    this.activatedRoute.params
        .subscribe(
            (params: any) => {
              this.movieId = params['movieId'];
            }
        );
    this.movieById = this.findMovieById(this.movieId);
    /*
    this.movieById = this.findMovieById(this.movieId);
      console.log('MovieById is' + JSON.stringify(this.movieById));
    // console.log('Movie is ' + JSON.stringify(this.movieById));
    */
      const tempMovie = this.findMovieById(this.movieId);
      console.log('Temp movie is ' + JSON.stringify(tempMovie));
      this.createMovie();

  }

  findMovieById(movieId) {
      console.log('Movie ID is ' + movieId);
    this.pocService.findMovieById(movieId)
        .subscribe(
            (movie: any) => {
                console.log('Reached here');
                // console.log('Movie here is ' + JSON.stringify(movie));
                const tempMovie = movie;
                console.log('Temp Movie by id is ' + JSON.stringify(tempMovie));
              return movie;
            },
            (error: any) => {
                console.log(error);
            }
        );
  }
  createMovie() {
      console.log('Inside create, current movie is ' + JSON.stringify(this.movieById));
    this.movieService.findMovieById(this.movieId)
        .subscribe(
            (response: any) => {
              if (response === null) {
                const movie = {
                  movieId: this.movieById['id'],
                  title: this.movieById['title']
                };
                console.log('Creating movie ' + JSON.stringify(movie));
                this.movieService.createMovie(movie)
                    .subscribe(
                        (resp: any) => {
                          console.log('Created movie ' + resp);
                  },
                        (error: any) => {
                          console.log(error);
                  }
                    );
              } else {
                console.log('This movie exists');
              }
            },
            (error: any) => {
                const movie = {
                    movieId: this.movieById['id'],
                    title: this.movieById['title']
                };
                console.log('Creating movie ' + movie);
                this.movieService.createMovie(movie)
                    .subscribe(
                        (resp: any) => {
                            console.log('Created movie ' + resp);
                        },
                        (err: any) => {
                            console.log(err);
                        }
                    );
            }
        );
  }

  findMovieByObjectId() {
    this.movieService.findMovieById(this.movieById['id'])
        .subscribe(
            (resp: Response) => {
              const data = resp.json();
              this.objectId = resp['_id'];
              return data;
            }
    );
  }

  createReview(comment: string) {
    if (this.currentUser.role !== 'Critic') {
      return;
    }
    this.reviewService.findReviewsByFor(this.currentUser['_id'], this.movieById.id)
        .subscribe(
            (resp: Response) => {
                if (resp === null) {
                    const review = {
                        userId: this.currentUser['_id'],
                        username: this.currentUser['email'],
                        movieId: this.objectId,
                        review: comment
                    };
                    this.reviewService.createReview(review)
                        .subscribe(
                            (response: Response) => {
                                const data = response.json();
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
                    review: comment
                };
                this.reviewService.createReview(review)
                    .subscribe(
                        (resp: Response) => {
                            const data = resp.json();
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
    this.reviewService.findReviewsByMovieId(this.movieId)
        .subscribe(
            (res: Response) => {
              const data = res.json();
              this.reviewsForMovie = data;
              return data;
      },
            (error: any) => {
              console.log(error);
            }
        );
  }

  canReviewFunction() {
      if (this.currentUser.role !== 'Critic') {
          this.canReview = false;
      }
      this.reviewService.findReviewsByFor(this.currentUser['_id'], this.movieById['id'])
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
                      console.log(error);
                  }
      }
          );
  }


}
