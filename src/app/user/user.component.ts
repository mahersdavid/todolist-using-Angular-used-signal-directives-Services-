import { Component, EventEmitter, input, Input, output, Output} from '@angular/core';
// import {DUMMY_USERS} from '../dummy-users'
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// const randomNum = Math.floor(Math.random() * DUMMY_USERS.length)
// type User = {
//   id : string,
//   name : string,
//   avatar : string
// }



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
//  @Input({required:true}) id ! : string;
//  @Input({required:true}) avatar ! : string;
//  @Input({required:true}) name ! : string;



  @Input({required : true}) user !: User
  @Input({required : true}) selected !: Boolean
  @Output() select = new EventEmitter<string>()

// select = output<string>()

//  avatar = input.required()
//  name = input.required()

 get imagePath(){
    return 'assets/users/users/'+this.user.avatar
 }

 onSelectUser(){
    this.select.emit(this.user.id)
  }

}
//   // selectedUser = signal(DUMMY_USERS[randomNum]) 

//   selectedUser = DUMMY_USERS[randomNum]
  
//   get imagePath(){
//     return 'assets/users/users/'+this.selectedUser.avatar
//   }

//   // imagePath = computed(()=>'assets/users/users/'+this.selectedUser().avatar)

//   // onSelectUser(){
//   //   console.log('Clicked');
//   // }

//   changeRandom(){
//     const randomNum = Math.floor(Math.random() * DUMMY_USERS.length)
//     // this.selectedUser.set(DUMMY_USERS[randomNum])
//     this.selectedUser = DUMMY_USERS[randomNum]
//       }