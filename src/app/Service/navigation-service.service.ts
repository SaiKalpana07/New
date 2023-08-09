import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationServiceService {

  constructor(private router: Router) { }
  goToSecond() {
    this.router.navigate(['/list']);
  }

  goToThird() {
    this.router.navigate(['/add-todo']);
  }
}
