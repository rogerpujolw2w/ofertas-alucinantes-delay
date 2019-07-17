import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public isError: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.validarPass]]
    });
  }

  validarPass(c: FormControl) {
    if (c.value.length < 4) {
      return {
        validarPass: {
          valid: false
        }
      }
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.loginForm.value);

    return this.authService
      .loginuser(this.email.value, this.password.value)
      .subscribe(
        data => {
          const token = data.accessToken;
          this.authService.setToken(token);
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/ofertas']);
          this.isError = false;
        },
        error => this.onIsError()
      );
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }
}

