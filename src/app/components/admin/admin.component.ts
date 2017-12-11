import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service.client";
import {ReviewServiceClient} from "../../services/review.service.client";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    users: any;
    firstName: string;
    lastName: string;
    role: string;
    email: string;
    user: any;
    selectedUserId: string;
    selectedUser: any;
    updatedUser: any;
    allReviews: any;

    constructor(private router: Router, private userService: UserService, private reviewService: ReviewServiceClient,
                private titleService: Title) {
    }

    ngOnInit() {

        this.titleService.setTitle('Admin Page');
        this.userService.getAllUsers()
            .subscribe((users) => {
                this.users = users;
            }, (err) => {
                console.log(err);
            });

        this.reviewService.findAllReviews()
            .subscribe(
                (data: any) => {
                    this.allReviews = data;
                    console.log('Reviews here are '+ this.allReviews);
                    return data;
                },
                (error: any) => {
                    console.log(error);
                }
            );

    }
    createUser() {
        this.user = {};
        this.user['firstName'] = this.firstName;
        this.user['lastName'] = this.lastName;
        this.user['email'] = this.email;
        this.user['role'] = this.role;
        console.log('user here is ' + JSON.stringify(this.user));
        this.userService.createUser(this.user)
            .subscribe(
                (user2: any) => {
                    this.users.push(this.user);
                    this.router.navigate(['/admin']);
                    this.firstName = this.lastName = this.email = this.role = '';
                },
                (error: any) => {
                    console.log(error);
                }
            );
    }
    selectUser(userId: string) {
        console.log('selected id is ' + userId);
        this.selectedUserId = userId;
        this.userService.findUserById(userId)
            .subscribe(
                (user2: any) => {
                    console.log('User here is ' + user2);
                    this.selectedUser = user2;
                    console.log('Selected user in here ' + this.selectedUser);
                    this.firstName = user2.firstName;
                    this.lastName = this.selectedUser['lastName'];
                    this.email = this.selectedUser['email'];
                    this.role = this.selectedUser['role'];
                    console.log('First name is' + user2._id);
                },
                (error: any) => {
                    console.log(error);
                }
            );
        console.log('selected user is ' + JSON.stringify(this.selectedUser));
    }

    updateUser() {
       this.updatedUser = {};
       this.updatedUser['firstName'] = this.firstName;
       this.updatedUser['lastName'] = this.lastName;
       this.updatedUser['role'] = this.role;
       this.updatedUser['email'] = this.email;
       this.userService.updateUser(this.selectedUserId, this.updatedUser)
           .subscribe((user2: any) => {
                   location.reload(true);
                   this.firstName = this.lastName = this.email = this.role = '';
               },
               (error: any) => {
                   console.log(error);
               }
           );
       this.selectedUserId = '';
    }
    deleteUser(userId: string) {
        this.userService.deleteUser(userId)
            .subscribe(
                (user2: any) => {
                    location.reload(true);
                    this.firstName = this.lastName = this.email = this.role = '';
                },
                (error: any) => {
                    console.log(error);
                }
            );
    }

    getAllReviews() {
        this.reviewService.findAllReviews()
            .subscribe(
                (data: any) => {
                    return data;
                },
                (error: any) => {
                    console.log(error);
                }
            );
    }

    deleteReview(reviewId: string) {
        this.reviewService.deleteReview(reviewId)
            .subscribe(
                (data: any) => {
                    location.reload(true);
                    return data;
                },
                (error: any) => {
                    console.log(error);
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

}
