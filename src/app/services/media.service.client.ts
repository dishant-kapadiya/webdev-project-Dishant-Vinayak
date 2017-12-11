import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable()
export class MediaServiceClient {
    constructor(private _http: Http) {
    }
    baseUrl = environment.baseUrl;

    }

