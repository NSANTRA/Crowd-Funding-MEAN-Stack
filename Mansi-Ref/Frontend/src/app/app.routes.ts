import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { HowItWorksComponent } from '../pages/how-it-works/how-it-works.component';
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';
import { StartCampaignComponent } from '../pages/start-campaign/start-campaign.component';
import { SuccessStoriesComponent } from '../pages/success-stories/success-stories.component';
import { AboutComponent } from '../pages/about/about.component';
import { BrowseComponent } from '../pages/browse/browse.component';
import { CampaignDetailsComponent } from '../pages/campaign-details/campaign-details.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('../pages/home/home.component').then((m) => m.HomeComponent)
    }
  },
  {
    path: 'how-it-works',
    pathMatch: 'full',
    loadComponent: () => {
      return import('../pages/how-it-works/how-it-works.component').then((m) => m.HowItWorksComponent)
    }
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadComponent: () => {
      return import('../pages/login/login.component').then((m) => m.LoginComponent)
    }
  },
  {
    path: 'register',
    pathMatch: 'full',
    loadComponent: () => {
      return import('../pages/register/register.component').then((m) => m.RegisterComponent)
    }
  },
  {
    path: 'start-campaign',
    pathMatch: 'full',
    loadComponent: () => {
      return import('../pages/start-campaign/start-campaign.component').then((m) => m.StartCampaignComponent)
    }
  },
  {
    path: 'about',
    pathMatch: 'full',
    loadComponent: () => {
      return import('../pages/about/about.component').then((m) => m.AboutComponent)
    }
  },
  {
    path: 'browse',
    pathMatch: 'full',
    loadComponent: () => {
      return import('../pages/browse/browse.component').then((m) => m.BrowseComponent)
    }
  },{
    path: 'campaign-details',
    pathMatch: 'full',
    loadComponent: () => {
      return import('../pages/campaign-details/campaign-details.component').then((m) => m.CampaignDetailsComponent)
    }
  },
  { path: '**', redirectTo: '' } ,
];
