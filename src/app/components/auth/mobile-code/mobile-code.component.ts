import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-mobile-code',
  templateUrl: './mobile-code.component.html',
  styleUrls: ['./mobile-code.component.scss'],
})
export class MobileCodeComponent implements OnInit {
  otp!: string;
  verify: any;
  constructor() {}

  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '50px',
      height: '50px',
    },
  };

  ngOnInit(): void {
    this.verify = JSON.parse(localStorage.getItem('verificationId') || '{}');
    console.log(this.verify);
  }

  onOtpChange(otpCode: any) {
    this.otp = otpCode;
    console.log(this.otp);
  }

  handleClick() {
    let credentials = firebase.auth.PhoneAuthProvider.credential(
      this.verify,
      this.otp
    );
  }
}
