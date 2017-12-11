import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service.client";
import {ReviewServiceClient} from "../../services/review.service.client";

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

    constructor(private router: Router, private userService: UserService, private reviewService: ReviewServiceClient) {
    }

    ngOnInit() {
        this.userService.getAllUsers()
            .subscribe((users) => {
                this.users = users;
            }, (err) => {
                console.log(err);
            });

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
                   this.router.navigate(['/admin']);
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
                    this.users.splice(user2.index, 1);
                    this.router.navigate(['/admin']);
                    this.firstName = this.lastName = this.email = this.role = '';
                },
                (error: any) => {
                    console.log(error);
                }
            );
    }

}