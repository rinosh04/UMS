import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { UserModel } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user: UserModel = new UserModel();
  public data = [];
  public isAddUser: boolean = false;
  public showAdd: boolean = false;
  public showUpdate: boolean = false;
  public userId: string = '';
  public userName: string = '';
  public userMail: string = '';

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getUser();
  }

  // get all users
  getUser() {
    this.api.getApi().subscribe(result => {
      this.data = result;
    }, error => {
      alert(error.error);
    });
  }

  // save user
  addUser() {
    this.user.id = this.userId;
    this.user.name = this.userName;
    this.user.mail = this.userMail;
    this.api.postApi(this.user).subscribe(result => {
      alert('User added Successfully');
      this.isAddUser = false;
      this.getUser();
    }, error => {
      alert(error.error);
    });
  }

  // edit user
  editUser(user) {
    this.isAddUser = true;
    this.showUpdate = true;
    this.showAdd = false;
    this.userId = user.id;
    this.userName = user.name;
    this.userMail = user.mail;
  }

  // update user
  updateUser() {
    this.user.id = this.userId;
    this.user.name = this.userName;
    this.user.mail = this.userMail;
    this.api.putApi(this.user.id, this.user).subscribe(result => {
      alert('User updated Successfully');
      this.isAddUser = false;
      this.resetUser();
      this.getUser();
    }, error => {
      alert(error.error);
    });
  }

  // delete user
  deleteUser(user) {
    this.api.deleteApi(user.id).subscribe(result => {
      alert('User deleted Successfully');
      this.getUser();
    }, error => {
      alert(error.error);
    });
  }

  // reset user
  resetUser() {
    this.userId = '';
    this.userName = '';
    this.userMail = '';
  }

}
