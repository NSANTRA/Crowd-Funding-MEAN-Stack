import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-how-it-works',
  standalone: true, // Ensure this is a standalone component
  imports: [CommonModule], // Import CommonModule to use *ngClass
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent {
  steps = [
    {
      number: 1,
      title: 'Create Your Campaign',
      description: 'Start by creating your campaign page. Share your story, set your funding goal, and explain how you’ll use the funds. Add compelling images and videos to bring your campaign to life.'
    },
    {
      number: 2,
      title: 'Share With Your Network',
      description: 'Share your campaign with friends, family, and social networks. Use our built-in tools to spread the word and reach potential supporters.'
    },
    {
      number: 3,
      title: 'Receive Donations',
      description: 'Watch as supporters contribute to your cause. Track your progress and keep your donors updated with campaign updates and milestones.'
    },
    {
      number: 4,
      title: 'Make It Happen',
      description: 'Once your campaign reaches its goal, you’ll receive the funds to bring your project to life. Keep your supporters engaged by sharing your success story.'
    }
  ];
}
