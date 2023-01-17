import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  showUserForm = true
  userCard = false
  userArray: any=[];

  constructor() { }
}
