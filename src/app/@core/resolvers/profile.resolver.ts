import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolver implements Resolve<any> {

    constructor(){
    }    
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const profileId = route.params['profileId'];
    return of({
        name : 'test',
        age : 15,
        profileId : profileId
    });
  }
}
