import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {

  passwordConfirmation : String;
  password : String;
  name : String;
  email : String;


  constructor(private userService : UserService, private router :Router, private http: HttpClient ) { }

  ngOnInit() {
  }

  register(){


    const user = {
      
        name : this.name,
        email : this.email,
        username : this.passwordConfirmation,
        password : this.password
       
      
        }
        let headers = new HttpHeaders();
        headers.append('Content-Type','application/json');
        /*
            const req = this.http.post('http://localhost:3000/users/register', user)
            // 0 requests made - .subscribe() not called.
        .subscribe( res =>{
          console.log(res);
        },
      err =>{
        console.log(err);
      });*/

       this.userService.registerUser(user);

    //console.log(this.name, this.email, this.password, this.passwordConfirmation);
    //console.log(user);
  }

}
