import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-campaign-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.css']
})
export class CampaignDetailsComponent {
  campaign = {
    id: 1,
    title: 'Education for All',
    description: 'Providing school supplies to underprivileged children.',
    category: 'Education',
    goal: 10000,
    raised: 5000,
    progress: (5000 / 10000) * 100, // Auto-calculated percentage
    daysLeft: 20,
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=400&fit=crop',
    story: 'This campaign aims to provide essential school supplies and resources to children who lack access to quality education...',
    proofs: [
      'https://images.unsplash.com/photo-1509098681029-b45e9c845022?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&h=300&fit=crop'
    ]
  };

  constructor(private route: ActivatedRoute) {}

  donate() {
    alert('Donation process initiated!');
  }
}
