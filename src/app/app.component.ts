import { Component } from '@angular/core';
import { ProfileCardService } from './@features/user/profile/components/profile/profile-card-component/services/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private  readonly profileCardService : ProfileCardService) {}

  name = this.profileCardService.getPicture();
  title = 'frontend';
}
