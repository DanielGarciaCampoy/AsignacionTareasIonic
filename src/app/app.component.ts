import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'Gestión de Personas', url: '/folder/People', icon: 'people' },
    { title: 'Gestión de tareas', url: '/folder/Tasks', icon: 'file-tray-full' },
    { title: 'Asignar tareas', url: '/folder/Assignments', icon: 'list' },
    { title: 'Ver tareas asignadas', url: '#', icon: 'layers' },
    //{ title: 'Spam', url: '', icon: 'warning' },
  ];
  constructor() {}
}
