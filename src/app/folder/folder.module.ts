import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { HomeComponent } from './components/home/home.component';
import { PeopleComponent } from './components/people/people.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AssignmentsComponent } from './components/assignments/assignments.component';
import { PersonComponent } from './components/person/person.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FolderPage, HomeComponent, PeopleComponent, PersonComponent, TasksComponent, AssignmentsComponent, PersonDetailComponent]
})
export class FolderPageModule {}
