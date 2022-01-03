import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public name: string = '';
  public pwd: string = '';

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('user');
  }

  login() {
    this.httpClient.get<any>("http://localhost:3000/signup").subscribe(result => {
      const user = result.find((n) => {
        return n.name === this.name && n.pwd === this.pwd;
      });
      if (user) {
        alert('Login Success');
        localStorage.setItem('user', this.name);
        this.router.navigate(['user']);
      } else {
        alert('User not found');
      }
    }, error => {
      alert(error.error);
    });
  }

}
