import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Title} from "@angular/platform-browser";
import {SharedService} from "../../../services/shared.service";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    userId: string;
    user: any;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    @ViewChild('f') profileForm: NgForm;

    constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private titleService: Title, private sharedService: SharedService) { }

    ngOnInit() {
        this.titleService.setTitle('User Profile');
        this.user = this.sharedService.user;
        console.log('The user is' + JSON.stringify(this.user));
        this.email = this.user['email'];
        this.firstName = this.user['firstName'];
        this.lastName = this.user['lastName'];
        // this.activatedRoute.params.subscribe(params => {
        //     this.user = this.userService.findUserById(this.userId).subscribe(
        //         (user: any) => {
        //             this.user = user;
        //             console.log('Found user ' + JSON.stringify(this.user));
        //         },
        //         (error: any) => {
        //             console.log(error);
        //
        //         }
        //     );
        // });


    }
    update() {
        this.user['email'] = this.profileForm.value.email;
        this.user['firstName'] = this.profileForm.value.firstName;
        this.user['lastName'] = this.profileForm.value.lastName;
        console.log('First and last name: ' + this.firstName + ' ' + this.lastName);
        this.userService.updateUser(this.userId, this.user)
            .subscribe(
                (updatedUser) => {
                    if (updatedUser) {
                        console.log('Inside update');
                        this.user = updatedUser;
                    } },
                (err) => {
                }
            );

    }
}