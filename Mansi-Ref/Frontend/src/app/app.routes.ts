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
  { path: '', component: HomeComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'start-campaign', component: StartCampaignComponent },
  { path: 'success-stories', component: SuccessStoriesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'campaign-details', component: CampaignDetailsComponent },
  { path: '**', redirectTo: '' } ,
];
