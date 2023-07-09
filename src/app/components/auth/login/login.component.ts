import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;

  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onLogin(): void {
    const { email, password } = this.loginForm.value;
    this.auth.signInWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(['']);
    });
  }

  loginWithGoogle(): Promise<void | void[]> {
    return this.auth
      .signInWithPopup(new GoogleAuthProvider())
      .then((res: any) => {
        this.router.navigateByUrl('');
      })
      .catch((error: any) => [console.log(error)]);
  }
}
