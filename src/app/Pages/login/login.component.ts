import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // constructor(private render:Renderer2){
  //   this.render.setStyle(document.body, 'background-color', 'white');
  // }
  loginObj: Login;

  constructor(private http: HttpClient) {
    this.loginObj = new Login();

  }

  onLogin(){
    // alert('Login Clicked');
    debugger;
    this.http.post('https://freeapi.miniprojectideas.com/api/User/Login',this.loginObj).subscribe((res:any)=>{
    
    if(res.result){
        alert('Login Success');
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
// 