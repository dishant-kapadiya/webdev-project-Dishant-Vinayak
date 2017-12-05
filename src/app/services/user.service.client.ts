import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {SharedService} from './shared.service';

@Injectable()

export class UserService {
    constructor(private _http: Http, private sharedService: SharedService, private router: Router) {
    }

    baseUrl = environment.baseUrl;

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
                    const data = res.json();
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
}