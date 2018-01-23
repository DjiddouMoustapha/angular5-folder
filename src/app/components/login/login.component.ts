import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password : String;
  email : String;

  constructor(private userService : UserService,private http: HttpClient) { }

  ngOnInit() {
  }


  onSubmit(){



    const user = {
      
         password : this.password,
         username : this.email
       
       
      
        }
       

        this.userService.auth(user);

    //console.log(this.email,this.password);

  }

}
