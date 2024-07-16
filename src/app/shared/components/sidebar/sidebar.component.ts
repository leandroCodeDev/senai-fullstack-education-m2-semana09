import { CommonModule } from '@angular/common';
import { Component,EventEmitter,inject,Input, OnInit, Output } from '@angular/core';
import { Router} from '@angular/router';
import { AutenticarService } from '../../services/autenticar/autenticar.service';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Output() closeSidebar = new EventEmitter();
  @Input() admin=false
  readonly dialog = inject(MatDialog);

  modalSair = {
    titulo: 'Sair do sistema',
    mensagem: 'Deseja mesmo sair do sistema?',
  };

  constructor(private AutenticarService: AutenticarService, private router: Router) {}

  ngOnInit(){

  }

  fechar(){
    this.closeSidebar.emit()
  }

  openDialog() {
    this.closeSidebar.emit()
    this.dialog.open(ModalComponent, {
      data: {
        titulo: 'Sair do Sistema',
        mensagem: 'Deseja mesmo sair do sistema?',
        btCancelar: 'Cancelar',
        btSair: 'Sair',
      },
    });
  }

  sair(){
    setTimeout(() => {
      this.AutenticarService.logout()
      this.router.navigate(['/login']);
    }, 500);
  }


}
