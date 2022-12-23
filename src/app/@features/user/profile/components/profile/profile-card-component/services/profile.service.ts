import { Injectable } from "@angular/core";
import { UserModule } from "src/app/@features/user/user.module";

@Injectable({
    providedIn : "root"
})
export class ProfileCardService {
  constructor() {
    console.log("PictureService");
  }
  getPicture() {
    return "picturee";
  }
}