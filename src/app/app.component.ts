import { CommonService } from './common.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';

  userObj = {
    id:"",
    userName:"",
    userAge:"",
    userCity:""
  }
  isEdit: boolean = true;
  constructor(private commonService: CommonService) {}
  addUser(userForm: { value: any; }){
    console.log(userForm.value);
    let obj = userForm.value;
    obj.id = null;
    this.commonService.createUser(obj).subscribe(response => {
      console.log("User Added Successfully")
      // userForm.form.reset();
      this.commonService.informChild();
    });
  }

  receiveUser(user: any){
    console.log(user);
    this.userObj = Object.assign({}, user)
    this.isEdit = true;
  }
  updateUser(userForm: any){
     this.commonService.updateUser();
       console.log("User Updated");
      //  this.commonService.informChild();
       this.isEdit = false;
  } 
}
