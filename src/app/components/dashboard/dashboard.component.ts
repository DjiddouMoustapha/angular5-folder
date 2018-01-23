import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name: String;
  email: String;
  username: String;
  user2 : any;

  constructor(private userService : UserService,private http: HttpClient) { }

  ngOnInit( ) {



    this.userService.getAll().subscribe(all =>{
      
      
          console.log(all);
          
      
              this.user2 = all;
            //console.log();
          },
        err => {
          console.log(err);
          return false;
        }
      
      
        );
  }

}
