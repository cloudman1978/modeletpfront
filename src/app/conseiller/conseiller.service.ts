import { Injectable } from '@angular/core';
import { Conseiller} from "../model/conseiller";

@Injectable({
  providedIn: 'root'
})
export class ConseillerService {

  constructor() { }
  getAll()  {
    const fakeConseuillers = [
      new Conseiller("kim"),
      new Conseiller("stephane")
    ]
    return fakeConseuillers;

  }
}
