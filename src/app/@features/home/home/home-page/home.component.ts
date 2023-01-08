import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { publishAppInfo } from '@store/app-info/actions/app-info.action';
import { AppInfoState } from '@store/app-info/states/app-info.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


    appinfo : AppInfoState ;
    constructor(private store : Store<{appInfo : AppInfoState}>) {
        this.appinfo = {}
    }

    ngOnInit(): void {
        this.store.select('appInfo').subscribe((data) => this.appinfo = data)
    }

    loadAppInfo() {
        this.store.dispatch(publishAppInfo(
            {  
                applicationName : 'POC',
                applicationVersion : '1.0.0',
                applicationDescription : 'POC',
                applicationAuthor : {
                    lastName : 'bob',
                    firstName : 'niggro',
                    email : 'bobTheNiggro@gmail.com'
                }
            }))
    }
}
