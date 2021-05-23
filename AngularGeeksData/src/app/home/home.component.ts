import { take } from 'rxjs/operators';
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
users =[]
user = {}
errormsg =''
logedin = false
  ngOnInit(): void {
    this.islogi();
  }

islogi(){
  this.auth_service.getUser().subscribe(res=>{
    this.user = res

    this.logedin = true
    Emitters.authEmitter.emit(true);
    this.getusers()


  },error=>{
    this.logedin = false
    Emitters.authEmitter.emit(false);
    this.router.navigate(['/auth']);

  })
}

getusers(){
  this.auth_service.allUsers().pipe(take(1)).subscribe(res=>{
    this.users = res.filter(res=>{
      return res.id !== this.user['id'];
    });

  })
}
delete(id : number){
  this.auth_service.deleteUser(id).pipe(take(1)).subscribe(res=>{
   this.getusers()
  })
}
}
