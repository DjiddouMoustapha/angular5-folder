import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object;

  constructor(private userService : UserService,private http: HttpClient) { }

  ngOnInit() {

    this.userService.getProfile().subscribe(profile =>{


        this.user = profile['user'];
      //console.log();
    },
  err => {
    console.log(err);
    return false;
  }


  );
  }





}
