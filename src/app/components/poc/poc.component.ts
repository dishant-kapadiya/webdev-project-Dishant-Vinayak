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
  constructor(private pocService: PocServiceClient) { }

  ngOnInit() {
  }
  searchMovies() {
    this.pocService.findMovies(this.title)
      .subscribe(
      (data: any) => {
        console.log('Data here is ');
        console.log(data);
        let val = data._body;
        val = JSON.parse(val);
        console.log('Val is ' + val);
        this.movies = val.result;
      }
    );
  }

}

