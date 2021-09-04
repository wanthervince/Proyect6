import { Component, OnInit } from '@angular/core';
import { tarea } from '../../model/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent implements OnInit {
  listTareas: tarea[] = [];

  NombreTarea!: string;
  nombreTareaEdit!: string;

  constructor() {}

  ngOnInit(): void {}

  addTarea() {
    const todo: tarea = {
      nombre: this.NombreTarea.toUpperCase(),
      estado: true,
    };
    this.listTareas.push(todo);
    this.NombreTarea = '';
  }
  completeTarea(i: number) {
    this.listTareas[i].estado = false;
    console.log(this.listTareas[i].estado);
  }

  deleteTarea(i: number) {
    this.listTareas.splice(i, 1);
  }
}
