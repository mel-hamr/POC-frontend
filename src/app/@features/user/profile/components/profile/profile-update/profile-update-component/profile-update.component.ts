import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {
    data: any
    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
      this.data = this.route.snapshot.data['profile'];
    }
}
