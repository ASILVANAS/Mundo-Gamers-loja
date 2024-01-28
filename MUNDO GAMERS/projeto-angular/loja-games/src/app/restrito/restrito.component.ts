import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-restrito',
  templateUrl: './restrito.component.html',
  styleUrls: ['./restrito.component.css']
})
export class RestritoComponent {

  constructor(private router: Router,
    private _loginService: LoginService){}
    logout(){
      localStorage.clear();
      this._loginService.setMostraMenu(true);
      this.router.navigate(['/login']);
    }
}
