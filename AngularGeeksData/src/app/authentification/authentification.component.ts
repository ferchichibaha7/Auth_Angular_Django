import { UserAuthService } from './../services/user-auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css'],
})
export class AuthentificationComponent implements OnInit {

  formstate = 'show';
  registerForm: FormGroup;
  loginForm: FormGroup;
  isFailed = false;
  isLoggedIn = false;
  errorMessages = [];


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth_service: UserAuthService,
  ) {}

  ngOnInit(): void {

    this.initRegForm();
    this.initlogForm();
  }

  initRegForm() {
    this.registerForm = this.formBuilder.group(
      {
        email: '',
        password: '',
        cpassword: '',
      },
      { validators: this.checkPasswords }
    );
  }

  initlogForm() {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  toggleForm(type) {
    type == 'login' ? (this.formstate = 'show') : (this.formstate = 'hide');
  }

  register(): void {
    this.errorMessages = [];
    let tosend = this.registerForm.getRawValue();
    if (tosend.cpassword) {
      delete tosend.cpassword;
    }
    this.auth_service.register(tosend).subscribe(
      (res) => {
        this.errorMessages = [];
        this.formstate = 'show';
      },
      (error) => {
        this.hundelErrors(error)
      }
    );
  }

  login(): void {

    this.errorMessages = [];
    let tosend = this.loginForm.getRawValue();
    this.auth_service.login(tosend).pipe(
      take(1),
    ).subscribe(
      (res) => {
        this.errorMessages = [];
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);

     this.hundelErrors(error)
      }
    );
  }

  checkPasswords(registerForm: FormGroup) {
    const password = registerForm.get('password').value;
    const confirmPassword = registerForm.get('cpassword').value;
    return password === confirmPassword ? null : { notSame: true };
  }


  hundelErrors(error){

    for (const [key, value] of Object.entries(error.error)) {
      let err = Array.isArray(value) ? value[0] : value;
      this.errorMessages.push(err);
    }
    this.isFailed = true;
  }
}



