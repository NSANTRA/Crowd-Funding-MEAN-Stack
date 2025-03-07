import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-start-campaign',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './start-campaign.component.html',
  styleUrls: ['./start-campaign.component.css']
})
export class StartCampaignComponent {
  campaign = {
    title: '',
    category: '',
    description: '',
    goal: null,
    duration: null,
    image: ''
  };

  categories = ['Education', 'Healthcare', 'Environment', 'Technology', 'Community'];

  handleImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.campaign.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  handleSubmit() {
    console.log('Campaign Submitted:', this.campaign);
    alert('Campaign submitted successfully!');
  }
}
