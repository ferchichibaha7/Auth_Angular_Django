import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  formstate = 'show';
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: '',
      password: '',
      cpassword:''
    },{ validators: this.checkPasswords });
  }

  toggleForm(type)
  {
    type == 'login' ? this.formstate = 'show' : this.formstate = 'hide';
  }

  register(): void {
    let tosend = this.registerForm.getRawValue();
    if (tosend.cpassword){
      delete tosend.cpassword;
    }
    console.log(tosend);
// todo post request
  }

  checkPasswords( registerForm: FormGroup){
    const password = registerForm.get('password').value;
    const confirmPassword = registerForm.get('cpassword').value;
    return password === confirmPassword ? null : { notSame: true }
}
}
