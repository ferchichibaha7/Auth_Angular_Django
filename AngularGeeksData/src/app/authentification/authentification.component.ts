import { UserAuthService } from './../services/user-auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css'],
})
export class AuthentificationComponent implements OnInit {
  formstate = 'show';
  registerForm: FormGroup;
  isSignUpFailed = false;
  errorMessages = [];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth_service: UserAuthService
  ) {}

  ngOnInit(): void {
    this.initRegForm();
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
        for (const [key, value] of Object.entries(error.error)) {
          this.errorMessages.push(value[0]);
        }
        this.isSignUpFailed = true;
      }
    );
  }

  checkPasswords(registerForm: FormGroup) {
    const password = registerForm.get('password').value;
    const confirmPassword = registerForm.get('cpassword').value;
    return password === confirmPassword ? null : { notSame: true };
  }
}
