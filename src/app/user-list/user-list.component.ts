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
  //user={id: 1,name: 'Indhu', address: 'Perundurai', password: 'indhu@123', repassword: 'indhu@123', mail:'indhusrees16@gmail.com', mode:''}
  user={id: 0,name: '', address: '', password: '', repassword: '', mail:'', mode:'Edit'}
  userNo= this.user.id
  constructor(
    public service: MyServiceService
  ){
    //const user1={id: 1,name: 'Indhu', address: 'Perundurai', password: 'indhu@123', repassword: 'indhu@123', mail:'indhusrees16@gmail.com', mode:''}
    //this.userArray.push(user1)
  } 

  edit(mode:any, num: any){
    this.user.mode=mode
    this.service.userCard=true
    if(mode=='New'){
      this.user.id = (this.service.userArray.length)+1
      this.user.address=''
      this.user.mail=''
      this.user.name=''
      this.user.password=''
      this.user.repassword=''
    }
    else{
      var index = num-1
      this.user.address=this.service.userArray[index].address
      this.user.mail=this.service.userArray[index].mail
      this.user.name=this.service.userArray[index].name
      this.user.password=this.service.userArray[index].password
      this.user.repassword=this.service.userArray[index].repassword
    }
  }

  /*message(event: any){
    if(this.user.id == event.id){
      this.user = event
    }
  }*/

  message(event: any){
    //console.log('Enter parent comp!..')
    //if(event.mode == 'New'){
    //  this.service.userArray.push(event)
    //}
    if(event.mode == 'Edit'){
      var i = (event.id) - 1
      this.service.userArray[i].id == event.id
      this.service.userArray[i].name = event.name
      this.service.userArray[i].address = event.address
      this.service.userArray[i].mail = event.mail
      this.service.userArray[i].password = event.password
      this.service.userArray[i].repassword = event.repassword      
    }
    console.log(this.service.userArray)
  }

}
