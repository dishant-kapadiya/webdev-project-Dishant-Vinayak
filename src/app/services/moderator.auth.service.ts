import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from './user.service.client';
import {SharedService} from './shared.service';

@Injectable()
export class ModeratorAuthGuard implements CanActivate {
    constructor(private userService: UserService, private router: Router, private sharedService: SharedService) {}

    canActivate() {
        return this.userService.loggedIn(['moderator']);
    }
}
