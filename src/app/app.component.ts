import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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
    { title: 'Asignación de tareas', url: '/folder/Assignments', icon: 'list' },
    //{ title: 'Ver tareas asignadas', url: '#', icon: 'layers' },
    //{ title: 'Spam', url: '', icon: 'warning' },
  ];
  public labels = [];

  language = 0; // 0 español, 1 ingles
  constructor(
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('es')
  }
  onLanguage() {
    this.language = (this.language+1)%2;
    switch(this.language) {
      case 0:
        this.translate.setDefaultLang('es');
        break;
      case 1:
        this.translate.setDefaultLang('en');
        break;
    }
  }
}
