import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public name: string = '';
  public pwd: string = '';

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('user');
  }

  signup() {
    const data = {
      name: this.name,
      pwd: this.pwd
    };
    this.httpClient.post<any>("http://localhost:3000/signup", data).subscribe(result => {
      alert('Signup Success');
      this.router.navigate(['login']);
    }, error => {
      alert(error.error);
    });
  }

}
