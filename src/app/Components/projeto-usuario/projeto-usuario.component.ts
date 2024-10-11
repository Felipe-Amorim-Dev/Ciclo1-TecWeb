import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProjetoUsuarioService } from '../../Services/projetoUsuario.service';

@Component({
  selector: 'app-projeto-usuario',
  standalone: true,
  imports: [],
  templateUrl: './projeto-usuario.component.html',
  styleUrl: './projeto-usuario.component.css'
})
export class ProjetoUsuarioComponent implements OnInit, OnDestroy {
  private destroyer$ = new Subject<boolean>();

  constructor(
    private service: ProjetoUsuarioService
  ){}

  dataUsuario: any = []

  ngOnInit(): void {
    this.service.getAllArquivos().pipe(takeUntil(this.destroyer$))
      .subscribe(data =>{
        this.dataUsuario = data;
      })
  }

  ngOnDestroy(): void {
    this.destroyer$.next(true);
    this.destroyer$.complete();
  }
}
