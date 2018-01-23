import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';




@Injectable()
export class UserService {

  user : any;
  authToken : any;
  results: string[];

  constructor(private http: HttpClient, private router :Router) { }


  registerUser(user){
    let headers = new HttpHeaders();

    const req = this.http.post('https://djiddou-auth.herokuapp.com/users/register', user);
    // 0 requests made - .subscribe() not called.
  return  req.subscribe( res =>{
    console.log(res);
    this.router.navigate(['login']);
  },
err =>{
  console.log(err);
  this.router.navigate(['register']);
})

  }
  StoreUserData(user,token){
    
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.user = user;
    this.authToken = token;
    }

  auth(user){
    
    const req = this.http.post('https://djiddou-auth.herokuapp.com/users/authenticate', user);
    return  req.subscribe( (data) =>{

      user = data['user'];
      const token = data['token'];

      if ( data["success"] == true ){
        console.log(data['user']);
        this.StoreUserData(user,token);
        this.router.navigate(['/profile']);
      }
      else{
        console.log(data);
        this.router.navigate(['/login']);
        
         //console.log(data+"hhhh");
      }
     
 
       
       
     },
   err =>{
     console.log(err);
     this.router.navigate(['/login']);
   })
  
  
  
  
  
  
  }


getProfile(){
  this.loadToken();
  let headers = new HttpHeaders();
console.log(this.authToken);
  headers.append('Authorization', this.authToken);
  console.log(headers);
  //headers.append('Content-Type','application/json');
  if(this.authToken==null){
    this.router.navigate(['/login']);
  }

  return   this.http.get('https://djiddou-auth.herokuapp.com/users/profile',{headers: headers.append('Authorization', this.authToken)});
  

}


getAll(){
  

  return   this.http.get('https://djiddou-auth.herokuapp.com/users/admin');
  

}



loadToken(){
const token = localStorage.getItem('id_token');
this.authToken = token;

}


  lougout(){
    this.user = null;
    localStorage.clear();
    }

    loggedin(){
      if(this.user != null){
      return true;
      } else {
      return false;  
      }
     }

}
