import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor and routerLink
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { RouterModule } from '@angular/router'; // Import RouterModule for routing

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // Add required modules
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent {
  searchQuery: string = '';
  selectedCategory: string = '';
  sortOption: string = 'newest';

  categories = ['Education', 'Healthcare', 'Environment', 'Technology', 'Others'];

  campaigns = [
    {
      id: 1,
      title: 'Education for All',
      description: 'Providing school supplies to underprivileged children.',
      category: 'Education',
      raised: 5000,
      image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=500&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Clean Water Initiative',
      description: 'Bringing clean water access to remote villages.',
      category: 'Healthcare',
      raised: 12000,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85kODCv-_gS0YGEechlcC2z32KDyLrgQ0Lw&s'
    },
    {
      id: 3,
      title: 'Reforestation Project',
      description: 'Planting trees to combat deforestation.',
      category: 'Environment',
      raised: 8000,
      image: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=500&h=300&fit=crop'
    }
  ];

  filteredCampaigns = [...this.campaigns];

  filterCampaigns() {
    this.filteredCampaigns = this.campaigns.filter(campaign => {
      return (
        (this.selectedCategory === '' || campaign.category === this.selectedCategory) &&
        (this.searchQuery === '' || campaign.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      );
    });
  }

  sortCampaigns() {
    if (this.sortOption === 'newest') {
      this.filteredCampaigns = [...this.filteredCampaigns].reverse();
    } else if (this.sortOption === 'popular') {
      this.filteredCampaigns = [...this.filteredCampaigns].sort((a, b) => b.raised - a.raised);
    } else if (this.sortOption === 'ending') {
      this.filteredCampaigns = [...this.filteredCampaigns].sort((a, b) => a.raised - b.raised);
    }
  }
}
