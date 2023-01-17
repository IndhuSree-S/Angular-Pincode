import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  @Input() userData: any;
  @Output() sendMessage = new EventEmitter<string>();
  showForm = false

  constructor(
    public service: MyServiceService
  ){}

  register(event: any){
    console.log(this.userData)
    //this.userData = event.target.value
    this.service.userCard=false
    this.service.showUserForm=true
    if(this.userData.mode=='New'){
      this.service.userArray.push(this.userData)
    }    
    this.sendMessage.emit(this.userData)
  }

}
