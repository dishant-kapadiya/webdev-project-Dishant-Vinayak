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
    movies2: any;
    movies3: any;
    constructor(private pocService: PocServiceClient) { }

  ngOnInit() {
      this.findMostPopular();
      this.findHighestGrossing();
      this.findLatestRelease();
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
                    console.log('Highest grossing are ' + JSON.stringify(this.movies1));
                }
            );
    }

    findMostPopular() {
        this.pocService.findMostPopular()
            .subscribe(
                (data: any) => {
                    console.log('Data here is ');
                    console.log(data);
                    let val2 = data;
                    console.log('Val is ' + JSON.stringify(val2));
                    this.movies2 = val2;
                    console.log('Most popular are ' + JSON.stringify(this.movies2));
                }
            );
    }

    findLatestRelease() {
        this.pocService.findLatestRelease()
            .subscribe(
                (data: any) => {
                    console.log('Data here is ');
                    console.log(data);
                    let val3 = data;
                    console.log('Val is ' + JSON.stringify(val3));
                    this.movies3 = val3;
                    console.log('Latest are ' + JSON.stringify(this.movies3));
                }
            );
    }

}

