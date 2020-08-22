import { Component, OnInit } from '@angular/core';
import {
  faRedo,
  faListAlt,
  faMailBulk,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  faMailBulk = faMailBulk;
  faRedo = faRedo;
  faListAlt = faListAlt;
  constructor() {}

  ngOnInit(): void {}
}
