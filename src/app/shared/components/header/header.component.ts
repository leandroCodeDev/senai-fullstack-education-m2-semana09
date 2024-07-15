import { Component, Input } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { AutenticarService } from '../../services/autenticar/autenticar.service';
import { Router } from '@angular/router';

interface User{
  nome:String,
  admin:boolean
}
@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() user:User = {nome:"lorem",admin:false}
  showSideBar = false

constructor(private AutenticarService:AutenticarService, private router: Router){}

  ngOnInit(){
    let usuariologado = this.AutenticarService.getCredenciais()
    this.user.nome = usuariologado.nome
    this.user.admin = usuariologado.admin
    
  }
  callSidebar(){
    this.showSideBar = true
  }
  closeSidebar(){
    this.showSideBar = false
  }
}
