import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AutenticarService } from '../../shared/services/autenticar/autenticar.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    CommonModule, 
    RouterLink,    
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  readonly dialog = inject(MatDialog);

  constructor(private AutenticarService: AutenticarService, private router: Router) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
    });
  }

  

  openDialog() {
    this.dialog.open(ModalComponent, {
      data: {
        titulo: 'Cadastro',
        mensagem: 'As instruções de cadastro foram enviadas para seu email.',
        btSair: 'Sair',
      },
    });
  }

  entrar() {
    let login = {
      email: '',
      senha: ''
    };

    login = this.formLogin.value

    if(login.email && login.senha) {
      let retorno = this.AutenticarService.login(login);
      if(retorno){
        window.alert('Usuario logado');
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 500);
      }else{
        window.alert('Usuario/senha incorrero');
      }
    } else {
      window.alert('Por favor, preencha os campos');
    }
  }

  cadastrar() {
    window.alert(
      'Processo de recuperação de senha enviado para o e-mail cadastrado!'
    );
  }
}
