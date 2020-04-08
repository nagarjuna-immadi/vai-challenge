import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { User, Metric } from '../models/user.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  profileData: User;
  userMetrics: Metric[];
  selectedMetric: Metric;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getUser().subscribe((data: User) => {
      this.profileData = this.getProfileData(data);
      this.userMetrics = data.metrics;
      this.selectedMetric = this.userMetrics[0];
    });
  }

  getProfileData(user: User) {
    let profile = {
      ...user
    };
    delete profile.metrics;

    return profile;
  }

  yearChanged(year: number) {
    this.selectedMetric = this.userMetrics.find(element => element.year == year);
  }
}
