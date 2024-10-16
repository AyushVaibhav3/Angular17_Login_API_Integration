import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(private render:Renderer2){
  this.render.setStyle(document.body, 'background-color', 'white');
}
}
