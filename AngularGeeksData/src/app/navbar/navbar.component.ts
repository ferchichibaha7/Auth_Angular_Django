import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  authenticated = false;

  constructor(private auth_service: UserAuthService) { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
  }


  logout(): void {
    this.auth_service.logout()
      .subscribe((res) => {
        console.log(res);
        Emitters.authEmitter.emit(false);
        this.authenticated = false});
  }

}
