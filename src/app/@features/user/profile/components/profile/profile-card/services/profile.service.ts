import { Injectable } from "@angular/core";

@Injectable()

export class ProfileCardService {
  constructor() {
    console.log("PictureService");
  }
  getPicture() {
    return "picturee";
  }
}