import { Component, OnInit } from '@angular/core';
import {PocServiceClient} from "../../services/poc.service.client";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    movies: any;
    title: string;
    searched: boolean;
    movies1: any;
    constructor(private pocService: PocServiceClient) { }

  ngOnInit() {
        this.findHighestGrossing();
  }
    searchMovies() {
        this.pocService.findMovies(this.title)
            .subscribe(
                (data: any) => {
                    console.log('Data here is ');
                    console.log(data);
                    let val = data;
                    console.log('Val is ' + JSON.stringify(val));
                    this.movies = val;
                    console.log('Final movie list ' + JSON.stringify(this.movies));
                    this.searched = true;
                }
            );
    }

    findHighestGrossing() {
        this.pocService.findHighestGrossing()
            .subscribe(
                (data: any) => {
                    console.log('Data here is ');
                    console.log(data);
                    let val1 = data;
                    console.log('Val is ' + JSON.stringify(val1));
                    this.movies1 = val1;
                    console.log('Final movie list ' + JSON.stringify(this.movies1));
                    this.searched = true;
                }
            );
    }

}

