import { Component } from '@angular/core';
import { Navbar } from '../navbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isSidebarOpen = true;

  sidebarLinks: Navbar[] = [
    { icon: 'home', label: 'Home', route: '/list' },
    { icon: 'insert_chart', label: 'Chart', route: '/chart' },
  
  ];

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    const sidenavContainer = document.querySelector('.sidenav-container');
    if (sidenavContainer) {
      sidenavContainer.classList.toggle('sidenav-closed');
    }
  }

  logout() {
  
  }
}
