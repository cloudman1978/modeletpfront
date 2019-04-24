import { Injectable } from '@angular/core';
import { Client} from '../model/client';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }


  getAll()  {
		const fakeClient = [
		  new Client(0, "pwd", "Leault", "Jérémie", "jeremie.leault@gmail.com", 0706060606, "28 rue de GK", 69007, "Lyon", "celibataire", 0, 0 ),
		  new Client(1, "stephane", "Indienne", "Ananthee", "ana@gmail.com", 0606060606, "8 rue GK", 69007, "Lyon", "celibataire", 0, 1)
		]
		return fakeClient;
	
	  }

}
