import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import {Title} from '@angular/platform-browser';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    email: string;
    password: string;
    verifypwd: string;
    errorFlag: boolean;
    userExistsFlag: boolean;
    role: string;
    errorMessage = 'Passwords do not match';
    userExistsMessage = 'Email already registered. Choose a different username.';
    @ViewChild('f') registrationForm: NgForm;

    constructor(private router: Router, private userService: UserService, private titleService: Title) {
    }

    ngOnInit() {
        this.titleService.setTitle('Register');
    }

    register() {
        let user = {};
        this.email = this.registrationForm.value.email;
        this.password = this.registrationForm.value.password;
        this.verifypwd = this.registrationForm.value.verifypwd;
        this.role = this.registrationForm.value.role;
        console.log('Email and password here are ' + this.email + ' and ' + this.password);
        const user2 = this.userService.findUserByEmail(this.email)
            .subscribe(
                (user: any) => {
                    this.userExistsFlag = true;
                },
                (error: any) => {
                    let user = {
                        email: this.email,
                        password: this.password,
                        firstName: '',
                        lastName: '',
                        role: this.role
                    };
                    if (this.password === this.verifypwd) {
                        this.userService.register(this.email, this.password, this.role)
                            .subscribe(
                                (user2: any) => {
                                    this.router.navigate(['/profile']);
                                },
                                (error: any) => {
                                    this.errorFlag = true;
                                    this.errorMessage = 'Error registering';
                                }
                            );
                    } else {
                        this.errorFlag = true;
                    }
                }
            );
    }

}