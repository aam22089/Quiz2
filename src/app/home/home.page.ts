import { Component } from '@angular/core';
import { JokesService } from '../jokes.service';
import { Router } from '@angular/router';
import { RndmjokeService } from '../rndmjoke.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  JokeList: any = [];
  Joke: any;
  constructor(private JokesService: JokesService, private router: Router, private RndmjokeService: RndmjokeService) { }
  ngOnInit() {
    this.JokesService.getCategory().subscribe((data) => { this.JokeList = data; console.log(data) });
    this.RndmjokeService.getJoke().subscribe((data) => { this.Joke = data; console.log(data) });
  }
  obtenerIdDeUrl(url: any) {
    const regex = /\/(\d+)\//;
    const match = url.match(regex);
    if (match) {
      return match[1];
    }
    else {
      return "No se encontró un ID válido en la URL";
    }
  }
  getJoke(url: any) {
    const JokeId = this.obtenerIdDeUrl(url);
    console.log(url);
  }

}
