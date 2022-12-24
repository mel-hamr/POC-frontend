import { Component, OnInit } from '@angular/core';
import { ProfileCardService } from '../services/profile.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  name: string;
  constructor(private profileCardService : ProfileCardService) {
    this.name = this.profileCardService.getPicture();
  }
  ngOnInit() {
  }

}

