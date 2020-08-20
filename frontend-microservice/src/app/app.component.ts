import { Component } from '@angular/core';
import { faRedo, faListAlt, faCubes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend-microservice';
  faCubes = faCubes;
  faRedo = faRedo;
  faListAlt = faListAlt;
}
