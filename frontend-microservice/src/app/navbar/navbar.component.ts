import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  username: string;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('').then(() => {
      window.location.reload();
    });
  }
}
