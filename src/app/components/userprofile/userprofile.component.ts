import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service.client";
import {SharedService} from "../../services/shared.service";

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
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService,
              private sharedService: SharedService) { }

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
            }
        );
    this.userService.fetchCurrentUser()
        .subscribe(
            (data: Boolean) => {
                if (data) {
                    this.loggedInUser = this.sharedService.user;
                    this.getFollowees();
                    console.log('Logged in user is ' + this.loggedInUser);
                }
            });
  }

  followUser() {
      this.userService.followUser(this.loggedInUser['_id'], this.userId)
          .subscribe(
              (data: any) => {
                  console.log('Successfully Followed User');
              }
          );

  }
    unfollowUser() {
        this.userService.unfollowUser(this.loggedInUser['_id'], this.userId)
            .subscribe(
                (data: any) => {
                    console.log('Successfully Followed User');
                }
            );

    }

    getFollowees() {
      this.userService.getFollowees(this.loggedInUser['_id'])
          .subscribe(
              (data: any) => {
                  this.currentUserFollows = data;
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
