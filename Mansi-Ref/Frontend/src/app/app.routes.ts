import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('../pages/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'how-it-works',
    loadComponent: () => import('../pages/how-it-works/how-it-works.component').then((m) => m.HowItWorksComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('../pages/login/login.component').then((m) => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('../pages/register/register.component').then((m) => m.RegisterComponent)
  },
  {
    path: 'start-campaign',
    loadComponent: () => import('../pages/start-campaign/start-campaign.component').then((m) => m.StartCampaignComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('../pages/about/about.component').then((m) => m.AboutComponent)
  },
  {
    path: 'browse',
    loadComponent: () => import('../pages/browse/browse.component').then((m) => m.BrowseComponent)
  },
  {
    path: 'campaign-details',
    loadComponent: () => import('../pages/campaign-details/campaign-details.component').then((m) => m.CampaignDetailsComponent)
  },
  {
    path:'success-stories',
    loadComponent : () => import('../pages/success-stories/success-stories.component').then((m) => m.SuccessStoriesComponent)
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];
