import { CommonService } from './../common.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  allUsers: any;
  @Output() sendToParent = new EventEmitter();
  constructor(private commonService: CommonService) { }

  ngOnInit()  {
    this.commonService.userAdded.subscribe(res =>{
      console.log("User Added from Parent Component");
      this.getLatestUser()
      });
  }
  getLatestUser(){
    this.commonService.getLatestUser().subscribe(res =>{
      console.log(res);
      this.allUsers = res;
  });
}
editUser(user: any){
   this.sendToParent.emit(user);
   console.log(user);
}
deleteUser(user: any){
   this.commonService.deleteUser(user).subscribe(res =>{
     this.getLatestUser();
   })
}
}
