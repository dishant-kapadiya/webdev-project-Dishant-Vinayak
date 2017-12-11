import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {SharedService} from './shared.service';
import {Observable} from "rxjs/Observable";

@Injectable()

export class UserService {
    constructor(private _http: Http, private sharedService: SharedService, private router: Router) {
    }

    baseUrl = environment.baseUrl;
    options = new RequestOptions();

    login(email: String, password: String) {
        this.options.withCredentials = true;

        const body = {
            username: email,
            password: password
        };
        return this._http.post(this.baseUrl + '/api/v1/login', body, this.options)
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data;
                }
            );
    }

    logout() {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/v1/logout', '', this.options)
            .map(
                (res: Response) => {
                    const data = res;
                }
            );
    }

    register(email: String, password: String) {
        this.options.withCredentials = true;
        const user = {
            email: email,
            password: password
        };

        return this._http.post(this.baseUrl + '/api/v1/register', user, this.options)
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data;
                }
            );
    }

    fetchCurrentUser() {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/v1/loggedIn', '', this.options)
            .map(
                (res: Response) => {
                    const user = res.json();
                    if (user !== 0) {
                        this.sharedService.user = user; // setting user so as to share with all components
                        return true;
                    } else {
                        return false;
                    }
                }
            );
    }

    loggedIn() {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/v1/loggedIn', '', this.options)
            .map(
                (res: Response) => {
                    const user = res.json();
                    if (user !== 0) {
                        this.sharedService.user = user; // setting user so as to share with all components
                        return true;
                    } else {
                        this.router.navigate(['/login']);
                        return false;
                    }
                }
            );
    }

    createUser(user: any) {
        return this._http.post(this.baseUrl + '/api/v1/user', user)
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data;
                }
            );
    }

    findUserById(userId: string) {
        return this._http.get(this.baseUrl + '/api/v1/user/' + userId)
            .map(
                (res: Response) => {
                    console.log('Reached here');
                    const data = res.json();
                    console.log('Data here is ' + JSON.stringify(data));
                    return data;
                }
            );
    }


    findUserByEmail(email: string) {
        return this._http.get(this.baseUrl + '/api/v1/user?email=' + email)
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data;
                }
            );
    }

    findUserByCredentials(email: string, password: string) {
        return this._http.get(this.baseUrl + '/api/v1/user?email=' + email + '&password=' + password)
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data;
                }
            );
    }

    updateUser(userId: string, user: any) {
        return this._http.put(this.baseUrl + '/api/v1/user/' + userId, user);
    }

    deleteUser(userId: string) {
        return this._http.delete(this.baseUrl + '/api/v1/user/' + userId).map(
            (res: Response) => {
                const data = res.json();
                return data;
            }
        );
    }

    getAllUsers() {
        return this._http.get(this.baseUrl + '/api/v1/allUsers').map(
            (res: Response) => {
                const data = res.json();
                return data;
            }
        );
    }

    followUser(loggedInUserId: string, toBeFollowed: string) {
        return this._http.get(this.baseUrl + '/api/v1/user/' + loggedInUserId + '/follow/' + toBeFollowed)
            .map(
                (res: Response) => {
                    return res;
                }
            );
    }

    unfollowUser(loggedInUserId: string, toBeFollowed: string) {
        return this._http.get(this.baseUrl + '/api/v1/user/' + loggedInUserId + '/unfollow/' + toBeFollowed)
            .map(
                (res: Response) => {
                    return res;
                }
            );
    }
    getFollowers(loggedInId: string) {
        return this._http.get(this.baseUrl + '/api/v1/user/' + loggedInId + '/followers')
            .map(
                (res: Response) => {
                    return res.json();
                }
            );
    }
    getFollowees(loggedInId: string) {
        return this._http.get(this.baseUrl + '/api/v1/user/' + loggedInId + '/follows')
            .map(
                (res: Response) => {
                    return res.json();
                }
            );
    }
}
