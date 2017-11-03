import { Component, OnInit, NgModule} from '@angular/core';
import {PocServiceClient} from '../../services/poc.service.client';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.css']
})
export class POCComponent implements OnInit {
  movies: any;
  title: string;
  searched: boolean;
  constructor(private pocService: PocServiceClient) { }

  ngOnInit() {
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

}

