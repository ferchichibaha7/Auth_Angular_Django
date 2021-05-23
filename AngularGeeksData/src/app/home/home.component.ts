import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from '../emitters/emitters';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth_service: UserAuthService,private router: Router,
    ) { }
logedin = false
  ngOnInit(): void {
    this.auth_service.getUser().subscribe(res=>{
      this.logedin = true
      Emitters.authEmitter.emit(true);

    },error=>{
      this.logedin = false
      Emitters.authEmitter.emit(false);
      this.router.navigate(['/auth']);

    })
  }

}
