import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // constructor(private render:Renderer2){
  //   this.render.setStyle(document.body, 'background-color', 'white');
  // }
  loginObj: Login;

  constructor(private http: HttpClient,private render:Renderer2) {
    this.render.setStyle(document.body, 'background-color', 'rgb(31 41 110)');
    this.loginObj = new Login();

  }

  onLogin(){
    // alert('Login Clicked');
    debugger;
    this.http.post('https://freeapi.miniprojectideas.com/api/User/Login',this.loginObj).subscribe((res:any)=>{
    
    if(res.reasult){
        alert('Login Success');
        //  this.router.navigatebyUrl('Pages/dashboard');
      }
      else{
        alert(res.message);
      }
    })
  }

}

export class Login {

  EmailId: string;
  Password: string;

  constructor() {
    this.EmailId = '';
    this.Password = '';
  }

}
