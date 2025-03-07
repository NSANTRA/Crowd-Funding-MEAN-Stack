import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [NgIf,RouterLink]
})
export class HeaderComponent {
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

    // Hide certain links on specific pages
    if (url === '/login' || url === '/register') {
      this.showLogin = false;
      this.showRegister = false;
    }
    if (url === '/dashboard') {
      this.showBrowse = false; // Hide "Browse" in Dashboard
      this.showStartCampaign = false; // Hide "Start Campaign"
    }
  }
}
