import { Component, OnInit } from '@angular/core';
import { faCubes, faRedo, faListAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  faCubes = faCubes;
  faRedo = faRedo;
  faListAlt = faListAlt;
  constructor() {}

  ngOnInit(): void {}
}
