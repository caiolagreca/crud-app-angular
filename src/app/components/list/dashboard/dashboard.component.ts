import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private auth: AngularFireAuth, private router: Router) {}

  onLogout() {
    this.auth.signOut().then(() => this.router.navigate(['login']));
  }
}
