import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service.client";
import {SharedService} from "../../services/shared.service";
import {ReviewServiceClient} from "../../services/review.service.client";

@Component({
    selector: 'app-userprofile',
    templateUrl: './userprofile.component.html',
    styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

    userId: string;
    user = {};
    loggedInUser: any;
    currentUserFollows: any;
    alreadyFollows: boolean;
    sameUser: boolean;
    profileUserFollowees: any;
    profileUserFollowers: any;
    followees = [];
    followers = [];
    userReviews: any;

    constructor(private activatedRoute: ActivatedRoute, private userService: UserService,
                private sharedService: SharedService, private reviewService: ReviewServiceClient) {
    }

    ngOnInit() {
        this.activatedRoute.params
            .subscribe(
                (params: any) => {
                    this.userId = params['userId'];
                }
            );
        this.userService.findUserById(this.userId)
            .subscribe(
                (data: any) => {
                    this.user = data;
                    console.log(JSON.stringify(this.user));
                }
            );
        this.userService.fetchCurrentUser()
            .subscribe(
                (data: Boolean) => {
                    if (data) {
                        this.loggedInUser = this.sharedService.user;
                        if (this.user['_id'] === this.loggedInUser['_id']) {
                            this.sameUser = true;
                        } else {
                            this.sameUser = false;
                        }
                        this.profileUserFollowees = this.user['follows'].length > 0;
                        if (this.profileUserFollowees) {
                            this.userService.getFolloweeDetails(this.user['follows'])
                                .subscribe((result: any) => {
                                    this.followees = result;
                                    console.log(this.followees);
                                });
                        }

                        this.profileUserFollowers = this.user['followers'].length > 0;
                        if (this.profileUserFollowers) {
                            this.userService.getFolloweeDetails(this.user['followers'])
                                .subscribe((result: any) => {
                                    this.followers = result;
                                    console.log(this.followers);
                                });
                        }
                        console.log(this.user['_id']);
                        console.log(JSON.stringify(this.profileUserFollowees));
                    }
                });

        this.reviewService.findReviewsByUserId(this.userId)
            .subscribe(
                (data: any) => {
                    this.userReviews = data;
                    console.log('User reviews are ' + this.userReviews);
        }
            );
    }

    followUser() {
        this.userService.followUser(this.loggedInUser['_id'], this.userId)
            .subscribe(
                (data: any) => {
                    location.reload(true);
                    console.log('Successfully Followed User');
                }
            );

    }

    unfollowUser() {
        this.userService.unfollowUser(this.loggedInUser['_id'], this.userId)
            .subscribe(
                (data: any) => {
                    location.reload(true);
                    console.log('Successfully Followed User');
                }
            );

    }

    getFollowees(userId: string) {
        this.userService.getFollowees(userId)
            .subscribe(
                (data: any) => {
                    this.currentUserFollows = data;
                    console.log()
                    console.log('Current user Follows ' + JSON.stringify(this.currentUserFollows['follows']));
                    if (this.currentUserFollows['follows'].lastIndexOf(this.userId) > -1) {
                        this.alreadyFollows = true;
                    } else {
                        this.alreadyFollows = false;
                    }
                }
            );
    }


}
