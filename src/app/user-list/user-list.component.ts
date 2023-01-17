import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  //userArray: any=[];
  //userCard: any = false
  user={id: 1,name: 'Indhu', address: 'Perundurai', password: 'indhu@123', repassword: 'indhu@123', mail:'indhusrees16@gmail.com', mode:''}
  //user={id: 0,name: '', address: '', password: '', repassword: '', mail:'', mode:'Edit'}
  userNo= this.user.id
  constructor(
    public service: MyServiceService
  ){
    //const user1={id: 1,name: 'Indhu', address: 'Perundurai', password: 'indhu@123', repassword: 'indhu@123', mail:'indhusrees16@gmail.com', mode:''}
    //this.userArray.push(user1)
  } 

  edit(mode:any){
    this.user.mode=mode
    this.service.userCard=true
    if(mode=='New'){
      this.user.id = this.userNo+1
      this.user.address=''
      this.user.mail=''
      this.user.name=''
      this.user.password=''
      this.user.repassword=''
    }
  }

  message(event: any){
    if(this.user.id == event.id){
      this.user = event
    }
  }

  /*message(event: any){
    console.log('Enter parent comp!..')
    if(event.mode == 'New'){
      this.userArray.push(event)
    }
    else{
      var i
      for(i=0; i< this.userArray.length; i++){
        if(this.userArray[i].id == event.id){
          this.userArray[i].name = event.name
          this.userArray[i].address = event.address
          this.userArray[i].mail = event.mail
          this.userArray[i].password = event.password
          this.userArray[i].repassword = event.repassword
        }
      }
    }
    console.log(this.userArray)
  }*/

}
