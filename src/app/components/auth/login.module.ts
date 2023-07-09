import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOtpInputModule } from 'ng-otp-input';

import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MobileCodeComponent } from './mobile-code/mobile-code.component';
import { MobileComponent } from './mobile/mobile.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MobileCodeComponent,
    MobileComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule,
    NgOtpInputModule,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    MobileComponent,
    MobileCodeComponent,
  ],
})
export class LoginModule {}
