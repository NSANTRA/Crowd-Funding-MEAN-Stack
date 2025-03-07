import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
<<<<<<< HEAD
  styleUrl: './header.component.css',
  imports: [NgIf,RouterLink]
=======
  styleUrls: ['./header.component.css'],
  imports: [NgIf]
>>>>>>> 66f567337a2db9cacb32aab44e485a9883bb65db
})
export class HeaderComponent {
  isHomePage = false;
  showHome = true;
  showAbout = true;
  showHowItWorks = true;
  showBrowse = true;
  showStartCampaign = true;
  showSuccessStories = true;
  showLogin = true;
  showRegister = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = event.url === '/';
        this.updateNavbarVisibility(event.url);
      }
    });
  }

  updateNavbarVisibility(url: string) {
    // Default: Show all links
    this.showHome = true;
    this.showAbout = true;
    this.showHowItWorks = true;
    this.showBrowse = true;
    this.showStartCampaign = true;
    this.showSuccessStories = true;
    this.showLogin = true;
    this.showRegister = true;

    // Home Page: Show only specific navbar items
    if (this.isHomePage) {
      this.showHome = false; // Hide "Home" button on home page
      this.showLogin = false; // Hide Login
      this.showRegister = false; // Hide Register
    }

    // Hide login & register buttons on login/register pages
    if (url === '/login' || url === '/register') {
      this.showLogin = false;
      this.showRegister = false;
    }

    // Hide certain links on the dashboard
    if (url === '/dashboard') {
      this.showBrowse = false;
      this.showStartCampaign = false;
    }
  }
}
