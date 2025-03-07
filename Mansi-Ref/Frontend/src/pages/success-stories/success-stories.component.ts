import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-success-stories',
  standalone: true, // Ensure it's a standalone component
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.css'],
  imports : [NgFor]
})
export class SuccessStoriesComponent {
  stories = [
    {
      title: 'Rural School Project',
      description: 'Built 3 schools serving 500+ students in rural communities.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&h=300&fit=crop'
    },
    {
      title: 'Clean Water Initiative',
      description: 'Provided clean water access to 10,000+ people.',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=500&h=300&fit=crop'
    },
    {
      title: 'Environmental Impact',
      description: 'Planted 50,000 trees and restored local ecosystems.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop'
    }
  ];
}
