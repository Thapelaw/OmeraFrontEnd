import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user'
import { Role } from '../model/role'
import { AuthenticationServiceService } from '../services/authentication-service.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User;

  constructor(private router: Router, private auth: AuthenticationServiceService) {
    this.auth.user.subscribe(x => this.user = x);
  }
  get isAdmin() {
    return this.user && this.user.role === Role.Admin;
  }
  get isUser() {
    return this.user && this.user.role === Role.User;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
  ngOnInit(): void {
  }

}
